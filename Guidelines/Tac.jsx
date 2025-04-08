import React, { useState, useRef } from "react";
import "./tac.css";
import { Link } from "react-router-dom";

const tips = [
  {
    title: "Develop Quickly",
    color: "#00c27a",
    info: "Develop quickly to gain control of the board early. A fast development ensures better positioning of your pieces, enabling tactical play. Speed is key for controlling space, and developing pieces gives more flexibility for future moves. Ideally, develop knights and bishops before other pieces.",
  },
  {
    title: "No Queen Too Early",
    color: "#d1008a",
    info: "Avoid bringing your queen out too early to prevent easy attacks. The queen is powerful but vulnerable if deployed prematurely. Developing other pieces first helps protect your queen, and it is best to use her in the middle game when there is more scope for attacking.",
  },
  {
    title: "Avoid Double Pawns",
    color: "#00c2ff",
    info: "Avoid double pawns as they can weaken your structure and limit mobility. Double pawns often create weak spots and are harder to defend. Aim for pawn structures that maintain flexibility and support each other.",
  },
  {
    title: "Castle Before Move 10",
    color: "#a377f5",
    info: "Castle early to safeguard your king and connect your rooks. A well-defended king is crucial in all phases of the game. Castling helps to move your king into a safer position and connects the rooks for better coordination.",
  },
  {
    title: "Backward Pawns",
    color: "#ffdb00",
    info: "Backward pawns can be a weakness as they are hard to defend. Avoid getting stuck with pawns that can’t be supported. These pawns are vulnerable to attack and restrict the movement of other pieces.",
  },
  {
    title: "Knights Before Bishops",
    color: "#5933b9",
    info: "Develop knights before bishops for better control. Knights can jump over pieces and are more effective early in the game, providing better control over key central squares.",
  },
  {
    title: "No Hope Chess",
    color: "#e00000",
    info: "No Hope Chess means playing optimally without mistakes. Precise play leads to a strong position and eventual victory. Make sure you minimize blunders and force your opponent into a defensive position.",
  },
  {
    title: "Avoid Isolated Pawns",
    color: "#ffcc00",
    info: "Avoid isolated pawns as they are hard to defend and can become easy targets for your opponent. Isolated pawns lack support from other pawns and can become weaknesses in your position.",
  },
  {
    title: "Connect Your Rooks",
    color: "#002fff",
    info: "Connect your rooks for better coordination and stronger endgame play. Connected rooks are powerful and can dominate the board, especially in the endgame when there are fewer pieces left.",
  },
  {
    title: "Control The Center",
    color: "#27c300",
    info: "Control the center to dominate the game and limit your opponent’s options. Central control allows pieces to move freely and exert pressure on the opponent. Ideally, control the central squares early and keep your opponent from doing the same.",
  },
  {
    title: "Rooks On Open Files",
    color: "#ff0096",
    info: "Place rooks on open files for more activity and greater influence over key squares. Rooks are more effective when placed on files that are not blocked by pawns, as they can pressure your opponent’s position more effectively.",
  },
  {
    title: "Attack Base Of Pawn Chain",
    color: "#00d8ff",
    info: "Attack the base of the pawn chain to break your opponent’s structure and create weaknesses. Targeting the base of pawns can disrupt your opponent’s position and give you an advantage.",
  },
  {
    title: "Knights On The Rim",
    color: "#ff9900",
    info: "Knights on the rim are usually less effective as they control fewer squares. Keep them centralized for better influence over the board. A knight in the center controls more squares and has greater mobility.",
  },
  {
    title: "Double Rooks On Open Files",
    color: "#3399ff",
    info: "Double your rooks on open files to exert maximum pressure on your opponent. Rooks working together on open files can overwhelm your opponent’s defenses and create tactical opportunities.",
  },
  {
    title: "Rooks On 7th",
    color: "#ffcc00",
    info: "Rooks on the 7th rank are very strong, often restricting your opponent’s king. The 7th rank is key for rooks because it can trap the opponent’s king and cut off escape routes.",
  },
];

const Tac = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [infoStyle, setInfoStyle] = useState({ left: "0px", top: "0px" });
  const infoRef = useRef(null);

  const handleClick = (index, e) => {
    if (activeIndex === index) {
      setActiveIndex(null);
      return;
    }

    const iconElement = e.currentTarget;
    const container = iconElement.parentElement;
    const iconIndex = Array.from(container.children).indexOf(iconElement);

    const randomX = Math.floor(Math.random() * 150) - 75;
    const randomY = Math.floor(Math.random() * 100) - 50;
    const topOffset = iconIndex > 7 ? 150 : 0;

    setInfoStyle({
      left: `${randomX}px`,
      top: `${randomY + topOffset}px`,
    });

    setActiveIndex(index);
  };

  return (
    <div className="t">
      <div className="main-container">
        <div className="container">
          {tips.map((tip, index) => (
            <div
              key={index}
              className="icon"
              style={{ backgroundColor: tip.color }}
              onClick={(e) => handleClick(index, e)}
            >
              {tip.title}
            </div>
          ))}
        </div>

        {activeIndex !== null && (
          <div
            ref={infoRef}
            id="infoBox"
            className={`info-box ${activeIndex !== null ? "slide-in" : "hide"}`}
            style={infoStyle}
          >
            {tips[activeIndex].info}
          </div>
        )}
      </div>
      <div
        style={{
          // width: "100%",
          display: "flex",
          justifyContent: "center",
          marginTop: "40px",
          marginBottom: "50px",
        }}
      >
        <Link to="/ChessGuidelines" className="back-btn">
          Back to Menu
        </Link>
      </div>
    </div>
  );
};

export default Tac;
