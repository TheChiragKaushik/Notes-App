## Live Demo

You can view the deployed application [here](https://yonotes.netlify.app/).

# Note Taking Application

This note-taking application is a simple yet powerful tool for managing your notes. It ensures notes are never lost by storing them in the user's local storage. The app includes features such as CRUD operations, search functionality, pagination, and real-time editing.

## Features

- **CRUD Operations**: Create, Read, Update, and Delete notes with an intuitive interface.
- **Local Storage**: Notes are stored in the user's local storage, ensuring they persist across sessions.
- **Responsive Design**: The app is fully responsive, providing an optimal experience on both desktop and mobile devices.
- **Search Functionality**: Find notes quickly by searching their titles.
- **Pagination**: Navigate through large sets of notes efficiently.
- **Real-Time Editing**: Edit notes in real-time without navigating away.

## Tech Stack

- **ReactJS**: A JavaScript library for building user interfaces.
- **Redux**: State management with `@reduxjs/toolkit` for handling global state.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **React Router**: For routing and navigation within the app.

## File Structure

src/
├── components/
│ ├── AddNote.jsx # Component for adding new notes
│ ├── EditNote.jsx # Component for editing existing notes
│ ├── Footer.jsx # Footer component for the application
│ ├── Github.jsx # Component to display GitHub profile information (if applicable)
│ ├── Navbar.jsx # Navigation bar component
│ └── Notes.jsx # Component to list and manage notes
├── app/
│ └── Store.js # Configuration of the Redux store
├── features/
│ └── note/
│ ├── localStorage.js # Manages the persistence of application state
│ └── noteSlice.js # Handles the state management for notes
├── index.css # Global CSS styles
├── App.jsx # Main application component that sets up routing and layout
└── main.jsx # Entry point for the React application, including routing and Redux provider setup


## Setup and Running Instructions

1. **Clone the Repository**
   ```bash
   git clone https://github.com/TheChiragKaushik/Notes-App.git

2. **Navigate to the Project Directory**
   ```bash
   cd note-taking-app

3. **Install Dependencies**
   ```bash
   npm install

4. **Run the Application**
   ```bash
   npm run dev

The application will start and be accessible at http://localhost:5173. 


5. **Building for Production**
   **Build the Application:**
     ```bash
     npm run build

This command creates a build directory with a production build of the app. The build can be deployed to a static site hosting service.
