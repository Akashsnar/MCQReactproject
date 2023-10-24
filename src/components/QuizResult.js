import React from 'react'

function QuizResult(props) {
  const tryAgain=()=>{
    window.location.reload();
  }
  return (
    <>
    <div className='show-score'>
        Your Score:{props.score}<br/>
        Total Score:{props.totalScore}
    </div>
    <button id="next-button" onClick={tryAgain}>Try Again</button>
    </>
  )
}

export default QuizResult