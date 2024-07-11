import { useDispatch } from "react-redux";
import { AddToDoInterface, removeItem } from "../redux/Slices/AddToDoSlice";

const TodosList: React.FC<AddToDoInterface> = ({ text, id }) => {
  const dispatch = useDispatch();
  const handleDelete = (): void => {
    dispatch(removeItem(id));
  };

  return (
    <>
      <div className="w-full mt-3">
        <div className="flex flex-row">
          <h1 className="flex-1 border text-start px-2 flex items-center">
            {text}
          </h1>
          <button
            onClick={handleDelete}
            className="ml-3 border border-red-500 px-3 py-1 rounded-lg bg-red-500 cursor-pointer text-white"
          >
            Del
          </button>
        </div>
      </div>
    </>
  );
};

export default TodosList;
