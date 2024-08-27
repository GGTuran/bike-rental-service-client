import { useAppSelector } from "@/redux/hooks"; // Import useAppSelector to access Redux state
import Loading from "@/components/Loading/Loading";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useGetBookingsQuery } from "@/redux/features/booking/bookingApi";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const MyRentals = () => {
  const { data: rentals, isLoading, isError } = useGetBookingsQuery('');
  const [activeTab, setActiveTab] = useState('unpaid');
  const [discountedRentals, setDiscountedRentals] = useState<any[]>([]); // State to hold rentals with discounted prices
  const navigate = useNavigate();

  // Access coupon code from Redux state
  const couponCode = useAppSelector((state) => state.coupon.code);

  // Function to handle payment
  const handlePayment = (rentalId: string) => {
    // Redirect to payment page with rental ID and apply coupon if available
    navigate(`/payment/${rentalId}${couponCode ? `?coupon=${couponCode}` : ''}`);
  };

  // Function to apply coupon
  const applyCoupon = () => {
    if (!couponCode) {
      toast.error('there is no coupon available')
    }else{
      const discountPercentage = parseInt(couponCode.replace('%', ''), 10); // Assume coupon code is a percentage like "10%"

      const updatedRentals = unpaidRentals.map((rental: { totalCost: number; }) => {
        const discountedPrice = rental.totalCost - (rental.totalCost * discountPercentage) / 100;
        return { ...rental, discountedPrice };
      });
  
      setDiscountedRentals(updatedRentals);
    }

   
  };

  if (isLoading) {
    return <Loading />;
  }

  if (isError || !rentals) {
    return <div>Error fetching rentals.</div>;
  }

  const data = rentals.data;
  const paidRentals = data?.filter((rental: { isPaid: boolean }) => rental.isPaid);
  const unpaidRentals = data?.filter((rental: { isPaid: boolean }) => !rental.isPaid);

  return (
    <div className="p-6">
      <Toaster/>
      <Tabs defaultValue="unpaid" onValueChange={(value) => setActiveTab(value)}>
        <TabsList>
          <TabsTrigger value="unpaid">Unpaid</TabsTrigger>
          <TabsTrigger value="paid">Paid</TabsTrigger>
        </TabsList>

        {/* Unpaid Rentals */}
        <TabsContent value="unpaid">
          {unpaidRentals.length === 0 ? (
            <p>No unpaid rentals found.</p>
          ) : (
            unpaidRentals.map((rental: { id: string; bike: { name: string }; startTime: string | number | Date; returnTime: string | number | Date; totalCost: number; isPaid: boolean; }) => (
              <div key={rental.id} className="p-4 border-b">
                <h3>{rental.bike?.name || 'Bike name not available'}</h3>
                <p>Start Time: {rental.startTime ? new Date(rental.startTime).toLocaleString() : "Not available"}</p>
                <p>Return Time: {rental.returnTime ? new Date(rental.returnTime).toLocaleString() : "Not Returned"}</p>
                <p>
                  Total Cost: $
                  {discountedRentals.find(d => d.id === rental.id)?.discountedPrice.toFixed(2) ?? rental.totalCost.toFixed(2)}
                </p>
                {/* Show coupon application option */}
               
                  <Button onClick={applyCoupon}>Apply Coupon</Button>
             
                {!rental.isPaid && (
                  <Button onClick={() => handlePayment(rental.id)}>Pay</Button>
                )}
              </div>
            ))
          )}
        </TabsContent>

        {/* Paid Rentals */}
        <TabsContent value="paid">
          {paidRentals.length === 0 ? (
            <p>No paid rentals found.</p>
          ) : (
            paidRentals.map((rental: { id: string; bike: { name: string }; startTime: string | number | Date; returnTime: string | number | Date; totalCost: number; isPaid: boolean; }) => (
              <div key={rental.id} className="p-4 border-b">
                <h3>{rental.bike?.name || 'Bike name not available'}</h3>
                <p>Start Time: {rental.startTime ? new Date(rental.startTime).toLocaleString() : "Not available"}</p>
                <p>Return Time: {rental.returnTime ? new Date(rental.returnTime).toLocaleString() : "Not Returned"}</p>
                <p>Total Cost: ${rental.totalCost.toFixed(2)}</p>
              </div>
            ))
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default MyRentals;
