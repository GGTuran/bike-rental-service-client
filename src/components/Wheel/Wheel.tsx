import { useAppDispatch } from "@/redux/hooks";
import "./index.css";
import WheelComponent from "./WheelComponent";
import { setCouponCode } from "@/redux/features/coupon/couponSlice";

const Wheel = () => {
  const dispatch = useAppDispatch();
  const segments = [
    "better luck next time",
    "won 10%",
    "won 20%",
    "better luck next time",
    "won 30%",
    "won uber pass",
    "better luck next time",
    "won a voucher",
    "won 10%",
    "won 20%",
    "better luck next time",
    "won 30%",
    "won uber pass",
    "better luck next time",
    "won a voucher",
  ];
  const segColors = [
    "#EE4040",
    "#F0CF50",
    "#815CD1",
    "#3DA5E0",
    "#34A24F",
    "#F9AA1F",
    "#EC3F3F",
    "#FF9000",
    "#F0CF50",
    "#815CD1",
    "#3DA5E0",
    "#34A24F",
    "#F9AA1F",
    "#EC3F3F",
    "#FF9000",
  ];
  const onFinished = (winner: string) => {
    console.log(winner);
     
  // Extract the discount value from the segment text
  const discountMatch = winner.match(/(\d+)%/);

  if (discountMatch) {
    // If a valid discount percentage is found, set it as the coupon code
    const discountValue = discountMatch[1];
    dispatch(setCouponCode(discountValue)); // Store the percentage without the '%' sign
  } else {
    // If not a valid discount, handle it accordingly
    console.log("No valid discount won");
  }
  };
  return (
    <div className="flex justify-center">
      <div>
        <WheelComponent
          segments={segments}
          segColors={segColors}
          winningSegment={segments[3]}
          onFinished={(winner) => onFinished(winner)}
          primaryColor="black"
          contrastColor="white"
          buttonText="Spin"
          isOnlyOnce={false}
          size={290}
          upDuration={100}
          downDuration={1000}
        />
      </div>
      {/* <div>
                <h1>Spin for discount</h1>
               </div> */}
    </div>
  );
};

export default Wheel;
