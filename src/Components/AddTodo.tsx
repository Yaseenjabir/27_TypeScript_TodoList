import React from "react";
import Input from "./Input";
import TodosList from "./TodosList";
import { useSelector } from "react-redux";
import { RootState } from "../redux/Store/store";
import { AddToDoInterface } from "../redux/Slices/AddToDoSlice";
const AddTodo: React.FC = () => {
  const TodoList = useSelector((state: RootState) => state.AddToDoReducer);
  return (
    <div className="w-full min-h-2 px-2 py-3 border border-red-500 mt-5">
      <Input />
      {TodoList.length > 0 ? (
        TodoList.map((item: AddToDoInterface) => {
          return <TodosList key={item.id} text={item.text} id={item.id} />;
        })
      ) : (
        <p className="mt-3 font-bold text-xl text-gray-700">
          No data available
        </p>
      )}
    </div>
  );
};

export default AddTodo;
