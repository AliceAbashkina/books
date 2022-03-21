import shani from "../styles/First.module.css";
import ciri from "../styles/First_NM.module.css";
import {Button, Header, Image, Toast} from "@sberdevices/plasma-ui";
import {router} from "next/client";
import styled, {keyframes} from "styled-components";
import {useRef, useState} from "react";
import {COLORS2} from "./colors";
import lambert from "../styles/Que.module.css";
import tupik from "../public/sa2.json";
import {useKey} from "./index";
import imr from "../styles/Que_NM.module.css";

let selectSq=-1;

export function Level() {
    const [value, setValue] = useState(score.hearts);
    const [star,setStar]=useState(score.triangle);
    const [mass=0, setVal] = useState(0);
    const [answer, setAnswer]=useState("");

    const [showResults, setShowResults] = useState(false); //1st answer
    const [showResults2, setShowResults2] = useState(false);
    const [showResults3, setShowResults3] = useState(false);
    const [showResults4, setShowResults4] = useState(false); //4th answer
    const [showResults10, setShowResults10] = useState(false); //buttons

    const [showResults11, setShowResults11] = useState(false); //books
    const [showResults12, setShowResults12] = useState(true); //ready hook
    const [showResults13, setShowResults13] = useState(true); //boy
    const [showResults14, setShowResults14] = useState(true); //yes butt
    const [showResults15, setShowResults15] = useState(false); //timer
    const [showResults17, setShowResults17] = useState(false); //question
    const [showToast,setToast]=useState(false);
    const [showHelp, setHelp]=useState(false);

    const [Books, setBooks]=useState(ciri.books); //active or paused books
    const [colors1, setColors1]= useState(COLORS2.strgrey);
    const [colors2, setColors2]= useState(COLORS2.strgrey);
    const [colors3, setColors3]= useState(COLORS2.strgrey);
    const [colors4, setColors4]= useState(COLORS2.strgrey);

    const [colors5, setColors5]= useState(COLORS2.strgrey);
    const [colors6, setColors6]= useState(COLORS2.strgrey);
    const [colors7, setColors7]= useState(COLORS2.strgrey);

    let way,answers,help;

    const Answer1 = styled.div`
      background-color: ${ colors1 };
    `;

    const Answer2 = styled.div`
      background-color: ${ colors2 };
    `;

    const Answer3 = styled.div`
      background-color: ${ colors3 };
    `;

    const Answer4 = styled.div`
      background-color: ${ colors4 };
    `;

    const FirstButt = styled.div`
      background-color: ${ colors5 };
    `;

    const SecondButt = styled.div`
      background-color: ${ colors6 };
    `;

    const ThirdButt = styled.div`
      background-color: ${ colors7 };
    `;

    switch (cat.items[cat.index]){
        case "Путешествия":
            way=tupik[0].travel[mass].question;
            answers=tupik[0].travel[mass].answerOptions;
            help=tupik[0].travel[mass].help;
            break;
        case "Животные":
            way=tupik[0].animals[mass].question;
            answers=tupik[0].animals[mass].answerOptions;
            help=tupik[0].animals[mass].help;
            break;
    }

    const FULL_DASH_ARRAY = 283;
    const WARNING_THRESHOLD = 10;
    const ALERT_THRESHOLD = 5;

    const COLOR_CODES = {
        info: {
            color: "green"
        },
        warning: {
            color: "orange",
            threshold: WARNING_THRESHOLD
        },
        alert: {
            color: "red",
            threshold: ALERT_THRESHOLD
        }
    };
    global.timer = {
        timer: 5
    };
    const TIME_LIMIT = 5;
    let timePassed = 0;
    let timeLeft = timer.timer;
    let timerInterval = null;
    let remainingPathColor = COLOR_CODES.info.color;



    function onTimesUp() {
        clearInterval(timerInterval);
    }

    function startTimer(mass,setValue,setVal,value) {
        timerInterval = setInterval(() => {
            timePassed = timePassed += 1;
            timeLeft = TIME_LIMIT - timePassed;
            document.getElementById("base-timer-label").innerHTML = formatTime(
                timeLeft,mass,setValue,setVal,value
            );

            if (timeLeft === 0) {
                onTimesUp();
                let value = score.hearts;
                score.hearts=--value;
                console.log(setValue)
                if(mass==9){
                    router.push('/level');
                }
                else{
                    mass++;
                    setVal(mass);
                }
              // setShowResults15(false);
                timer.timer=5;
                clearInterval(timerInterval);
            }
        }, 1000);
    }

    function formatTime(time,mass,setValue,setVal,value) {
        const minutes = Math.floor(time / 60);
        let seconds = time % 60;
        return `${seconds}`;
    }

    function calculateTimeFraction() {
        const rawTimeFraction = timeLeft / TIME_LIMIT;
        return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
    }




    function Pew(setShowResults,setShowResults2,setShowResults3,setShowResults4,setShowResults9,setShowResults10) {
        setShowResults(true);
        setShowResults2(true);
        setShowResults3(true);
        setShowResults4(true);
        setShowResults9(false);
        setShowResults10(true);
    }

    function Prom(){
        return new Promise(resolve => {
            setTimeout(() => {
                resolve('resolved');
            }, 2000);
        });
    }
    function Question(setShowResults,setShowResults2,setShowResults3,setShowResults4,setShowResults10,setShowResults13,setShowResults11,setShowResults15,mass,setValue,setVal,value) {
        setShowResults(true);
        setShowResults2(true);
        setShowResults3(true);
        setShowResults4(true);
        setShowResults10(true);
        setShowResults17(true);
        setShowResults13(false);
        setShowResults11(false);
       // setShowResults15(true);
       // startTimer(mass,setValue,setVal,value);
    }

    async function Start(setShowResults11,setShowResults12,setShowResults14,setShowResults,setShowResults2,setShowResults3,setShowResults4,setBooks,setShowResults10,setShowResults13,setShowResults15,mass,setValue,setVal,value) {
        selectSq=1;
        setShowResults11(true);
        setShowResults12(false);
        setShowResults14(false);
        setShowResults10(false);
        setShowResults17(false);
        const result = await Prom();
        console.log(result);
        setBooks(ciri.booksPaused);
        Question(setShowResults, setShowResults2, setShowResults3, setShowResults4,setShowResults10,setShowResults13,setShowResults11,setShowResults15,mass,setValue,setVal,value);
    }

    async function asyncCall() {
        console.log('calling');
        const result = await Level();
        console.log(result);
        // expected output: "resolved"
    }

    function Later(event,mass,setVal,setStar,star,setToast,setShowResults,setShowResults2,setShowResults3,setShowResults4,setHelp){
        if(star>0){
            setShowResults(true);
            setShowResults2(true);
            setShowResults3(true);
            setShowResults4(true);
            setHelp(false)
            mass++
            setVal(mass);
            star--;
            score.triangle=star;
            setStar(star);
        }
        else{
            setToast(true);
            setTimeout(function (){setToast(false)},2000);
        }
    }

    function Help(event,setHelp,help){
        setHelp(true);
        console.log(help)
        setTimeout(function (){setHelp(false)},2000);
    }

    function clickMe(event, isCorrect,value,setValue,setVal,mass,setShowResults,setShowResults2,setShowResults3,setShowResults4,setHelp,setShowResults11,setShowResults12,setShowResults14,setBooks,setShowResults10,setShowResults13,setShowResults15){
        if (isCorrect == true) {
            setShowResults(true);
            setShowResults2(true);
            setShowResults3(true);
            setShowResults4(true);
            setHelp(false);

            mass++
            setVal(mass)
            if(mass==9) {
                router.push('/level');
            }
            else{
                setShowResults(false);
                setShowResults2(false);
                setShowResults3(false);
                setShowResults4(false);
                setShowResults10(true);
                setShowResults13(true);
                setShowResults15(false);
                setBooks(ciri.books);
                Start(setShowResults11,setShowResults12,setShowResults14,setShowResults,setShowResults2,setShowResults3,setShowResults4,setBooks,setShowResults10,setShowResults13,setShowResults15,mass,setValue,setVal,value);
            }

        }
        else {
            --value
            score.hearts = value;
            setValue(value)
            if (value == 0) {
                setHelp(false);

                router.push('/fail');
            }
        }
    }

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    function Fith(event,mass,answers,setShowResults,setShowResults2,setShowResults3,setShowResults4,setHelp) {
        let rand1,isCorr;
        setShowResults(false);
        setShowResults2(false);
        setShowResults3(false);
        setShowResults4(false);
        setHelp(false);

        for(let i=0;i<3;i++){
            if(answers[i].isCorrect==true){
                switch(i) {
                    case 0:
                        setShowResults(true);
                        isCorr=i;
                        break;
                    case 1:
                        setShowResults2(true);
                        isCorr=i;
                        break;
                    case 2:
                        setShowResults3(true);
                        isCorr=i;
                        break;
                    case 3:
                        setShowResults4(true);
                        isCorr=i;
                        break;
                }
            }
        }
        console.log(isCorr);
        rand1=getRandomInt(3);

        while(rand1==isCorr)
        {
            rand1=getRandomInt(3);
        }
        switch(rand1) {
            case 0:
                setShowResults(true);
                break;
            case 1:
                setShowResults2(true);
                break;
            case 2:
                setShowResults3(true);
                break;
            case 3:
                setShowResults4(true);
                break;
        }
    }

    function handleEnter(){
        switch (selectSq) {
            case 1:
                clickMe(event,answers[0].isCorrect,value,setValue,setVal,mass,setShowResults,setShowResults2,setShowResults3,setShowResults4,setHelp,setShowResults11,setShowResults12,setShowResults14,setBooks,setShowResults10,setShowResults13,setShowResults15)
                break;
            case 2:
                clickMe(event,answers[1].isCorrect,value,setValue,setVal,mass,setShowResults,setShowResults2,setShowResults3,setShowResults4,setHelp,setShowResults11,setShowResults12,setShowResults14,setBooks,setShowResults10,setShowResults13,setShowResults15)
                break;
            case 3:
                clickMe(event,answers[2].isCorrect,value,setValue,setVal,mass,setShowResults,setShowResults2,setShowResults3,setShowResults4,setHelp,setShowResults11,setShowResults12,setShowResults14,setBooks,setShowResults10,setShowResults13,setShowResults15)
                break;
            case 4:
                clickMe(event,answers[3].isCorrect,value,setValue,setVal,mass,setShowResults,setShowResults2,setShowResults3,setShowResults4,setHelp,setShowResults11,setShowResults12,setShowResults14,setBooks,setShowResults10,setShowResults13,setShowResults15)
                break;
            case 5:
                Fith(event,answers.mass, answers,setShowResults,setShowResults2,setShowResults3,setShowResults4,setHelp)
                break;
            case 6:
                Help(event,setHelp,answers.help)
                break;
            case 7:
                Later(event,mass,setVal,setStar,star,setToast,setShowResults,setShowResults2,setShowResults3,setShowResults4,setHelp)
                break;
            case -1:
                Start(setShowResults11, setShowResults12, setShowResults14, setShowResults, setShowResults2, setShowResults3, setShowResults4, setBooks, setShowResults10, setShowResults13, setShowResults15, mass, setValue, setVal, value)
                break;
            default:
                console.log('Fara');
                break;
        }
    }
    function handleBackspace(){
        router.push('/level');
    }
    function handleArrowUp(){
        switch (selectSq) {
            case 6:
                selectSq=5;
                setColors5(COLORS2.strred);
                setColors6(COLORS2.strgrey);
                break;
            case 7:
                if(showResults4==false){
                    if(showResults3==false){
                        selectSq=2;
                        setColors2(COLORS2.strred);
                        setColors7(COLORS2.strgrey);
                    }
                    else{
                        selectSq=3;
                        setColors3(COLORS2.strred);
                        setColors7(COLORS2.strgrey);
                    }
                }
                else {
                    selectSq = 4;
                    setColors4(COLORS2.strred);
                    setColors7(COLORS2.strgrey);
                }
                break;
            case 4:
                if(showResults3==false){
                    if(showResults2==false){
                        selectSq=1;
                        setColors1(COLORS2.strred);
                        setColors4(COLORS2.strgrey);
                    }
                    else{
                        selectSq=2;
                        setColors2(COLORS2.strred);
                        setColors4(COLORS2.strgrey);
                    }
                }
                else {
                    selectSq = 3;
                    setColors3(COLORS2.strred);
                    setColors4(COLORS2.strgrey);
                }
                break;
            case 3:
                if(showResults2==false){
                    if(showResults==false){
                    }
                    else{
                        selectSq=1;
                        setColors1(COLORS2.strred);
                        setColors3(COLORS2.strgrey);
                    }
                }
                else {
                    selectSq = 2;
                    setColors2(COLORS2.strred);
                    setColors3(COLORS2.strgrey);
                }
                break;
            case 2:
                if(showResults==false){
                }
                else {
                    selectSq = 1;
                    setColors1(COLORS2.strred);
                    setColors2(COLORS2.strgrey);
                }
                break;
            default:
                console.log('Ana');
                break;
        }
    }
    function handleArrowDown(){
        switch (selectSq) {
            case 1:
                if(showResults2==false){
                    if(showResults3==false){
                        selectSq=4;
                        setColors4(COLORS2.strred);
                        setColors1(COLORS2.strgrey);
                    }
                    else{
                        selectSq=3;
                        setColors3(COLORS2.strred);
                        setColors1(COLORS2.strgrey);
                    }
                }
                else {
                    selectSq = 2;
                    setColors2(COLORS2.strred);
                    setColors1(COLORS2.strgrey);
                }
                break;
            case 2:
                if(showResults3==false){
                    if(showResults4==false){
                        selectSq=1;
                        setColors1(COLORS2.strred);
                        setColors2(COLORS2.strgrey);
                    }
                    else{
                        selectSq=4;
                        setColors4(COLORS2.strred);
                        setColors2(COLORS2.strgrey);
                    }
                }
                else {
                    selectSq = 3;
                    setColors3(COLORS2.strred);
                    setColors2(COLORS2.strgrey);
                }
                break;
            case 3:
                if(showResults4==false){
                    selectSq = 7;
                    setColors7(COLORS2.strred);
                    setColors3(COLORS2.strgrey);
                }
                else {
                    selectSq = 4;
                    setColors4(COLORS2.strred);
                    setColors3(COLORS2.strgrey);
                }
                break;
            case 4:
                selectSq=7;
                setColors7(COLORS2.strred);
                setColors4(COLORS2.strgrey);
                break;
            case 5:
                selectSq=6;
                setColors6(COLORS2.strred);
                setColors5(COLORS2.strgrey);
                break;
            default:
                console.log('Diva');
                break;
        }
    }
    function handleArrowLeft(){
        selectSq=5;
        setColors1(COLORS2.strgrey);
        setColors2(COLORS2.strgrey);
        setColors3(COLORS2.strgrey);
        setColors4(COLORS2.strgrey);
        setColors7(COLORS2.strgrey);
        setColors5(COLORS2.strred);
    }
    function handleArrowRight(){
        if(showResults==false){
            if(showResults2==false){
                selectSq=3;
                setColors5(COLORS2.strgrey);
                setColors6(COLORS2.strgrey);
                setColors7(COLORS2.strgrey);
                setColors3(COLORS2.strred);
            }
            else{
                selectSq=2;
                setColors5(COLORS2.strgrey);
                setColors6(COLORS2.strgrey);
                setColors7(COLORS2.strgrey);
                setColors2(COLORS2.strred);
            }
        }
        else {
            selectSq = 1;
            setColors5(COLORS2.strgrey);
            setColors6(COLORS2.strgrey);
            setColors7(COLORS2.strgrey);
            setColors1(COLORS2.strred);
        }
    }
    useKey("Enter",handleEnter);
    useKey("Backspace",handleBackspace);
    useKey("ArrowUp",handleArrowUp);
    useKey("ArrowDown",handleArrowDown);
    useKey("ArrowRight",handleArrowRight);
    useKey("ArrowLeft", handleArrowLeft);
    if(device.device=='mobile')
    {
        return (
            <div className={shani.bodyAnim}>
                {showToast ?
                    <div className={imr.Toast}>
                        <Toast text="У вас закончились звезды"/></div>
                    : null}

                {showHelp ?
                    <div className={shani.Toast}>
                        <Toast text={help}/></div>
                    : null}

                <div className={lambert.fuck}>
                    <div className={lambert.texticon1}>
                        {score.triangle}
                    </div>
                    <img src="/rect.png" className={lambert.Firsticon}/>
                    <div className={lambert.texticon2}>
                        {score.hearts}
                    </div>
                    <img src="/heart.png" className={lambert.Secondicon}/>
                </div>
                    <Header
                        back={false}
                        className={lambert.headers}
                    >
                    </Header>
                <div className={ciri.TextBack}>Наука</div>
                {showResults ?
                    <div className={lambert.textQue}>{way}</div>
                    : null}
                {showResults ?
                    <Answer1
                        onClick={() => clickMe(event, answers[0].isCorrect, value, setValue, setVal, mass, setShowResults, setShowResults2, setShowResults3, setShowResults4, setHelp, setShowResults11, setShowResults12, setShowResults14, setBooks, setShowResults10, setShowResults13, setShowResults15)}
                        className={shani.rel3}>
                        <Button id={[0].toString()} text={answers[0].answer} className={shani.fckdiv}></Button>
                    </Answer1>
                    : null}

                {showResults2 ?
                    <Answer2
                        onClick={() => clickMe(event, answers[1].isCorrect, value, setValue, setVal, mass, setShowResults, setShowResults2, setShowResults3, setShowResults4, setHelp, setShowResults11, setShowResults12, setShowResults14, setBooks, setShowResults10, setShowResults13, setShowResults15)}
                        className={shani.rel3}>
                        <Button id={[1].toString()} text={answers[1].answer} className={shani.fckdiv}></Button>
                    </Answer2>
                    : null}

                {showResults3 ?
                    <Answer3
                        onClick={() => clickMe(event, answers[2].isCorrect, value, setValue, setVal, mass, setShowResults, setShowResults2, setShowResults3, setShowResults4, setHelp, setShowResults11, setShowResults12, setShowResults14, setBooks, setShowResults10, setShowResults13, setShowResults15)}
                        className={shani.rel3}>
                        <Button id={[2].toString()} text={answers[2].answer} className={shani.fckdiv}></Button>
                    </Answer3>
                    : null}

                {showResults4 ?
                    <Answer4
                        onClick={() => clickMe(event, answers[3].isCorrect, value, setValue, setVal, mass, setShowResults, setShowResults2, setShowResults3, setShowResults4, setHelp, setShowResults11, setShowResults12, setShowResults14, setBooks, setShowResults10, setShowResults13, setShowResults15)}
                        className={shani.rel3}>
                        <Button id={[3].toString()} text={answers[3].answer} className={shani.fckdiv}></Button>
                    </Answer4>
                    : null}
                {showResults10 ?
                    <div className={shani.threebutt}>
                        <FirstButt className={shani.butt1}
                                   onClick={() => Fith(event, answers.mass, answers, setShowResults, setShowResults2, setShowResults3, setShowResults4, setHelp)}>
                            <Button text="50/50" className={shani.fifthonfifth}></Button>
                        </FirstButt>

                        <SecondButt className={shani.butt2}>
                            <Button text="Помощь" className={shani.Help}
                                    onClick={() => Help(event, setHelp, answers.help)}></Button>
                        </SecondButt>

                        <ThirdButt className={shani.butt3}
                                   onClick={() => Later(event, mass, setVal, setStar, star, setToast, setShowResults, setShowResults2, setShowResults3, setShowResults4, setHelp)}>
                            <div className={shani.Later}>
                                <Button text="Пропустить за 1" className={shani.LaterButt}></Button>
                                <img src="/rect.png" className={shani.romb}/>
                            </div>
                        </ThirdButt>

                    </div>
                    : null}
                {showResults13 ?
                    <Image className={shani.boy} src={'giphy.gif'} height={200} width={200}/>
                    : null}
                {showResults11 ?
                        <Image style={{marginTop: '105%'}} className={Books} src={'books.png'} height={100} width={100}/>
                    : null}
                {showResults12 ?
                    <div className={shani.Toast2}>
                        <Toast text="Когда человек добежит до препятствия - появится вопрос. Готов(а)?"/></div>
                    : null}
                {showResults14 ?
                    <div className={ciri.fckdivOk} style={{marginTop: 10}}
                         onClick={() => Start(setShowResults11, setShowResults12, setShowResults14, setShowResults, setShowResults2, setShowResults3, setShowResults4, setBooks, setShowResults10, setShowResults13, setShowResults15, mass, setValue, setVal, value)}>
                        <Button text={"Ok"} className={ciri.brOk}></Button>
                    </div>
                    : null}
                {showResults15 ?
                    <div className={ciri.basetimer}>
                        <svg className={ciri.basetimersvg} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                            <g className={ciri.basetimercircle}>
                                <circle className={ciri.basetimerpathelapsed} cx="50" cy="50" r="45"/>
                                <path
                                    id="base-timer-path-remaining"
                                    strokeDasharray="283"
                                    className={ciri.basetimerpathremaining.orange}
                                    d="
          M 50, 50
          m -45, 0
          a 45,45 0 1,0 90,0
          a 45,45 0 1,0 -90,0
        "
                                />
                            </g>
                        </svg>
                        <span id="base-timer-label" className={ciri.basetimerlabel}>{formatTime(
                            timeLeft, mass, setValue, setVal, value
                        )}</span>
                    </div>
                    : null}
            </div>
        );
    } else {
        return (
            <div className={ciri.bodyAnim}>
                {showToast ?
                    <div className={imr.Toast}>
                        <Toast text="У вас закончились звезды"/></div>
                    : null}

                {showHelp ?
                    <div className={imr.Toast}>
                        <Toast text={help}/></div>
                    : null}

                <div className={lambert.fuck}>
                    <div className={lambert.texticon1}>
                        {score.triangle}
                    </div>
                    <img src="/rect.png" className={lambert.Firsticon}/>
                    <div className={lambert.texticon2}>
                        {score.hearts}
                    </div>
                    <img src="/heart.png" className={lambert.Secondicon}/>
                </div>

                <div className={lambert.headers}>
                    <Header
                        back={true}
                        onBackClick={() => router.push('/second')}
                    >
                    </Header>
                </div>
                <div className={ciri.TextBack}>Наука</div>
                {showResults17 ?
                    <div className={imr.textQue}>{way}</div>
                    : null}
                {showResults ?
                    <Answer1
                        onClick={() => clickMe(event, answers[0].isCorrect, value, setValue, setVal, mass, setShowResults, setShowResults2, setShowResults3, setShowResults4, setHelp, setShowResults11, setShowResults12, setShowResults14, setBooks, setShowResults10, setShowResults13, setShowResults15)}
                        className={ciri.rel3}>
                        <Button id={[0].toString()} text={answers[0].answer} className={ciri.fckdiv}></Button>
                    </Answer1>
                    : null}

                {showResults2 ?
                    <Answer2
                        onClick={() => clickMe(event, answers[1].isCorrect, value, setValue, setVal, mass, setShowResults, setShowResults2, setShowResults3, setShowResults4, setHelp, setShowResults11, setShowResults12, setShowResults14, setBooks, setShowResults10, setShowResults13, setShowResults15)}
                        className={ciri.rel3}>
                        <Button id={[1].toString()} text={answers[1].answer} className={ciri.fckdiv}></Button>
                    </Answer2>
                    : null}

                {showResults3 ?
                    <Answer3
                        onClick={() => clickMe(event, answers[2].isCorrect, value, setValue, setVal, mass, setShowResults, setShowResults2, setShowResults3, setShowResults4, setHelp, setShowResults11, setShowResults12, setShowResults14, setBooks, setShowResults10, setShowResults13, setShowResults15)}
                        className={ciri.rel3}>
                        <Button id={[2].toString()} text={answers[2].answer} className={ciri.fckdiv}></Button>
                    </Answer3>
                    : null}

                {showResults4 ?
                    <Answer4
                        onClick={() => clickMe(event, answers[3].isCorrect, value, setValue, setVal, mass, setShowResults, setShowResults2, setShowResults3, setShowResults4, setHelp, setShowResults11, setShowResults12, setShowResults14, setBooks, setShowResults10, setShowResults13, setShowResults15)}
                        className={ciri.rel3}>
                        <Button id={[3].toString()} text={answers[3].answer} className={ciri.fckdiv}></Button>
                    </Answer4>
                    : null}
                {showResults10 ?
                    <div className={ciri.threebutt}>
                        <FirstButt className={imr.butt1}
                                   onClick={() => Fith(event, answers.mass, answers, setShowResults, setShowResults2, setShowResults3, setShowResults4, setHelp)}>
                            <Button text="50/50" className={ciri.fifthonfifth}></Button>
                        </FirstButt>

                        <SecondButt className={ciri.butt2}>
                            <Button text="Помощь" className={ciri.Help}
                                    onClick={() => Help(event, setHelp, answers.help)}></Button>
                        </SecondButt>

                        <ThirdButt className={ciri.butt3}
                                   onClick={() => Later(event, mass, setVal, setStar, star, setToast, setShowResults, setShowResults2, setShowResults3, setShowResults4, setHelp)}>
                            <div className={ciri.Later}>
                                <Button text="Пропустить за 1" className={ciri.LaterButt}></Button>
                                <img src="/rect.png" className={ciri.romb}/>
                            </div>
                        </ThirdButt>

                    </div>
                    : null}
                {showResults13 ?
                    <Image className={ciri.boy} src={'giphy.gif'} height={200} width={200}/>
                    : null}
                {showResults11 ?
                    <div>
                        <Image className={Books} src={'books.png'} height={100} width={100}/>
                    </div>
                    : null}
                {showResults12 ?
                    <div className={ciri.Toast2}>
                        <Toast text="Когда человек добежит до препятствия - появится вопрос. Готов(а)?"/></div>
                    : null}
                {showResults14 ?
                    <div className={ciri.fckdivOk} style={{marginTop: 10}}
                         onClick={() => Start(setShowResults11, setShowResults12, setShowResults14, setShowResults, setShowResults2, setShowResults3, setShowResults4, setBooks, setShowResults10, setShowResults13, setShowResults15, mass, setValue, setVal, value)}>
                        <Button text={"Ok"} className={ciri.brOk}></Button>
                    </div>
                    : null}
                {showResults15 ?
                    <div className={ciri.basetimer}>
                        <svg className={ciri.basetimersvg} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                            <g className={ciri.basetimercircle}>
                                <circle className={ciri.basetimerpathelapsed} cx="50" cy="50" r="45"/>
                                <path
                                    id="base-timer-path-remaining"
                                    strokeDasharray="283"
                                    className={ciri.basetimerpathremaining.orange}
                                    d="
          M 50, 50
          m -45, 0
          a 45,45 0 1,0 90,0
          a 45,45 0 1,0 -90,0
        "
                                />
                            </g>
                        </svg>
                        <span id="base-timer-label" className={ciri.basetimerlabel}>{formatTime(
                            timeLeft, mass, setValue, setVal, value
                        )}</span>
                    </div>
                    : null}
            </div>
        );
    }
}

export default Level;
