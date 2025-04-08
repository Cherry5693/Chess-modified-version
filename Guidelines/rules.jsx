import React from "react";
import { Link } from "react-router-dom";
import "./styles2.css";

const Rules = () => {
  return (
    <div className="p">
      <h1 className="page-title">♟️ Chess Tournament Rules ♟️</h1>
      <div className="item-container">
        <div className="item">
          <h3>Time Control</h3>
          <img
            src="https://chess-teacher.com/wp-content/uploads/2023/06/Chess-clock-300x200.webp"
            alt="Time Control"
            className="item-icon"
          />
          <p>
            Each player has a set amount of time to make their moves. If time
            runs out, they lose the game, regardless of the position on the
            board.
          </p>
        </div>

        <div className="item">
          <h3>Starting Position</h3>
          <img
            src="https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/ColinStapczynski/phpa2wQPr.png"
            alt="Starting Position"
            className="item-icon"
          />
          <p>
            The game begins with the standard chess setup, with each player
            controlling 16 pieces, including pawns, rooks, knights, bishops,
            queens, and the king.
          </p>
        </div>

        <div className="item">
          <h3>Illegal Moves</h3>
          <img
            src="https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/JonGustav/phpN9Yecy.png"
            alt="Illegal Moves"
            className="item-icon"
          />
          <p>
            Moves that violate the rules of chess, such as moving a piece out of
            turn or moving a piece to an illegal square, are not allowed. The
            opponent may challenge illegal moves.
          </p>
        </div>

        <div className="item">
          <h3>Draw Rules</h3>
          <img
            src="https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/pdrpnht/phpxUJLKr.png"
            alt="Draw Rules"
            className="item-icon"
          />
          <p>
            Draws can occur through stalemate, insufficient material, or
            agreement between the players. A draw may also be claimed after a
            threefold repetition or 50 moves without a pawn move or capture.
          </p>
        </div>

        <div className="item">
          <h3>Resignation</h3>
          <img
            src="https://www.chessjournal.com/wp-content/uploads/2022/07/Why-Do-Chess-Players-Resign.jpg"
            alt="Resignation"
            className="item-icon"
          />
          <p>
            If a player believes they have no chance of winning, they may choose
            to resign. This ends the game and awards the victory to the
            opponent.
          </p>
        </div>

        <div className="item">
          <h3>Checkmate</h3>
          <img
            src="https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/pdrpnht/phpKsqNXn.png"
            alt="Checkmate"
            className="item-icon"
          />
          <p>
            The game ends in checkmate when a player’s king is under attack and
            there is no legal move to remove the threat. The player whose king
            is checkmated loses the game.
          </p>
        </div>
      </div>
      <Link to="/ChessGuidelines" className="back-btn">
        ⬅ Back to Home
      </Link>
    </div>
  );
};

export default Rules;
