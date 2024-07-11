import AddTodo from "./Components/AddTodo";

function App() {
  return (
    <>
      <div className="w-full h-screen border flex justify-center items-center">
        <div className="min-h-[300px] rounded-md py-5 px-1 w-[300px] border flex text-center flex-col border-purple-600">
          <h1>ToDo List</h1>
          <AddTodo />
        </div>
      </div>
    </>
  );
}

export default App;
