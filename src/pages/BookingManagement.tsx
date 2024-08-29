
import { useAllBookingsQuery, useReturnBikeMutation } from "@/redux/features/booking/bookingApi";
import {  ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";
import toast, { Toaster } from "react-hot-toast";

const BookingManagement = () => {
  const { data: rentals, isLoading, error } = useAllBookingsQuery('');
  const [returnBike] = useReturnBikeMutation();
  console.log(rentals?.data);

  const handleReturnBike = async (_id: string) => {
    try {
        // console.log(_id)
      await returnBike(_id).unwrap();
      const res = await returnBike(_id).unwrap();
      console.log(res);
      toast.success("Bike returned successfully");
    } catch (error) {
      toast.error("Failed to return bike");
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Something went wrong. Please try again.</div>;

  return (
    <div className="p-4">
      <Toaster />
      <h2 className="text-xl font-semibold mb-4">Rental Management</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead className="bg-gray-100 border-b border-gray-200">
            <tr>
              <th className="py-2 px-4 text-left">Bike Name</th>
              <th className="py-2 px-4 text-left">User</th>
              <th className="py-2 px-4 text-left">Start Time</th>
              <th className="py-2 px-4 text-left">End Time</th>
              <th className="py-2 px-4 text-left">Total Cost</th>
              <th className="py-2 px-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {rentals?.data?.map((rental: { _id: string; bikeId: { name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }; userId: { email: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }; startTime: string | number | Date; isReturned: any; returnTime: string | number | Date; totalCost: any; }) => (
              <tr key={rental._id} className="border-b">
                <td className="py-2 px-4">{rental.bikeId.name}</td>
                <td className="py-2 px-4">{rental.userId.email}</td>
                <td className="py-2 px-4">{new Date(rental.startTime).toLocaleString()}</td>
                <td className="py-2 px-4">{rental.isReturned ? new Date(rental.returnTime).toLocaleString() : 'N/A'}</td>
                <td className="py-2 px-4">{rental.totalCost ?? 'N/A'}</td>
                <td className="py-2 px-4 text-center">
                  {!rental.isReturned && (
                    <button
                      onClick={() => handleReturnBike(rental._id)}
                      className="bg-blue-500 text-white px-2 py-1 rounded"
                    >
                      Return Bike
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookingManagement;
