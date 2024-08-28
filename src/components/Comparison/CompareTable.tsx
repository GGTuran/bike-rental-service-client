import { useGetBikeByIdQuery } from "@/redux/features/bike/bikeApi";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { Table, TableBody, TableCell, TableHeader, TableRow } from "../ui/table";
import { Button } from "../ui/button";
import { clearComparison } from "@/redux/features/comparison/comparisonSlice";
import { TBike } from "@/types/bike.interface";


const CompareTable = () => {
  const dispatch = useAppDispatch();
  const selectedBikes = useAppSelector((state) => state.comparison.selectedBikes);

  // The query might need to handle multiple IDs, ensure it's handled correctly in your API
  const { data: bikes, isLoading } = useGetBikeByIdQuery(selectedBikes, {
    skip: selectedBikes.length === 0, // Skip query if no bikes are selected
  });

  // Log the fetched data to inspect its structure
  console.log(bikes);

  if (isLoading) return <p>Loading bikes for comparison...</p>;

  // Ensure bikes.data is an array before mapping
  const bikeArray: TBike[] = Array.isArray(bikes?.data) ? bikes?.data : [];

  if (bikeArray.length === 0) return <p>No bikes selected for comparison.</p>;

  return (
    <div className="mt-4">
      <h2 className="text-2xl font-bold mb-4">Bike Comparison</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableCell>Feature</TableCell>
            {bikeArray.map((bike) => (
              <TableCell key={bike._id}>{bike.name}</TableCell>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Price per Hour</TableCell>
            {bikeArray.map((bike) => (
              <TableCell key={bike._id}>${bike.pricePerHour}</TableCell>
            ))}
          </TableRow>
          <TableRow>
            <TableCell>CC</TableCell>
            {bikeArray.map((bike) => (
              <TableCell key={bike._id}>{bike.cc}</TableCell>
            ))}
          </TableRow>
          {/* Add more rows for each attribute */}
        </TableBody>
      </Table>
      <Button variant="destructive" onClick={() => dispatch(clearComparison())} className="mt-4">
        Clear All
      </Button>
    </div>
  );
};

export default CompareTable;
