import { addBikeToCompare, removeBikeFromCompare } from "@/redux/features/comparison/comparisonSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";


interface Bike {
    _id: string;
    name: string;
    description: string;
    pricePerHour: number;
  }
  
  interface BikeCardProps {
    bike: Bike;
  }

const CompareCard: React.FC<BikeCardProps> = ({ bike }) => {
  const dispatch = useAppDispatch();
  const selectedBikes = useAppSelector((state) => state.comparison.selectedBikes);
  const isSelected = selectedBikes.includes(bike._id) ;
  console.log(isSelected)

  const handleCompareToggle = () => {
    if (isSelected) {
      dispatch(removeBikeFromCompare(bike._id));
    } else {
      dispatch(addBikeToCompare(bike._id));
    }
  };

  return (
    <Card className="w-full max-w-sm p-4 shadow-md">
      <CardHeader>
        <CardTitle>{bike.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{bike.description}</p>
        <p>Price per Hour: ${bike.pricePerHour}</p>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button variant="outline" onClick={handleCompareToggle}>
          {isSelected ? 'Remove from Compare' : 'Compare'}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CompareCard;
