// src/components/DecimalToBinary.js
import { useState } from "react";

const DecimalToBinary = () => {
  const [inputValue, setInputValue] = useState("");
  const [binaryCode, setBinaryCode] = useState("");

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setInputValue(inputValue);

    if (inputValue === "") {
      setBinaryCode("");
    } else {
      const decimalArray = inputValue
        .split(" ")
        .map((item) => parseInt(item, 10));
      const binaryValue = decimalArray
        .map((decimal) => decimal.toString(2).padStart(3, "0"))
        .join(" ");

      setBinaryCode(binaryValue);
    }
  };

  return (
    <div className="w-full lg:w-1/2 bg-white flex flex-col items-center justify-center">
      <div className="xl:w-[70%] p-10">
        <h2 className="text-3xl lg:text-4xl font-bold mb-10">
          Decimal to Binary
        </h2>
        <input
          type="number"
          className="w-full py-3 px-5 border text-xl border-gray-400 bg-transparent rounded-lg focus:outline-none"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter a character"
        />
        <div className="grid grid-cols-12 text-lg lg:text-2xl mt-10 text-left">
          <p className="col-span-5">Binary Code:</p>
          <p className="col-span-7">{binaryCode}</p>
        </div>
      </div>
    </div>
  );
};

export default DecimalToBinary;
