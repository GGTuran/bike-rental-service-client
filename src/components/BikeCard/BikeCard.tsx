import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const BikeCard = ({ bike }: any) => {
  return (
    <motion.div
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-card rounded-lg overflow-hidden shadow-lg transition-shadow duration-300 hover:shadow-xl"
    >
      <img
        src={bike.image}
        alt={bike.name}
        className="w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{bike.name}</h3>
        <p className="text-sm mb-4">{bike.brand}</p>
        <p className="text-sm mb-4">{bike.description}</p>

        <div className="flex justify-between items-center">
          <span className="font-medium">${bike.pricePerHour}</span>
          <Link
            className="flex justify-center items-center"
            to={`/bikes/${bike._id}`}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 bg-gray-300 text-black rounded-lg hover:bg-gray-500 transition-colors duration-300"
            >
              view More
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default BikeCard;
