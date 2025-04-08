import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./styles2.css"; // Make sure styles1.css is in your project

const Adv = () => {
  return (
    <div className="p">
      <h1 className="page-title">♟️ Advanced Chess Strategies ♟️</h1>
      <div className="item-container">
        <div className="item">
          <h3>Piece Sacrifice</h3>
          <img
            src="https://thechessworld.com/wp-content/uploads/2015/04/4-3-300x300.webp"
            alt="Sacrifice Strategy"
            className="item-icon"
          />
          <div className="guideline-description">
            <p>
              One of the most advanced tactics, sacrificing material for
              long-term positional advantages or to create attacking chances.
            </p>
          </div>
        </div>

        <div className="item">
          <h3>King Safety</h3>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsG6T8wTcVB_5n7Rx5jmFRQA2LduXbYN5szA&s"
            alt="King Safety Strategy"
            className="item-icon"
          />
          <div className="guideline-description">
            <p>
              Advanced players often sacrifice some material for king safety,
              making sure the king is well-protected during the attack.
            </p>
          </div>
        </div>

        <div className="item">
          <h3>Endgame Techniques</h3>
          <img
            src="https://chessmood.sfo3.cdn.digitaloceanspaces.com/chessmood/images/articles/825/1690114434-64bd1982c5512webp_6512798ec3824.webp"
            alt="Endgame Strategy"
            className="item-icon"
          />
          <div className="guideline-description">
            <p>
              Understanding the endgame and knowing how to convert a material
              advantage into a win is crucial in advanced play.
            </p>
          </div>
        </div>

        <div className="item">
          <h3>Space Control</h3>
          <img
            src="https://chessfox.com/wp-content/uploads/2020/04/fight-for-space-in-the-centre.png"
            alt="Space Control Strategy"
            className="item-icon"
          />
          <div className="guideline-description">
            <p>
              Advanced players aim to control key squares and restrict the
              opponent's piece mobility, often leading to a winning position.
            </p>
          </div>
        </div>

        <div className="item">
          <h3>Tactical Combinations</h3>
          <img
            src="https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/PedroPinhata/phpRA1aXs.png"
            alt="Tactical Combinations"
            className="item-icon"
          />
          <div className="guideline-description">
            <p>
              Advanced players look for complex tactical combinations that often
              involve sacrifices, forks, pins, and skewers.
            </p>
          </div>
        </div>

        <div className="item">
          <h3>Positional Play</h3>
          <img
            src="https://thechessworld.com/wp-content/uploads/2015/06/4positional1-300x300-1.webp"
            alt="Positional Play"
            className="item-icon"
          />
          <div className="guideline-description">
            <p>
              Mastering the art of positional play involves improving the
              placement of your pieces and creating weaknesses in the opponent's
              camp.
            </p>
          </div>
        </div>
      </div>

      <Link to="/ChessGuidelines" className="back-btn">
        ⬅ Back to Home
      </Link>
    </div>
  );
};

export default Adv;
