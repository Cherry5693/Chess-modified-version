import React from "react";
import { Link } from "react-router-dom";
import "./styles2.css"; // Make sure this CSS is in your project

const Op = () => {
  return (
    <div className="p">
      <h1 className="page-title">♟️ Opening Strategies in Chess ♟️</h1>
      <div className="item-container">
        <div className="item">
          <h3>King's Pawn Opening (e4)</h3>
          <img
            src="https://i1.wp.com/chesspathways.com/wp-content/uploads/2019/08/2h-300x300.png?ssl=1"
            alt="King's Pawn Opening"
            className="item-icon"
          />
          <div className="guideline-description">
            <p>
              The most popular and widely played opening, controlling the center
              and opening lines for the queen and bishop.
            </p>
          </div>
        </div>

        <div className="item">
          <h3>Queen's Pawn Opening (d4)</h3>
          <img
            src="https://i2.wp.com/chesspathways.com/wp-content/uploads/2019/08/3a-300x300.png?ssl=1"
            alt="Queen's Pawn Opening"
            className="item-icon"
          />
          <div className="guideline-description">
            <p>
              Another popular opening aiming for center control and quick
              development, leading to more closed positions.
            </p>
          </div>
        </div>

        <div className="item">
          <h3>Knight's Opening (Nf3)</h3>
          <img
            src="https://i0.wp.com/chesspathways.com/wp-content/uploads/2019/08/18a-298x300.png?ssl=1"
            alt="Knight's Opening"
            className="item-icon"
          />
          <div className="guideline-description">
            <p>
              A flexible opening that can lead to various types of positions and
              allows for rapid development of pieces.
            </p>
          </div>
        </div>

        <div className="item">
          <h3>English Opening (c4)</h3>
          <img
            src="https://i0.wp.com/chesspathways.com/wp-content/uploads/2019/08/13a-300x300.png?ssl=1"
            alt="English Opening"
            className="item-icon"
          />
          <div className="guideline-description">
            <p>
              Focuses on controlling the center indirectly and often leads to a
              more positional and strategic game.
            </p>
          </div>
        </div>

        <div className="item">
          <h3>Fianchetto Opening</h3>
          <img
            src="https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/PedroPinhata/phpV7X45h.png"
            alt="Fianchetto Opening"
            className="item-icon"
          />
          <div className="guideline-description">
            <p>
              A setup where the bishop is placed on the long diagonal, exerting
              pressure on the center and increasing flexibility.
            </p>
          </div>
        </div>

        <div className="item">
          <h3>Sicilian Defense</h3>
          <img
            src="https://i1.wp.com/chesspathways.com/wp-content/uploads/2019/08/7d-300x300.png?ssl=1"
            alt="Sicilian Defense"
            className="item-icon"
          />
          <div className="guideline-description">
            <p>
              A counter-attacking opening for black that offers dynamic play and
              can lead to asymmetrical pawn structures.
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

export default Op;
