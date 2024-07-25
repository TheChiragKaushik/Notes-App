import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeNote } from "../features/note/noteSlice";

function Notes() {
  const notes = useSelector((state) => state.notes);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const notesPerPage = 10;

  const handleDelete = (id) => {
    dispatch(removeNote(id));
  };

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const indexOfLastNote = currentPage * notesPerPage;
  const indexOfFirstNote = indexOfLastNote - notesPerPage;
  const currentNotes = filteredNotes.slice(indexOfFirstNote, indexOfLastNote);

  const totalPages = Math.ceil(filteredNotes.length / notesPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <div className="p-4">
        <input
          type="text"
          className="w-full p-2 mb-4 border rounded bg-gray-800 text-gray-100 placeholder-gray-400"
          placeholder="Search notes..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-10 p-10">
        {currentNotes.map((note) => (
          <div
            key={note.id}
            className="p-4 border rounded-md bg-gray-800 text-white"
          >
            <div>
              <h1 className="font-bold text-2xl mb-2">{note.title}</h1>
              <p className="mb-2">
                {note.text.length > 100
                  ? `${note.text.substring(0, 100)}...`
                  : note.text}
                {note.text.length > 100 && (
                  <button
                    className="text-blue-500 ml-2"
                    onClick={() => navigate(`/edit/${note.id}`)}
                  >
                    Read more
                  </button>
                )}
              </p>
              <p className="text-sm">
                Last Updated {new Date(note.timestamp).toLocaleString()}
              </p>
            </div>

            <div className="flex space-x-2 mt-2">
              <button
                className="bg-blue-600 p-2 rounded-md"
                onClick={() => navigate(`/edit/${note.id}`)}
              >
                Edit
              </button>
              <button
                className="bg-red-600 p-2 rounded-md"
                onClick={() => handleDelete(note.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center space-x-2 mt-4 p-10">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={`p-2 rounded ${
              currentPage === index + 1
                ? "bg-blue-600 text-white"
                : "bg-gray-300 text-black"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </>
  );
}

export default Notes;
