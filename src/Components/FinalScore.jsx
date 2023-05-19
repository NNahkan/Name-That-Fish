export const FinalScore = ({correctCount,total}) => (
  <div id="final-score">
    <h1>Your Final Score Was</h1>
    <div id="score">
      <p> {correctCount}</p>
      <hr />
      <p>{total}</p>
    </div>
  </div>
);
