import logo from './logo.svg';
import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import ChatApp from './pages/ChatApp';
import { useState } from 'react';

function App() {
  // State to track if the user is signed in
  const [isSignedIn, setIsSignedIn] = useState(false); // Set this based on your authentication logic

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home setIsSignedIn={setIsSignedIn} />} />
        <Route
          path='/chat'
          element={isSignedIn ? <ChatApp /> : <Navigate to="/" />}
        />
      </Routes>
    </div>
  );
}

export default App;
