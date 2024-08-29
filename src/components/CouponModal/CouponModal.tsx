import { useAppSelector } from "@/redux/hooks";
import { Dialog, DialogDescription, DialogTitle } from "../ui/dialog";
import { Button } from "../ui/button";


const CouponModal = ({ isOpen, onClose }:any) => {
  const couponCode = useAppSelector((state) => state.coupon.code);

  const handleCopy = () => {
    //copying the code
    navigator.clipboard.writeText(`${couponCode}%`); 
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogTitle>Congratulations!</DialogTitle>
      <DialogDescription>
        <p>Your discount coupon is: <strong>{couponCode}%</strong></p>
        <Button onClick={handleCopy}>Copy</Button>
      </DialogDescription>
    </Dialog>
  );
};

export default CouponModal;
