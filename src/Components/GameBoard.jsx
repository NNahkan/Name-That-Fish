import "./styles/game-board.css";
import { useState } from "react";

export const GameBoard = ({ total, nextQuestion, initialFishes }) => {
  const [answer, setAnswer] = useState("");
  const nextFishToName = initialFishes[total];

  const handleSubmit = (e) => {
    e.preventDefault();

    const isCorrect = answer === nextFishToName.name ? true : false;
    //  nextQuestion(answer === nextFishToName.name);
    nextQuestion(isCorrect);

    setAnswer("");
  };

  return (
    <div id="game-board">
      <div id="fish-container">
        <img src={nextFishToName.url} alt={nextFishToName.name} />
      </div>
      <form id="fish-guess-form" onSubmit={handleSubmit}>
        <label htmlFor="fish-guess">What kind of fish is this?</label>
        <input
          type="text"
          name="fish-guess"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />
        <input type="submit" />
      </form>
    </div>
  );
};
