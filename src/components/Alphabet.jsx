// src/components/Alphabet.js
import { useState } from "react";

const Alphabet = () => {
  const [word, setWord] = useState("");
  const [binaryCode, setBinaryCode] = useState("");

  const handleWordChange = (e) => {
    const inputWord = e.target.value;
    setWord(inputWord);

    if (inputWord === "") {
      setBinaryCode("");
    } else {
      const binaryValue = inputWord
        .split("")
        .map((char) => char.charCodeAt(0).toString(2).padStart(8, "0"))
        .join(" ");

      setBinaryCode(binaryValue);
    }
  };

  return (
    <div className="w-1/2 bg-black flex flex-col items-center justify-center">
      <div className="w-[60%]">
        <h2 className="text-white text-5xl font-bold mb-10">
          Alphabet to Binary
        </h2>
        <input
          type="text"
          className="w-full py-3 px-5 border text-xl border-gray-400 bg-transparent text-white rounded-lg focus:outline-none"
          value={word}
          onChange={handleWordChange}
          placeholder="Enter a character"
        />
        <div className="grid grid-cols-12 text-2xl mt-10 text-white text-left">
          <p className="col-span-4">Binary Code:</p>
          <p className="col-span-8">{binaryCode}</p>
        </div>
      </div>
    </div>
  );
};

export default Alphabet;
