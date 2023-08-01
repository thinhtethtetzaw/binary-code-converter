// src/components/DecimalToBinary.js
import { useState } from "react";

const DecimalToBinary = () => {
  const [decimal, setDecimal] = useState("");
  const [binary, setBinary] = useState("");

  const handleDecimalChange = (e) => {
    const value = e.target.value;
    setDecimal(value);
    setBinary(value === "" ? "" : parseInt(value, 10).toString(2));
  };

  return (
    <div className="w-1/2 bg-white flex flex-col items-center justify-center">
      <div className="w-[60%]">
        <h2 className="text-5xl font-bold mb-10">Decimal to Binary</h2>
        <input
          type="number"
          className="w-full py-3 px-5 border text-xl border-gray-400 bg-transparent rounded-lg focus:outline-none"
          value={decimal}
          onChange={handleDecimalChange}
          placeholder="Enter a character"
        />
        <div className="grid grid-cols-12 text-2xl mt-10 text-left">
          <p className="col-span-4">Binary Code:</p>
          <p className="col-span-8">{binary}</p>
        </div>
      </div>
    </div>
  );
};

export default DecimalToBinary;
