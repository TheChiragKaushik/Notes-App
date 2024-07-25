import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { Store } from "./app/Store.js";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import AddNote from "./component/AddNote.jsx";
import Github, {githubData} from "./component/Github.jsx";
import Notes from "./component/Notes.jsx";
import EditNote from "./component/EditNote.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Notes/>} /> 
      <Route path="addnote" element={<AddNote />} />
      <Route path="edit/:id" element={<EditNote />} />
      <Route loader={ githubData } path="github" element={<Github />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={Store}>
    <RouterProvider router={router} />
  </Provider>
);
