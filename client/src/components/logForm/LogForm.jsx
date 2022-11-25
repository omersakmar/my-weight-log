import axios from "axios";
import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
const LogForm = () => {
  const [title, setTitle] = useState("");
  const [weight, setWeight] = useState("");
  const [isSuccessful, setIsSuccessful] = useState(undefined);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post("http://localhost:8800/api/logs", {
        title,
        weight,
      });
      setTitle("");
      setWeight("");
      setIsSuccessful(true);
    } catch (err) {
      setIsSuccessful(false);
      console.log(err);
    }
  };

  return (
    <div className="flex justify-center">
      <motion.div
        className="box w-full max-w-lg p-10 bg-gray-900 border text-gray-200 rounded-lg shadow-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <form className="space-y-6" onSubmit={handleSubmit}>
          <label htmlFor="title" className="block mb-2 text-md font-medium">
            Date
          </label>
          <input
            required
            type="text"
            value={title}
            placeholder="e.g. November 23, 2022"
            onChange={(e) => setTitle(e.target.value)}
            id="title"
            className="bg-gray-200 text-gray-900 border text-md rounded-lg focus:ring-blue-50 block w-full p-2.5"
          />
          <label htmlFor="title" className="block mb-2 text-md font-medium">
            Weight
          </label>
          <input
            required
            type="text"
            value={weight}
            placeholder="e.g. 66.60"
            onChange={(e) => setWeight(e.target.value)}
            id="weight"
            className="bg-gray-200 text-gray-900 border text-md rounded-lg focus:ring-blue-50 block w-full p-2.5"
          />
          <motion.button
            className="w-6/12 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md px-5 py-2.5 text-center"
            type="submit"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            disabled={title === "" || weight === ""}
          >
            Save
          </motion.button>
          {isSuccessful && <p>Log saved</p>}
        </form>
      </motion.div>
    </div>
  );
};

export default LogForm;
