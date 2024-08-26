


import { useGetAllBikesQuery } from "@/redux/features/bike/bikeApi";
import { JSX } from "react/jsx-runtime";
import Loading from "../Loading/Loading";
import ManageCard from "./ManageCard";
import { TBike } from "@/types/bike.interface";

const BikeContainer = () => {
  //fetching data through rtk query
  const { data: products, isLoading } = useGetAllBikesQuery(undefined, {
    pollingInterval: 10000,
  });

  console.log(products)

  if (isLoading) {
    return (
      <div className="text-2xl text-black flex justify-center items-center">
        <Loading></Loading>
      </div>
    );
  }

  return (
    <div className="m-10">
      <div className="flex m-10 justify-between mb-5">
        {/* addProduct */}
        {/* <AddProductModal></AddProductModal> */}
        {/* updateProduct */}
      </div>
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-3">
          {/* productCard */}
          {products?.data?.map(
            (product: JSX.IntrinsicAttributes & TBike) => (
              <ManageCard key={product._id} {...product}></ManageCard>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default BikeContainer;