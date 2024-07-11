import { useDispatch } from "react-redux";
import { addItem } from "../redux/Slices/AddToDoSlice";
import React, { useRef } from "react";

const Input = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  const handleAddItem = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    const userInput = inputRef.current?.value;
    if (userInput) {
      dispatch(addItem({ id: Date.now(), text: userInput }));
      inputRef.current.value = "";
    } else {
      alert("Please give some value");
    }
  };

  return (
    <form className="flex flex-row">
      <input
        ref={inputRef}
        type="text"
        placeholder="Enter Todos"
        className="border flex-1 outline-none border-gray-400 rounded-md px-2"
      />
      <button
        onClick={handleAddItem}
        type="submit"
        className="ml-3 border border-green-500 px-3 py-1 rounded-lg bg-green-500 cursor-pointer text-white"
      >
        Add
      </button>
    </form>
  );
};

export default Input;
