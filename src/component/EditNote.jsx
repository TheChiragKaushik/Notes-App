import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { updateNote } from "../features/note/noteSlice";

function EditNote() {
  const { id } = useParams();
  const navigate = useNavigate();
  const notes = useSelector((state) => state.notes);
  const dispatch = useDispatch();

  const noteToEdit = notes.find((note) => note.id === id);

  const [newTitle, setNewTitle] = useState(noteToEdit?.title || "");
  const [newText, setNewText] = useState(noteToEdit?.text || "");

  useEffect(() => {
    if (!noteToEdit) {
      navigate("/");
    }
  }, [noteToEdit, navigate]);

  const handleUpdate = () => {
    if (newTitle.trim() && newText.trim()) {
      dispatch(
        updateNote({
          id,
          title: newTitle,
          text: newText,
        })
      );
      navigate("/");
    }
  };

  return (
    <div className="p-4">
      <input
        type="text"
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
        placeholder="New title"
        className="w-full mb-2 p-2 text-black rounded"
      />
      <textarea
        value={newText}
        onChange={(e) => setNewText(e.target.value)}
        placeholder="New text"
        className="w-full mb-2 p-2 text-black rounded"
        rows="10"
      />
      <button className="bg-green-600 p-2 rounded-md" onClick={handleUpdate}>
        Save
      </button>
    </div>
  );
}

export default EditNote;
