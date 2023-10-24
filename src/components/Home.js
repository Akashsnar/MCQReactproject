import React, { useState, useEffect } from 'react'
import Quiz from './Quiz'
import QuizResult from './QuizResult';
function Home() {

    const [quiz, setquiz] = useState(0);
    const [timeLeft, setTimeLeft] = useState(0);
    const [isActive, setIsActive] = useState(false);
const [current, setCurrent]=useState(0);
const hidetime= document.getElementById('showtime');

const result=(res)=>{
    setCurrent(res);
    console.log(res);
}
    useEffect(() => {
        let interval;

        if (isActive && timeLeft <= 20) {
            interval = setInterval(() => {
                setTimeLeft((prevTime) => prevTime + 1);
            }, 1000);
            console.log('1');
        } else {
            clearInterval(interval);
            console.log('2'+isActive+timeLeft);

        }

        return () => {
            clearInterval(interval);
        };
    }, [isActive, timeLeft]);



    const startquiz = () => {
        setquiz(1);
        document.getElementById('btnstart').style.display = 'none';
        setIsActive(true);
    }

    return (
        <div>
            <button onClick={startquiz} id='btnstart' className='btn btn-success'>start Quiz</button>

            {quiz === 1 & (timeLeft<20) ? <div> <p id='showtime' style={{position: 'relative', bottom:'-27.5rem', left:'18rem', zIndex:'1000'}}  >Time= {timeLeft}/ 20s</p>  <Quiz result={result} hidetime={hidetime}/></div> : ''}
            {quiz === 1 & (timeLeft>=20) ? <div className='container'> <QuizResult score={current} totalScore={4}/> </div> : ''}


        </div>
    )
}

export default Home
