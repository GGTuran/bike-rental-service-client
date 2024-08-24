/* eslint-disable @typescript-eslint/no-unused-vars */
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const SuccessPage = () => {
  return (
    <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.5 }}
    transition={{ duration: 0.5, ease: 'easeInOut' }}
    className="min-h-screen flex flex-col justify-center items-center"
  >
    <div className="text-center ">
      <motion.h1
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5, ease: 'easeOut' }}
        className="text-3xl font-medium mb-4"
      >
        Order Placed Successfully!
      </motion.h1>
      <motion.p
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5, ease: 'easeOut' }}
        className="mb-6 text-lg"
      >
        Thank you for your order. Your items will be delivered soon.
      </motion.p>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5, ease: 'easeOut' }}
      >
        <Link to="/" >
        <button className="px-4 py-2 bg-gray-300 text-black rounded-lg hover:bg-gray-500 transition-colors duration-300">

          Go to Home
        </button>
        </Link>
      </motion.div>
    </div>
  </motion.div>
  );
};

export default SuccessPage;
