import Loading from "@/components/Loading/Loading";
import { useGetBikeByIdQuery } from "@/redux/features/bike/bikeApi";
import { useAppDispatch } from "@/redux/hooks";
import { useNavigate, useParams } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { useBookBikeMutation } from "@/redux/features/booking/bookingApi";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";


const BikeDetails = () => {

  const { bikeId } = useParams();
  const { data: bike, isLoading, isError } = useGetBikeByIdQuery(bikeId);
  const [createRental] = useBookBikeMutation();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [startTime, setStartTime] = useState("");
  const navigate = useNavigate();

  const handleBookNow = () => {
    setIsDialogOpen(true);
  };

  const handleConfirm = async () => {
    try {
      const rentalData = {
        bikeId: bikeId,
        startTime: new Date(startTime),
      };
      const res = await createRental(rentalData).unwrap();
      // console.log(res);
      //res.data.paymentSession.payment_url
      toast.success("Booking successful! Redirecting to payment page...");
      // Redirect to payment page 
      window.location.href = res?.data?.paymentSession.payment_url
      // navigate('/');
    } catch (error) {
      toast.error("Error booking bike. Please try again.");
    } finally {
      setIsDialogOpen(false);
    }
  };

  const handleCancel = () => {
    setIsDialogOpen(false);
  };

  if (isLoading) {
    return (
      <div className="m-10 flex justify-center items-center">
        <Loading />
      </div>
    );
  }

  if (isError) {
    return <div className="text-center mt-8 text-red-500">Error fetching bike.</div>;
  }

  if (!bike) {
    return <div className="text-center mt-8">Product not found.</div>;
  }
  
    return (
      <div className="m-10  mx-auto px-4 mt-8">
        <Toaster />
        <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">{bike.data.name}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:mt-12">
              <img
                src={bike.data.image}
                alt={bike.data.name}
                className="rounded-lg"
              />
            </div>
            <div>
              <p className="text-black mb-2">Brand: {bike.data.brand}</p>
              <p className="text-black mb-2">
                Description: {bike.data.description}
              </p>
              <p className="text-black mb-2">Model: {bike.data.model}</p>
              <p className="text-black mb-2">Available: {bike.data.isAvailable ? "Yes" : "No"}</p>
              {/* <span className="flex gap-2">{Rating(bike.data.rating)}</span> */}
  
              <p className="text-black mb-2">Price: ${bike.data.pricePerHour}</p>
              
              <Button onClick={handleBookNow} className="px-4 py-2 bg-gray-300 text-black rounded-lg hover:bg-gray-500 transition-colors duration-300">
              Book Now
            </Button>
            </div>
          </div>
        </div>
            {/* Dialog for booking */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger asChild>
          <Button className="hidden">Open Dialog</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Book Bike</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Bike ID</label>
              <Input type="text" value={bikeId} readOnly />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Start Time</label>
              <Input type="datetime-local" value={startTime} onChange={(e) => setStartTime(e.target.value)} />
            </div>
          </div>
          <DialogFooter className="mt-4 flex justify-end space-x-2">
            <Button variant="ghost" onClick={handleCancel}>Cancel</Button>
            <Button onClick={handleConfirm}>Pay & Confirm</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      </div>
    );
  };
  
  export default BikeDetails;