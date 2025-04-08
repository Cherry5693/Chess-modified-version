import React from "react";
import { Link } from "react-router-dom";
import "./styles2.css";

const His = () => {
  return (
    <div className="p">
      <h1 className="page-title">♟️ Famous Chess Games in History ♟️</h1>
      <div className="item-container">
        <div className="item">
          <h3>Capablanca vs Alekhine (1927 World Championship)</h3>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5phT_k7TZsa_eRGKX3DzoezH8wIavQtIg0w&s"
            alt="Capablanca vs Alekhine"
            className="item-icon"
          />
          <p>
            This match is famous for Alekhine's stunning tactical brilliance
            that eventually led him to claim the World Championship title.
          </p>
        </div>

        <div className="item">
          <h3>Fischer vs Spassky (1972 World Championship)</h3>
          <img
            src="https://i.ytimg.com/vi/F3pDKM39xhU/maxresdefault.jpg"
            alt="Fischer vs Spassky"
            className="item-icon"
          />
          <p>
            The legendary World Championship match between Bobby Fischer and
            Boris Spassky, symbolizing the Cold War rivalry in chess.
          </p>
        </div>

        <div className="item">
          <h3>Karpov vs Aliyev (1974 Candidate Tournament)</h3>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnBdYe2bPh3Gm17-vHro9SLEh6jPgMNhnG_g&s"
            alt="Karpov vs Aliyev"
            className="item-icon"
          />
          <p>
            One of the greatest battles between Anatoly Karpov and Viktor
            Karpov, demonstrating a high level of positional play and strategy.
          </p>
        </div>

        <div className="item">
          <h3>Queen's Gambit (Netflix Series)</h3>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4M6ALVW_loQ5n-Nt8Ruxqq4pNVUnA6rDbjg&s"
            alt="Queen's Gambit Game"
            className="item-icon"
          />
          <p>
            The fictional games portrayed in Netflix’s <i>Queen's Gambit</i> are
            often cited for their chess accuracy, inspiring new generations of
            chess enthusiasts.
          </p>
        </div>

        <div className="item">
          <h3>Botvinnik vs Petrosian (1963 World Championship)</h3>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE_7DtPDUBgNXfQK3vJNrPDVaW8xDEn4EeLg&s"
            alt="Botvinnik vs Petrosian"
            className="item-icon"
          />
          <p>
            This match is remembered for Petrosian’s extraordinary defense and
            solid position-building that eventually earned him the World
            Championship title.
          </p>
        </div>

        <div className="item">
          <h3>Karpov vs Kasparov (1984 World Championship)</h3>
          <img
            src="https://media.cnn.com/api/v1/images/stellar/prod/ap071016018641.jpg?c=16x9&q=h_833,w_1480,c_fill"
            alt="Karpov vs Kasparov"
            className="item-icon"
          />
          <p>
            A legendary rivalry between Anatoly Karpov and Garry Kasparov, often
            considered one of the greatest chess rivalries of all time.
          </p>
        </div>
      </div>
      <Link to="/ChessGuidelines" className="back-btn">
        ⬅ Back to Home
      </Link>
    </div>
  );
};

export default His;
