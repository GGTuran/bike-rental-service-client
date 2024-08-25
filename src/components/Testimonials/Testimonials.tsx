
const testimonials = [
  {
    quote: "The best bike rental experience I've ever had! The bikes were top-notch and the service was outstanding.",
    name: "John Doe",
  },
  {
    quote: "Affordable prices and a wide selection of bikes. I found exactly what I needed for my adventure!",
    name: "Jane Smith",
  },
  {
    quote: "Excellent customer service! They went above and beyond to ensure I was satisfied with my rental.",
    name: "Mike Johnson",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Testimonials</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white shadow-md p-6 rounded-lg max-w-sm flex flex-col justify-between"
            >
              <p className="text-gray-700 mb-4">"{testimonial.quote}"</p>
              <p className="text-sm font-bold text-gray-900 text-right">- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
