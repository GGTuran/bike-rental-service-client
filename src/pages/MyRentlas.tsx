import Loading from "@/components/Loading/Loading";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useGetBookingsQuery } from "@/redux/features/booking/bookingApi";
import { Key, useState } from "react";
import { useNavigate } from "react-router-dom";


const MyRentals = () => {
  const { data: rentals, isLoading, isError } = useGetBookingsQuery('');
  const [activeTab, setActiveTab] = useState('unpaid');
  const navigate = useNavigate();

  const handlePayment = (rentalId: string) => {
    // Redirect to payment page with rental ID
    navigate(`/payment/${rentalId}`);
  };

  if (isLoading) {
    return <Loading></Loading>;
  }

  if (isError || !rentals) {
    return <div>Error fetching rentals.</div>;
  }

//   console.log(rentals);
const data = rentals.data;
console.log(data);
// console.log(data.startTime)

  const paidRentals = data?.filter((rental: { isPaid: any; }) => rental.isPaid);
  const unpaidRentals = data?.filter((rental: { isPaid: any; }) => !rental.isPaid);

  console.log(paidRentals);
  console.log(unpaidRentals);

  return (
    <div className="p-6">
      <Tabs defaultValue="unpaid" onValueChange={(value) => setActiveTab(value)}>
        <TabsList>
          <TabsTrigger value="unpaid">Unpaid</TabsTrigger>
          <TabsTrigger value="paid">Paid</TabsTrigger>
        </TabsList>
        <TabsContent value="unpaid">
          {unpaidRentals.length === 0 ? (
            <p>No unpaid rentals found.</p>
          ) : (
            unpaidRentals.map((rental: { id: string; bike: { name: any; }; startTime: string | number | Date; returnTime: string | number | Date; totalCost: any; isPaid: any; }) => (
                <div key={rental.id} className="p-4 border-b">
                <h3>{rental.bike?.name || 'Bike name not available'}</h3>
                <p>
                  Start Time:{" "}
                  {rental.startTime ? new Date(rental.startTime).toLocaleString() : "Not available"}
                </p>
                <p>
                  Return Time:{" "}
                  {rental.returnTime
                    ? new Date(rental.returnTime).toLocaleString()
                    : "Not Returned"}
                </p>
                <p>Total Cost: ${rental.totalCost ?? "N/A"}</p>
                {!rental.isPaid && (
                  <Button onClick={() => handlePayment(rental.id)}>Pay</Button>
                )}
              </div>
              
            ))
          )}
        </TabsContent>
        <TabsContent value="paid">
          {paidRentals.length === 0 ? (
            <p>No paid rentals found.</p>
          ) : (
            paidRentals.map((rental: { id: string; bike: { name: any; }; startTime: string | number | Date; returnTime: string | number | Date; totalCost: any; isPaid: any; }) => (
                <div key={rental.id} className="p-4 border-b">
                <h3>{rental.bike?.name || 'Bike name not available'}</h3>
                <p>
                  Start Time:{" "}
                  {rental.startTime ? new Date(rental.startTime).toLocaleString() : "Not available"}
                </p>
                <p>
                  Return Time:{" "}
                  {rental.returnTime
                    ? new Date(rental.returnTime).toLocaleString()
                    : "Not Returned"}
                </p>
                <p>Total Cost: ${rental.totalCost ?? "N/A"}</p>
                {!rental.isPaid && (
                  <Button onClick={() => handlePayment(rental.id)}>Pay</Button>
                )}
              </div>
              
            ))
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default MyRentals;
