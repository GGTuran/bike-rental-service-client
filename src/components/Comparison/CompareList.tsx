import { useGetAllBikesQuery } from "@/redux/features/bike/bikeApi";
import CompareCard from "./CompareCard";
import CompareTable from "./CompareTable";
import { TBike } from "@/types/bike.interface";
import Loading from "../Loading/Loading";

const CompareList = () => {
  const { data: bikes, isLoading } = useGetAllBikesQuery('');

  if (isLoading) return <Loading></Loading>;

  return (
    <div className=" p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Compare Bikes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {bikes?.data?.map((bike: TBike) => (
          <CompareCard key={bike._id} bike={bike} />
        ))}
      </div>
      <CompareTable />
    </div>
  );
};

export default CompareList;
