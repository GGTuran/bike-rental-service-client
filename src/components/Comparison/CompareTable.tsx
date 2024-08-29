import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { Table, TableBody, TableCell, TableHeader, TableRow } from '../ui/table';
import { Button } from '../ui/button';
import { clearComparison } from '@/redux/features/comparison/comparisonSlice';
import { fetchBikeById } from '@/utils/utils';
import Loading from '../Loading/Loading';


const CompareTable = () => {
  const dispatch = useAppDispatch();
  const selectedBikes = useAppSelector((state) => state.comparison.selectedBikes);
  const [bikeArray, setBikeArray] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchBikes = async () => {
      setLoading(true);
      try {
        const bikePromises = selectedBikes.map((id) => fetchBikeById(id));
        const bikes = await Promise.all(bikePromises);
        setBikeArray(bikes);
        // console.log('Fetched bikes:', bikes);
      } catch (error) {
        // console.error('Failed to fetch bikes:', error);
      } finally {
        setLoading(false);
      }
    };

    if (selectedBikes.length > 0) {
      fetchBikes();
    } else {
      setBikeArray([]);
    }
  }, [selectedBikes]);

  if (loading) return <Loading/>;

  if (bikeArray.length === 0) return <p className='text-center'>No bikes selected for comparison.</p>;
  // console.log('bike array', bikeArray[0])

  return (
    <div className="mt-4">
      <h2 className="text-2xl font-bold mb-4">Bike Comparison</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableCell>Feature</TableCell>
            {bikeArray?.map((bike) => (
              <TableCell key={bike?.data?._id}>{bike?.data?.name}</TableCell>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Price per Hour</TableCell>
            {bikeArray.map((bike) => (
              <TableCell key={bike?.data?._id}>${bike?.data?.pricePerHour}</TableCell>
            ))}
          </TableRow>
          <TableRow>
            <TableCell>CC</TableCell>
            {bikeArray.map((bike) => (
              <TableCell key={bike?.data?._id}>{bike?.data?.cc}</TableCell>
            ))}
          </TableRow>
          {/* Add more rows for each attribute */}
        </TableBody>
      </Table>
      <Button
        variant="destructive"
        onClick={() => dispatch(clearComparison())}
        className="mt-4"
      >
        Clear All
      </Button>
    </div>
  );
};

export default CompareTable;
