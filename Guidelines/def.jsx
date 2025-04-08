import React from "react";
import { Link } from "react-router-dom";
import "./styles2.css"; // Make sure styles1.css is correctly linked in your project

const Def = () => {
  return (
    <div className="p">
      <h1 className="page-title">♟️ Defensive Strategies in Chess ♟️</h1>
      <div className="item-container">
        <div className="item">
          <h3>Castling</h3>
          <img
            src="https://thechessworld.com/wp-content/uploads/2020/07/5diagram-3-300x300-1.webp"
            alt="Castling"
            className="item-icon"
          />
          <p>
            One of the most important defensive strategies, castling helps
            safeguard your king and develop your rook at the same time.
          </p>
        </div>

        <div className="item">
          <h3>Defensive Pawn Structure</h3>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2a2L1IlDOBzfjOkUDply-lz5hkpfscm9opw&s"
            alt="Defensive Pawn Structure"
            className="item-icon"
          />
          <p>
            Maintaining a solid pawn structure without unnecessary weaknesses is
            key to a strong defense in chess.
          </p>
        </div>

        <div className="item">
          <h3>Defending Against Pins</h3>
          <img
            src="https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/pdrpnht/phpTecbiB.gif"
            alt="Defending Against Pins"
            className="item-icon"
          />
          <p>
            Recognizing and preventing pins on your pieces is crucial for
            effective defense and piece safety.
          </p>
        </div>

        <div className="item">
          <h3>Blocking Attacks</h3>
          <img
            src="https://chessmood.sfo3.cdn.digitaloceanspaces.com/chessmood/images/articles/784/1611653879910967458webp_65094af0b0c4f.webp"
            alt="Blocking Attacks"
            className="item-icon"
          />
          <p>
            Sometimes, blocking the opponent's attacks by placing a piece in the
            line of fire is a good defensive tactic.
          </p>
        </div>

        <div className="item">
          <h3>Retreating to Safety</h3>
          <img
            src="https://chessfox.com/wp-content/uploads/2016/02/king-safety-6.png"
            alt="Retreating to Safety"
            className="item-icon"
          />
          <p>
            When faced with a dangerous attack, it’s often better to retreat a
            piece to a safe square rather than losing it.
          </p>
        </div>

        <div className="item">
          <h3>Creating a Counterattack</h3>
          <img
            src="https://thechessworld.com/wp-content/uploads/2023/10/5counterattack_5-300x300-1.webp"
            alt="Creating a Counterattack"
            className="item-icon"
          />
          <p>
            Instead of just defending passively, you can counterattack the
            opponent's weaknesses to shift the momentum in your favor.
          </p>
        </div>
      </div>
      <Link to="/ChessGuidelines" className="back-btn">
        ⬅ Back to Home
      </Link>
    </div>
  );
};

export default Def;
