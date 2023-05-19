import "./styles/score-board.css";
//  Where the score is presented

 
export const ScoreBoard = ({ correct, incorrect,total,answersLeft }) => {
  const incorrectCount = incorrect;
  const correctCount = correct;
 
  return (
    <div id="score-board">
      <div>Incorrect 🔻: {incorrectCount}</div>
      <div id="choices-left">
        {answersLeft.slice(total).map((answer) => (
          <div key={answer} className="choice">
            {answer}
          </div>
        ))}
      </div>
      <div>Correct ✅: {correctCount}</div>
    </div>
  );
};
