import React from "react";
import { useDispatch } from "react-redux";
import { addNote } from "../features/note/noteSlice";

function AddNote() {
  const [title, setTitle] = React.useState("");
  const [input, setInput] = React.useState("");
  const dispatch = useDispatch();

  const addNoteHandler = (e) => {
    e.preventDefault();
    dispatch(addNote({ title, text: input })); // Dispatching an object with title and text
    setInput("");
    setTitle("");
  };

  return (
    <div className="flex flex-col md:flex-row justify-center items-center mt-12 space-y-3 md:space-x-3 md:space-y-0">
      <form
        onSubmit={addNoteHandler}
        className="flex flex-col md:flex-row items-center space-y-3 md:space-x-3 md:space-y-0 w-full max-w-xl"
      >
        <input
          type="text"
          className="w-full md:w-auto bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          placeholder="Enter a Title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          className="w-full md:w-auto bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          placeholder="Enter a Note..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          className="w-full md:w-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
        >
          Add Note
        </button>
      </form>
    </div>
  );
}

export default AddNote;
