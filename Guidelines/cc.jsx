import React from "react";
import { Link } from "react-router-dom";
import "./cc.css"; // Make sure this CSS file exists in the correct folder

const Cc = () => {
  return (
    <div className="p">
      <div className="item-container">
        <div className="item">
          <h3>Check</h3>
          <img
            src="https://i.ytimg.com/vi/lXeXdZrSlcE/sddefault.jpg"
            alt="Check Image"
            className="item-icon"
          />
          <div className="guideline-description">
            <p>
              A king is in check when it is directly attacked by an opponent’s
              piece. The player must move the king or block the attack.
            </p>
          </div>
        </div>

        <div className="item">
          <h3>Checkmate</h3>
          <img
            src="https://learnchess101.com/wp-content/uploads/2016/01/5-Move-Checkmate-5.png"
            alt="Checkmate Image"
            className="item-icon"
          />
          <div className="guideline-description">
            <p>
              Checkmate occurs when the king is in check, and there is no legal
              move to escape. The game ends, and the player in check loses.
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

export default Cc;
