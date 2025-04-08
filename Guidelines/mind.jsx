import React from "react";
import { Link } from "react-router-dom";
import "./styles2.css";

const Mind = () => {
  return (
    <div className="p">
      <h1 className="page-title">♟️ Psychology of Chess ♟️</h1>
      <div className="item-container">
        <div className="item">
          <h3>Mental Fortitude</h3>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLiEpScmK9ZGiyOSP9XXcTcpo17Vts6jQaug&s"
            alt="Mental Fortitude"
            className="item-icon"
          />
          <p>
            Chess requires great mental resilience, especially during long
            games. Maintaining focus and composure is key to success.
          </p>
        </div>

        <div className="item">
          <h3>Reading the Opponent</h3>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST3LtU83Qne1QLHgR5bkS3XLlTL0nA52h4YQ&s"
            alt="Reading the Opponent"
            className="item-icon"
          />
          <p>
            Understanding your opponent's psychology can give you a strategic
            advantage. This includes observing their patterns and reactions.
          </p>
        </div>

        <div className="item">
          <h3>Handling Pressure</h3>
          <img
            src="https://images.theconversation.com/files/508117/original/file-20230203-7025-vyomf.jpg?ixlib=rb-4.1.0&rect=0%2C0%2C7507%2C5008&q=45&auto=format&w=926&fit=clip"
            alt="Handling Pressure"
            className="item-icon"
          />
          <p>
            Many players falter under pressure. Chess requires a strong ability
            to handle stress and make clear decisions under time constraints.
          </p>
        </div>

        <div className="item">
          <h3>Confidence</h3>
          <img
            src="https://i.ytimg.com/vi/NP7MWUmRWLU/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCeXEN2mwfTfWCBB9ngfHyKWmiDrw"
            alt="Confidence"
            className="item-icon"
          />
          <p>
            Confidence in your own abilities is essential in chess. Overthinking
            or doubting your moves can lead to mistakes.
          </p>
        </div>

        <div className="item">
          <h3>Patience</h3>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ4jFm7hF04R_zlHNds1zlWYMbxtqxIOIV1g&s"
            alt="Patience"
            className="item-icon"
          />
          <p>
            Chess demands a great deal of patience. Sometimes, waiting for the
            right moment to strike is the best course of action.
          </p>
        </div>

        <div className="item">
          <h3>Bluffing</h3>
          <img
            src="https://chessne.com/wp-content/uploads/2024/12/bp111424.png"
            alt="Bluffing"
            className="item-icon"
          />
          <p>
            In some situations, bluffing can be a useful tool to mislead your
            opponent. It's about creating uncertainty in their mind.
          </p>
        </div>
      </div>
      <Link to="/ChessGuidelines" className="back-btn">
        ⬅ Back to Home
      </Link>
    </div>
  );
};

export default Mind;
