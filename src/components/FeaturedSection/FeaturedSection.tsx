import { useGetAllBikesQuery } from "@/redux/features/bike/bikeApi";
import Loading from "../Loading/Loading";
import BikeCard from "../BikeCard/ProductCard";


const FeaturedSection = () => {
  const { data: bikes, isLoading } = useGetAllBikesQuery(undefined, {
    pollingInterval: 30000,
  }); //rtk query polling interval for fetching latest data

  console.log(bikes);

  if (isLoading) {
    return (
      <p className="text-2xl text-black flex justify-center items-center">
        {/* //adding a skeleton to show while loading data */}
        <Loading></Loading>
      </p>
    );
  }

  return (
    <section className="bg-background py-12 mt-5">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl text-center font-medium mb-6">
          Latest Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {bikes.data.slice(0,4).map((bike: { _id: any }): any => (
            <BikeCard bike={bike} key={bike._id}></BikeCard>
          ))}
          
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
