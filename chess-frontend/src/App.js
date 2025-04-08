import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom"; // ✅ Added useNavigate
import ChessGame from "./components/ChessGame.js";
// import VideoChat from "./components/VideoChat"; // ❌ Removed unused VideoChat
import GameOver from "./components/GameOver.jsx";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Chat from "./pages/Chat.jsx";
import Profile from "./pages/Profile.jsx"
// import ProfileAvatar from "./pages/ProfileAvatar.jsx";

function App() {
    return (
        <Router>
            <div className="App">

            {/* <div style={{ position: "absolute", top: 10, right: 10 }}>
            <ProfileAvatar />
            </div> */}


                <h1>Multiplayer Chess with Video Chat</h1>
                <Routes>
                    {/* Home Route */}
                    <Route path="/" element={<HomePage />} /> {/* ✅ Changed from MainGame to HomePage */}

                    {/* Main Game */}
                    <Route path="/maingame" element={<MainGame />} /> {/* ✅ New route */}

                    {/* Game Over Page */}
                    <Route path="/game-over" element={<GameOver />} />

                    {/* Auth Routes */}
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/chat" element={<Chat />} />
                    <Route path="/profile" 
                    element={<Profile/>}/>
                </Routes>
            </div>
        </Router>
    );
}

// ✅ Updated MainGame component
const MainGame = () => {
    const [room] = useState(""); // ❌ Removed setRoom since input is gone

    return (
        <>
            <ChessGame room={room} />
            {/* ❌ Removed <VideoChat /> */}
        </>
    );
};

// ✅ New HomePage component
const HomePage = () => {
    const navigate = useNavigate();

    const handleStart = () => {
        navigate("/register");
    };

    return (
        <div>
            <h2>Welcome to Multiplayer Chess with Video Chat</h2>
            <p>Experience the ultimate chess game with real-time video chat. Play with friends or challenge other players online.</p>
            <button onClick={handleStart}>Start Game</button>
        </div>
    );
};

export default App;
