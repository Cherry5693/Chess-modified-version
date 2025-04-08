import React from "react";
import { Link } from "react-router-dom";
import "./styles2.css"; // Make sure this path is correct

const bs = () => {
  return (
    <div className="p">
      <div className="item-container">
        <div className="item">
          <h3>Initial Setup</h3>
          <img
            src="https://m.media-amazon.com/images/I/71vyesiNpLL._AC_UF350,350_QL80_.jpg"
            alt="Board Setup"
            className="item-icon"
          />
          <p>
            Each player sets up their pieces on the two rows closest to them.
            The back row holds the pieces: rook, knight, bishop, queen, king,
            bishop, knight, and rook in this order.
          </p>
        </div>

        <div className="item">
          <h3>Pawn Placement</h3>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaqObC3vgtjsAeF6zW_z8D5peqf0qMlVTJvQ&s"
            alt="Pawn Icon"
            className="item-icon"
          />
          <p>
            Place the pawns in the second row (row 2 for white and row 7 for
            black). The pawns form a barrier in front of the other pieces at the
            start of the game.
          </p>
        </div>

        <div className="item">
          <h3>Board Orientation</h3>
          <img
            src="https://thumbs.dreamstime.com/b/chess-game-design-chess-game-design-chess-board-pieces-over-pink-background-colorful-design-vector-illustration-112721638.jpg"
            alt="Board Orientation"
            className="item-icon"
          />
          <p>
            Make sure the board is oriented correctly: the bottom-right square
            should always be a light-colored square. Each player should have a
            white square on the right-hand corner.
          </p>
        </div>

        <div className="item">
          <h3>Starting Positions</h3>
          <img
            src="https://st2.depositphotos.com/1334707/6881/i/950/depositphotos_68817927-stock-photo-moving-chess-pieces-on-a.jpg"
            alt="Starting Positions"
            className="item-icon"
          />
          <p>
            The white pieces are always placed on the first two rows and the
            black pieces on the last two. The player with the white pieces
            always moves first.
          </p>
        </div>
      </div>

      <Link to="/ChessGuidelines" className="back-btn">
        ⬅ Back to Home
      </Link>
    </div>
  );
};

export default bs;
