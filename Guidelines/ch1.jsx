import React from "react";
import { Link } from "react-router-dom";
import "./styles2.css"; // Make sure the CSS file is in the correct location

const ch1 = () => {
  return (
    <div className="p">
      <div className="item-container">
        <div className="item">
          <img
            src="https://us.123rf.com/450wm/valeo5/valeo51505/valeo5150500824/40350020-king-chess-icon-isolated-on-blue-background.jpg?ver=6"
            alt="King"
            className="item-icon"
          />
          <div className="piece-description">
            <h3>King</h3>
            <p>
              The king moves one square in any direction. Protecting your king
              is the main goal in chess!
            </p>
          </div>
        </div>

        <div className="item">
          <img
            src="https://cdn.vectorstock.com/i/500p/33/71/queen-chess-figure-icon-vector-21113371.jpg"
            alt="Queen"
            className="item-icon"
          />
          <div className="piece-description">
            <h3>Queen</h3>
            <p>
              The queen can move in any direction—vertically, horizontally, and
              diagonally. She is the most powerful piece.
            </p>
          </div>
        </div>

        <div className="item">
          <img
            src="https://cdn.vectorstock.com/i/500p/53/11/realistic-3d-chess-rook-vector-20545311.avif"
            alt="Rook"
            className="item-icon"
          />
          <div className="piece-description">
            <h3>Rook</h3>
            <p>
              The rook moves any number of squares along rows or columns. Often
              used for controlling the board’s edges.
            </p>
          </div>
        </div>

        <div className="item">
          <img
            src="https://cdn1.iconfinder.com/data/icons/games-7/48/Bishop_Black-512.png"
            alt="Bishop"
            className="item-icon"
          />
          <div className="piece-description">
            <h3>Bishop</h3>
            <p>
              The bishop moves diagonally. You can have one on each color of
              square, controlling long diagonals.
            </p>
          </div>
        </div>

        <div className="item">
          <img
            src="https://png.pngtree.com/png-vector/20221210/ourmid/pngtree-black-chess-knight-horse-stallion-png-image_6519423.png"
            alt="Knight"
            className="item-icon"
          />
          <div className="piece-description">
            <h3>Knight</h3>
            <p>
              The knight moves in an "L" shape: two squares in one direction,
              then one square perpendicular. It can jump over other pieces.
            </p>
          </div>
        </div>

        <div className="item">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMmLrCvCOPIg4NXfNwypFSmkA_IEH6nKB28A&s"
            alt="Pawn"
            className="item-icon"
          />
          <div className="piece-description">
            <h3>Pawn</h3>
            <p>
              The pawn moves one square forward but captures diagonally. Upon
              reaching the opponent’s back rank, it can be promoted.
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

export default ch1;
