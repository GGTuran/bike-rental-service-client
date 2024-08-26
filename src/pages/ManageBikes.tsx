import BikeContainer from "@/components/ManageProducts/BikeContainer";


const ManageBikes = () => {
    return (
        <div className="min-h-screen">
      <h1 className="text-center text-3xl font-semibold mb-10">
        Manage Products
      </h1>
      {/* bike container */}
      <BikeContainer></BikeContainer>
    </div>
    );
};

export default ManageBikes;