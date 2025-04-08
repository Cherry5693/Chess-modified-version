import React from "react";
import { Link } from "react-router-dom";
import "./styles2.css"; // Make sure this file exists in your project

const Comm = () => {
  return (
    <div className="p">
      <h1 className="page-title">🚫 Common Mistakes to Avoid in Chess 🚫</h1>
      <div className="item-container">
        <div className="item">
          <h3>Queen Too Early</h3>
          <img
            src="https://www.wikihow.com/images/thumb/6/60/Can-a-Queen-Move-Like-a-Knight-Step-2.jpg/v4-460px-Can-a-Queen-Move-Like-a-Knight-Step-2.jpg"
            alt="Moving Queen Early"
            className="item-icon"
          />
          <div className="guideline-description">
            <p>
              Bringing the queen out early can expose it to attacks and waste
              time. Develop your minor pieces first.
            </p>
          </div>
        </div>

        <div className="item">
          <h3>Ignoring Castling</h3>
          <img
            src="https://i.ytimg.com/vi/7oYPhTyOuxA/maxresdefault.jpg"
            alt="Ignoring Castling"
            className="item-icon"
          />
          <div className="guideline-description">
            <p>
              Neglecting to castle can leave your king vulnerable to attacks.
              It's a crucial part of the opening strategy.
            </p>
          </div>
        </div>

        <div className="item">
          <h3>Overlooking Pins</h3>
          <img
            src="https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/GABUZYAN_CHESSMOOD/phpB3fhBL.png"
            alt="Overlooking Pins"
            className="item-icon"
          />
          <div className="guideline-description">
            <p>
              Pins can trap pieces and prevent movement. Always be aware of
              potential pins on the board.
            </p>
          </div>
        </div>

        <div className="item">
          <h3>Blindly Moving Pawns</h3>
          <img
            src="https://i.ytimg.com/vi/hxRSb3XdXiU/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDQKQQ_r-n2DBsx9Hs9kRby7vtG6w"
            alt="Blindly Moving Pawns"
            className="item-icon"
          />
          <div className="guideline-description">
            <p>
              Pawns should be advanced with purpose, not haphazardly. Weakening
              the pawn structure can lead to vulnerabilities.
            </p>
          </div>
        </div>

        <div className="item">
          <h3>Neglecting the Endgame</h3>
          <img
            src="https://www.thechessworld.com/pgngames/endgames/endgame-mistakes/1.jpg"
            alt="Neglecting the Endgame"
            className="item-icon"
          />
          <div className="guideline-description">
            <p>
              Focusing too much on the opening and middle game while neglecting
              endgame strategy can cost you the game.
            </p>
          </div>
        </div>

        <div className="item">
          <h3>Underestimating the Opponent</h3>
          <img
            src="https://imageio.forbes.com/specials-images/imageserve/663240b5fdcccbd7fa3bde57/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds"
            alt="Underestimating the Opponent"
            className="item-icon"
          />
          <div className="guideline-description">
            <p>
              Don't make assumptions about your opponent's strength. Always
              analyze their moves carefully and stay alert.
            </p>
          </div>
        </div>

        <div className="item">
          <h3>Playing Too Fast</h3>
          <img
            src="https://www.wikihow.com/images/thumb/7/72/Win-at-Chess-Step-1-Version-4.jpg/v4-460px-Win-at-Chess-Step-1-Version-4.jpg"
            alt="Playing Too Fast"
            className="item-icon"
          />
          <div className="guideline-description">
            <p>
              Rushing through moves can lead to blunders. Take your time to
              think through each move, especially in critical positions.
            </p>
          </div>
        </div>

        <div className="item">
          <h3>Not Having a Plan</h3>
          <img
            src="https://images.chesscomfiles.com/uploads/v1/blog/899449.bb4a0873.5000x5000o.cf7175f171dd.jpg"
            alt="Not Having a Plan"
            className="item-icon"
          />
          <div className="guideline-description">
            <p>
              Playing without a clear plan can leave your pieces exposed and
              give your opponent the initiative.
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

export default Comm;
