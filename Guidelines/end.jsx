import React from "react";
import { Link } from "react-router-dom";
import "./styles2.css"; // Make sure your CSS file path is correct

const End = () => {
  return (
    <div className="p">
      <h1 className="page-title">♟️ Endgame Concepts in Chess ♟️</h1>
      <div className="item-container">
        <div className="item">
          <h3>King Activity</h3>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfkWZttUOHIeH_qfBAvmYP-qKWttghFfsfOw&s"
            alt="King Activity"
            className="item-icon"
          />
          <div className="guideline-description">
            <p>
              The king becomes a powerful piece in the endgame, actively
              controlling squares and supporting pawn promotion.
            </p>
          </div>
        </div>

        <div className="item">
          <h3>Opposition</h3>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-ec24E8k9rYtrAoMBYF7y1HY1nv7AwNzXFw&s"
            alt="Opposition"
            className="item-icon"
          />
          <div className="guideline-description">
            <p>
              A technique where two kings stand opposite each other, and the
              player who does not have to move has the advantage.
            </p>
          </div>
        </div>

        <div className="item">
          <h3>Pawn Promotion</h3>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZjfXrredz1eoqgQDvVsJrkhTrrXcJ9bxxdg&s"
            alt="Pawn Promotion"
            className="item-icon"
          />
          <div className="guideline-description">
            <p>
              Pawns can promote upon reaching the last rank, often becoming a
              queen and changing the course of the game.
            </p>
          </div>
        </div>

        <div className="item">
          <h3>Rule of the Square</h3>
          <img
            src="https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/PedroPinhata/phpuWKCNY.png"
            alt="Rule of the Square"
            className="item-icon"
          />
          <div className="guideline-description">
            <p>
              If the defending king can enter the 'square' created by the pawn’s
              path, it can stop the promotion.
            </p>
          </div>
        </div>

        <div className="item">
          <h3>Zugzwang</h3>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7Hi_YHsu8MHJjbfwkNYfxmTKNW_JqpCPH-g&s"
            alt="Zugzwang"
            className="item-icon"
          />
          <div className="guideline-description">
            <p>
              A situation where any move a player makes worsens their position,
              often leading to a loss.
            </p>
          </div>
        </div>

        <div className="item">
          <h3>Lucena Position</h3>
          <img
            src="https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/pdrpnht/php4aVvlJ.png"
            alt="Lucena Position"
            className="item-icon"
          />
          <div className="guideline-description">
            <p>
              A winning technique in rook endgames where a pawn on the 7th rank
              can be promoted using the ‘bridge’ method.
            </p>
          </div>
        </div>

        <div className="item">
          <h3>Philidor Position</h3>
          <img
            src="https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/PedroPinhata/phpMBYkrH.gif"
            alt="Philidor Position"
            className="item-icon"
          />
          <div className="guideline-description">
            <p>
              A defensive setup in rook endgames that allows the weaker side to
              secure a draw.
            </p>
          </div>
        </div>

        <div className="item">
          <h3>Underpromotion</h3>
          <img
            src="https://media.chesskidfiles.com/images/user/tiny_mce/PlayChess2021/underpromotion-knight_cede0.png"
            alt="Underpromotion"
            className="item-icon"
          />
          <div className="guideline-description">
            <p>
              Promoting to a piece other than a queen (like a knight) to avoid
              stalemate or force checkmate.
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

export default End;
