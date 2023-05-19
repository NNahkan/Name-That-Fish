import { useState } from "react";
import "./App.css";
import { GameBoard } from "./Components/GameBoard";
import { ScoreBoard } from "./Components/ScoreBoard";
import "./Components/styles/final-score.css";
import { FinalScore } from "./Components/FinalScore";
import { Images } from "./assets/images";

const initialFishes = [
  {
    name: "trout",
    url: Images.trout,
  },
  {
    name: "salmon",
    url: Images.salmon,
  },
  {
    name: "tuna",
    url: Images.tuna,
  },
  {
    name: "shark",
    url: Images.shark,
  },
];

const answersLeft = initialFishes.map((item) => item.name);


function App() {
  const [correct, setCorrect] = useState(0);
  const [incorrect, setIncorrect] = useState(0);
  const total = correct + incorrect;


  const nextQuestion = (isCorrect) => {
    isCorrect ? setCorrect(correct + 1) : setIncorrect(incorrect + 1);
  };

  return (
    <div className="App">
      <header>
        {total === initialFishes.length ? (
          <FinalScore total={total} correctCount={correct} />
        ) : (
          <div>
            <ScoreBoard
              answersLeft={answersLeft}
              total={total}
              correct={correct}
              incorrect={incorrect}
            />
            <GameBoard
              initialFishes={initialFishes}
              total={total}
              nextQuestion={nextQuestion}
            />
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
