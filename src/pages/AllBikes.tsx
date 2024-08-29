import { useState } from "react";
import BikeCard from "@/components/BikeCard/BikeCard";
import Loading from "@/components/Loading/Loading";
import { useGetAllBikesQuery } from "@/redux/features/bike/bikeApi";
import { TBike } from "@/types/bike.interface";
import { Label } from "@/components/ui/label";

const AllBikes = () => {
  const { data: bikes, isLoading } = useGetAllBikesQuery(undefined, {
    pollingInterval: 30000,
  });

  // Define filter state
  const [filters, setFilters] = useState({
    brand: "",
    model: "",
    availability: "",
  });

  if (isLoading) {
    return (
      <p className="text-2xl text-black flex justify-center items-center">
        <Loading />
      </p>
    );
  }

  // Ensure bikes.data is correctly typed
  const brands = Array.from(new Set(bikes?.data?.map((bike: TBike) => bike.brand) ?? []));
  const models = Array.from(new Set(bikes?.data?.map((bike: TBike) => bike.model) ?? []));

  // Filter bikes based on filter state
  const filteredBikes = bikes?.data?.filter((bike: TBike) => {
    const matchesBrand = filters.brand ? bike.brand === filters.brand : true;
    const matchesModel = filters.model ? bike.model === filters.model : true;
    const matchesAvailability = filters.availability
      ? bike.isAvailable!.toString() === filters.availability
      : true;

    return matchesBrand && matchesModel && matchesAvailability;
  }) ?? [];

  return (
    <section className="bg-background py-12 mt-5">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl text-center font-medium mb-6">All Bikes</h2>

        {/* Filter Options */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-4 space-y-4 md:space-y-0">
          <div>
            <Label htmlFor="brand" className="block text-sm font-medium ">
              Brand
            </Label>
            <select
              id="brand"
              className="border p-2 rounded dark:bg-black w-full md:w-auto"
              value={filters.brand}
              onChange={(e) => setFilters({ ...filters, brand: e.target.value })}
            >
              <option value="">Brands</option>
              {brands.map((brand) => (
                <option key={String(brand)} value={String(brand)}>
                  {brand as string}
                </option>
              ))}
            </select>
          </div>

          <div>
            <Label htmlFor="model" className="block text-sm font-medium ">
              Model
            </Label>
            <select
              id="model"
              className="border p-2 dark:bg-black rounded w-full md:w-auto"
              value={filters.model}
              onChange={(e) => setFilters({ ...filters, model: e.target.value })}
            >
              <option value="">Models</option>
              {models.map((model) => (
                 <option key={String(model)} value={String(model)}>
                  {model as string}
                </option>
              ))}
            </select>
          </div>

          <div>
            <Label htmlFor="availability" className="block text-sm font-medium ">
              Availability
            </Label>
            <select
              id="availability"
              className="border dark:bg-black p-2 rounded w-full md:w-auto"
              value={filters.availability}
              onChange={(e) =>
                setFilters({ ...filters, availability: e.target.value })
              }
            >
              <option value="">All</option>
              <option value="true">Available</option>
              <option value="false">Not Available</option>
            </select>
          </div>

          {/* Clear Filter Button */}
          <button
            className="bg-red-500 text-white px-4 py-2 rounded mt-2 md:mt-0"
            onClick={() => setFilters({ brand: "", model: "", availability: "" })}
          >
            Clear Filters
          </button>
        </div>

        {/* Bike Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredBikes.map((bike: TBike) => (
            <BikeCard bike={bike} key={bike._id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllBikes;
