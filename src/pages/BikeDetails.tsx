import Loading from "@/components/Loading/Loading";
import { useGetBikeByIdQuery } from "@/redux/features/bike/bikeApi";
import { useAppDispatch } from "@/redux/hooks";
import { useParams } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";


const BikeDetails = () => {
    const { bikeId } = useParams();
    const {
      data: bike,
      isLoading,
      isError,
    } = useGetBikeByIdQuery(bikeId);
  
    // console.log(bike?.data?.isAvailable)
    const available = bike?.data?.isAvailable;
    console.log(available)

    

    const dispatch = useAppDispatch();
    
  

  
    if (isLoading)
      return (
        <div className=" m-10 flex justify-center items-center">
          <Loading></Loading>
        </div>
      );
    if (isError)
      return (
        <div className="text-center mt-8 text-red-500">
          Error fetching bike.
        </div>
      );
    if (!bike)
      return <div className="text-center mt-8">Product not found.</div>;
  
    // const isButtonDisabled =
    //   cartItem && cartItem.quantity >= bike.data.stockQuantity;
  
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
              <p className="text-black mb-2">
                Available: {bike?.data?.isAvailable}
              </p>
              {/* <span className="flex gap-2">{Rating(bike.data.rating)}</span> */}
  
              <p className="text-black mb-2">Price: ${bike.data.pricePerHour}</p>
              
              <button
                // onClick={handleAddToCart}
                // disabled={isButtonDisabled}
                className="px-4 py-2 bg-gray-300 text-black rounded-lg hover:bg-gray-500 transition-colors duration-300"
              >Book Now
                {/* {isButtonDisabled ? "Out of Stock" : "Add to Cart"} */}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default BikeDetails;