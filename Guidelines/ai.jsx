import React from "react";
import { Link } from "react-router-dom";
import "./styles2.css";

const Ai = () => {
  return (
    <div className="p">
      <h1 className="page-title">♟️ Playing Against AI ♟️</h1>
      <div className="item-container">
        <div className="item">
          <h3>AI Difficulty Levels</h3>
          <img
            src="https://cdn.shopify.com/s/files/1/0651/9462/3224/files/32-level-of-ai_480x480.webp?v=1728895334"
            alt="AI Difficulty Levels"
            className="item-icon"
          />
          <p>
            Select a difficulty level that matches your skills. Start with a
            lower level to understand the AI’s basic tactics before advancing.
          </p>
        </div>

        <div className="item">
          <h3>Understanding AI Strategy</h3>
          <img
            src="https://miro.medium.com/v2/resize:fit:1400/0*gwk8OZ6spZvHqYYd.png"
            alt="AI Strategy"
            className="item-icon"
          />
          <p>
            AI players often follow specific strategies. Familiarize yourself
            with these strategies to better anticipate their moves.
          </p>
        </div>

        <div className="item">
          <h3>AI Playing Style</h3>
          <img
            src="https://www.shutterstock.com/image-illustration/ai-artificial-intelligencedata-scienceinformation-technologyrobotic-600nw-2450383491.jpg"
            alt="AI Playing Style"
            className="item-icon"
          />
          <p>
            Different AIs can have distinct styles of play. Some may focus on
            tactical play, while others lean towards positional play. Recognize
            their style and adapt accordingly.
          </p>
        </div>

        <div className="item">
          <h3>Avoiding Blunders Against AI</h3>
          <img
            src="https://media.chesskidfiles.com/images/user/tiny_mce/GrandpaRayNC/blunder%20one%20single%20wrong%20move%20_d5f20.png"
            alt="Avoiding Blunders"
            className="item-icon"
          />
          <p>
            Even though AI is a powerful opponent, it is still prone to
            blunders. Look for opportunities to capitalize on mistakes.
          </p>
        </div>

        <div className="item">
          <h3>Time Management</h3>
          <img
            src="https://media.licdn.com/dms/image/v2/D4E12AQGZgbs4gyf2UA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1699953215821?e=2147483647&v=beta&t=prOHaiLmDTZ_e_GGvSTD27zcafMs7YdoRBUDJFxxmYg"
            alt="Time Management"
            className="item-icon"
          />
          <p>
            Managing your time effectively is crucial when playing against AI,
            as it helps avoid rushed decisions and ensures better play.
          </p>
        </div>

        <div className="item">
          <h3>Learning from AI</h3>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH-NARkM1ZpjT1AqunKj-NOdBnluDELKRSzQ&s"
            alt="Learning from AI"
            className="item-icon"
          />
          <p>
            Playing against AI can be a great learning experience. Study your
            games afterward to understand the AI’s strategies and improve your
            play.
          </p>
        </div>
      </div>
      <Link to="/ChessGuidelines" className="back-btn">
        ⬅ Back to Home
      </Link>
    </div>
  );
};

export default Ai;
