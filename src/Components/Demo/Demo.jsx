import { motion } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Brand</h1>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 rounded-md focus:outline-none focus:ring"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex space-x-6">
          {["Home", "About", "Services", "Contact"].map((item, index) => (
            <motion.li
              key={index}
              whileHover={{ scale: 1.1 }}
              className="cursor-pointer transition"
            >
              {item}
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Mobile Nav */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? "0%" : "100%" }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="fixed top-0 right-0 w-3/5 h-full bg-gray-800 text-white p-6 shadow-lg lg:hidden"
      >
        <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4">
          <X size={24} />
        </button>
        <ul className="space-y-6 mt-10">
          {["Home", "About", "Services", "Contact"].map((item, index) => (
            <motion.li
              key={index}
              whileHover={{ scale: 1.1 }}
              className="cursor-pointer transition"
            >
              {item}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </nav>
  );
};

export default Navbar;
