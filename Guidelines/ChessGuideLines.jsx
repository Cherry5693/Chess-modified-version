import React from "react";
import { Link } from "react-router-dom";
import "./ch.css";

const ChessGuidelines = () => {
  return (
    <div className="p">
      <div className="background-container">
        <div className="glass-card">
          <h1 className="main-heading">♟️ Chess Game Guidelines</h1>
          <div className="btn-container">
            <Link to="/chs" className="full-btn">
              Chess Board Setup
            </Link>
            <Link to="/bs" className="full-btn">
              Basic Chess Rules
            </Link>
            <Link to="/ch1" className="full-btn">
              Tips for Playing
            </Link>
            <Link to="/tac" className="full-btn">
              Tactics
            </Link>
            <Link to="/cc" className="full-btn">
              Check and Checkmate
            </Link>
            <Link to="/end" className="full-btn">
              Endgame Concepts
            </Link>
            <Link to="/comm" className="full-btn">
              Common Mistakes
            </Link>
            <Link to="/op" className="full-btn">
              Opening Strategies
            </Link>
            <Link to="/adv" className="full-btn">
              Advanced Strategies
            </Link>
            <Link to="/def" className="full-btn">
              Defensive Techniques
            </Link>
            <Link to="/his" className="full-btn">
              Famous Games
            </Link>
            <Link to="/mind" className="full-btn">
              Psychology of Chess
            </Link>
            <Link to="/ai" className="full-btn">
              Playing Against AI
            </Link>
            <Link to="/rules" className="full-btn">
              Tournament Rules
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChessGuidelines;
