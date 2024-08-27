import { CheckCircle } from "lucide-react";


const benefits = [
  {
    title: "Best Prices",
    description: "We offer competitive prices that are unmatched in the market, ensuring you get the best value for your money.",
  },
  {
    title: "Wide Selection",
    description: "Choose from a wide variety of bikes to suit your needs, whether you're looking for a mountain bike or a cruiser.",
  },
  {
    title: "Excellent Customer Service",
    description: "Our team is dedicated to providing excellent customer service and ensuring you have a smooth rental experience.",
  },
  {
    title: "Convenient Locations",
    description: "We have multiple rental locations around the city, making it easy for you to pick up and return your bike.",
  },
];

const Benefits = () => {
  return (
    <section className=" py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Why Choose Us?</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <CheckCircle className="text-primary text-3xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
