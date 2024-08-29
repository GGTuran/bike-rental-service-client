import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAddBikeMutation } from "@/redux/features/bike/bikeApi";
import { FormEvent, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Loading from "../Loading/Loading";

const AddBikeModal = () => {
  // Initialize all fields required for TBike type in local state
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const [year, setYear] = useState("");
  const [model, setModel] = useState("");
  const [brand, setBrand] = useState("");
  const [cc, setCc] = useState("");
  const [pricePerHour, setPricePerHour] = useState("");
  const [image, setImage] = useState("");

  // Retrieving the mutation hook
  const [addProduct, { isLoading }] =
    useAddBikeMutation();
  // console.log(isLoading, isSuccess, isError, data);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Keeping data in an object to send to the server
    const productDetails = {
      name,
      description,
      isAvailable: true,
      model,
      brand,
      year: Number(year),
      cc: Number(cc),
      pricePerHour: Number(pricePerHour),
      image,
    };

    // console.log(productDetails);
    // Using try-catch for error handling
    try {
      await addProduct(productDetails);
      toast.success("Product added successfully!");
    } catch (error) {
      toast.error("Error adding product. Please try again.");
    }
  };


  if (isLoading) return <Loading/>;

  return (
    <div>
      <Toaster />
      <Dialog>
        <DialogTrigger asChild>
          <button className="px-4 py-2 bg-gray-300 text-black rounded-lg hover:bg-gray-500 transition-colors duration-300">
            Add Product
          </button>
        </DialogTrigger>

        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add Product</DialogTitle>
            <DialogDescription>Add a new product</DialogDescription>
          </DialogHeader>
          <form onSubmit={onSubmit}>
            <div className="grid gap-4 py-4">
              {/* Name Field */}
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input
                  onBlur={(e) => setName(e.target.value)}
                  id="name"
                  className="col-span-3"
                />
              </div>

              {/* Description Field */}
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="description" className="text-right">
                  Description
                </Label>
                <Input
                  onBlur={(e) => setDescription(e.target.value)}
                  id="description"
                  className="col-span-3"
                />
              </div>

              {/* Price Per Hour Field */}
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="pricePerHour" className="text-right">
                  Price
                </Label>
                <Input
                  onBlur={(e) => setPricePerHour(e.target.value)}
                  id="pricePerHour"
                  className="col-span-3"
                />
              </div>

              {/* Image Field */}
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="image" className="text-right">
                  Image Link
                </Label>
                <Input
                  onBlur={(e) => setImage(e.target.value)}
                  id="image"
                  className="col-span-3"
                />
              </div>

              {/* CC Field */}
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="cc" className="text-right">
                  CC
                </Label>
                <Input
                  onBlur={(e) => setCc(e.target.value)}
                  id="cc"
                  className="col-span-3"
                />
              </div>

              {/* Year Field */}
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="year" className="text-right">
                  Year
                </Label>
                <Input
                  onBlur={(e) => setYear(e.target.value)}
                  id="year"
                  className="col-span-3"
                />
              </div>

              {/* Model Field */}
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="model" className="text-right">
                  Model
                </Label>
                <Input
                  id="model"
                  onBlur={(e) => setModel(e.target.value)}
                  className="col-span-3"
                />
              </div>

              {/* Brand field */}
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="model" className="text-right">
                  Brand
                </Label>
                <Input
                  id="brand"
                  onBlur={(e) => setBrand(e.target.value)}
                  className="col-span-3"
                />
              </div>
            </div>
            <div className="flex justify-end">
              <DialogClose asChild>
                <button
                  className="px-4 py-2 bg-gray-300 text-black rounded-lg hover:bg-gray-500 transition-colors duration-300"
                  type="submit"
                >
                  Save
                </button>
              </DialogClose>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddBikeModal;
