import shani from "../styles/First.module.css";
import ciri from "../styles/First_NM.module.css";
import {Button, Header, Image, Toast} from "@sberdevices/plasma-ui";
import styled from "styled-components";
import {useEffect, useRef, useState} from "react";
import {COLORS, COLORS2} from "../public/colors";
import lambert from "../styles/Que.module.css";
import tupik from "../public/sa2.json";
import imr from "../styles/Que_NM.module.css";
import * as indexVar from './index';
import {useRouter} from "next/router";
import { keyframes } from 'styled-components'
import ien from "../styles/Level.module.css";

globalThis.selectSq=-1;

const city = keyframes `
        from { background-position: 1920px 100%; }
        to { background-position: 0 100%, 0 0;}
    `
const Body = styled.div `
    height: 100%;
    width: 100%;
    background: url(/townie.png) repeat-x 0 100% fixed;
    animation: ${city} 20s linear infinite;
  transition-property: background-position;
    background-size: cover;
    z-index: 3;
    overflow: hidden;
      animation-fill-mode: forwards;
    `;

export function Level() {
    const router = useRouter();
    function useKey(key,cb){
        const callbackRef=useRef(cb);
        useEffect(()=>{
            callbackRef.current=cb;
        });

        useEffect(()=>{
            function handle(event){
                if(event.code===key){
                    callbackRef.current(event);
                }
            }
            document.addEventListener("keydown",handle);
            return ()=>document.removeEventListener("keydown",handle)
        },[key]);
    }


    const [value, setValue] = useState(hearts);
    const [star,setStar]=useState(triangle);
    const [mass=0, setVal] = useState(0);
    const [answer, setAnswer]=useState("");

    const [showResultsQ, setShowResultsQ] = useState(false); //q
    const [showResults, setShowResults] = useState(false); //1st answer
    const [showResults2, setShowResults2] = useState(false);
    const [showResults3, setShowResults3] = useState(false);
    const [showResults4, setShowResults4] = useState(false); //4th answer
    const [showResults10, setShowResults10] = useState(false); //buttons
    const [showResults55, setShowResults55] = useState(true); //50\50

    const [showResults11, setShowResults11] = useState(false); //books
    const [showResults12, setShowResults12] = useState(true); //ready hook
    const [showResults13, setShowResults13] = useState(true); //boy
    const [showResults14, setShowResults14] = useState(true); //yes butt
    const [showResults15, setShowResults15] = useState(false); //timer
    const [showResults17, setShowResults17] = useState(false); //question
    const [showToast,setToast]=useState(false);
    const [showHelp, setHelp]=useState(false);

    const [Books, setBooks]=useState(ciri.books); //active or paused books
    const [colors1, setColors1]= useState(COLORS2.strgrey); //no-mob
    const [colors2, setColors2]= useState(COLORS2.strgrey);
    const [colors3, setColors3]= useState(COLORS2.strgrey);
    const [colors4, setColors4]= useState(COLORS2.strgrey);

    const [colors11, setColors11]= useState(COLORS2.strgrey);
    const [colors12, setColors12]= useState(COLORS2.strgrey);
    const [colors13, setColors13]= useState(COLORS2.strgrey);
    const [colors14, setColors14]= useState(COLORS2.strgrey);

    const [colors5, setColors5]= useState(COLORS2.strgrey);
    const [colors6, setColors6]= useState(COLORS2.strgrey);
    const [colors7, setColors7]= useState(COLORS2.strgrey);

    let way,answers,help;

    const Answer1 = styled.div`
      background-color: ${ colors1 };
      &:focus {
        background-color: ${COLORS2.vid};
      }
    `;

    const Answer2 = styled.div`
      background-color: ${ colors2 };
      &:focus {
        background-color: ${COLORS2.vid};
      }
    `;

    const Answer3 = styled.div`
      background-color: ${ colors3 };
      &:focus {
        background-color: ${COLORS2.vid};
      }
    `;

    const Answer4 = styled.div`
      background-color: ${ colors4 };
      &:focus {
        background-color: ${COLORS2.vid};
      }
    `;

    const FirstButt = styled.div`
      background-color: ${ colors5 };
      &:focus {
        background-color: ${COLORS2.vid};
      }
    `;

    const SecondButt = styled.div`
      background-color: ${ colors6 };
      &:focus {
        background-color: ${COLORS2.vid};
      }
    `;

    const ThirdButt = styled.div`
      background-color: ${ colors7 };
      &:focus {
        background-color: ${COLORS2.vid};
      }
    `;

    const MobAn1 = styled.div`
      background-color: ${ colors11 };
    `;

    const MobAn2 = styled.div`
      background-color: ${ colors12 };
    `;

    const MobAn3 = styled.div`
      background-color: ${ colors13 };
    `;

    const MobAn4 = styled.div`
      background-color: ${ colors14 };
    `;


    switch (items[index]){
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
                let value = hearts;
                globalThis.hearts=--value;
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

    function Prom(){
        return new Promise(resolve => {
            setTimeout(() => {
                resolve('resolved');
            }, 2000);
        });
    }
    function Question(setShowResults,setShowResults2,setShowResults3,setShowResults4,setShowResults10,setShowResults13,setShowResults11,setShowResults15,mass,setValue,setVal,value) {
        setShowResultsQ(true);
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

    async function Start() {
        globalThis.selectSq=1;
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
            setShowResultsQ(true);
            setShowResults(true);
            setShowResults2(true);
            setShowResults3(true);
            setShowResults4(true);
            setHelp(false)
            mass++
            if(mass==9){
                router.push('/win');
                setStar(5);
            }
            else{
                star--;
                globalThis.triangle=star;
                setStar(star);
                setShowResults55(true)
                setVal(mass);
                setColors1(COLORS2.strgrey);
                setColors7(COLORS2.strgrey);
                setColors2(COLORS2.strgrey);
                setColors3(COLORS2.strgrey);

                setColors11(COLORS2.strgrey);
                setColors12(COLORS2.strgrey);
                setColors13(COLORS2.strgrey);
                setColors14(COLORS2.strgrey);
                globalThis.selectSq=1;
            }
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

    function Proma(){
        return new Promise(resolve => {
            setTimeout(() => {
                resolve('resolved');
            }, 100);
        });
    }


    async function clickMe(event, isCorrect,value,setValue,setVal,mass,setShowResults,setShowResults2,setShowResults3,setShowResults4,setHelp,setShowResults11,setShowResults12,setShowResults14,setBooks,setShowResults10,setShowResults13,setShowResults15,tr){
        if (isCorrect == true) {
            switch(globalThis.selectSq) {
                case 1:
                    setColors1(COLORS.strtrue)
                    break;
                case 2:
                    setColors2(COLORS.strtrue)
                    break;
                case 3:
                    setColors3(COLORS.strtrue)
                    break;
                case 4:
                    setColors4(COLORS.strtrue)
                    break;
            }
            switch(tr) {
                case 1:
                    setColors11(COLORS.strtrue)
                    break;
                case 2:
                    setColors12(COLORS.strtrue)
                    break;
                case 3:
                    setColors13(COLORS.strtrue)
                    break;
                case 4:
                    setColors14(COLORS.strtrue)
                    break;
            }
            const result = await Proma();
            setColors1(COLORS2.strgrey);
            setColors2(COLORS2.strgrey)
            setColors3(COLORS2.strgrey)
            setColors4(COLORS2.strgrey)

            setColors11(COLORS2.strgrey);
            setColors12(COLORS2.strgrey);
            setColors13(COLORS2.strgrey);
            setColors14(COLORS2.strgrey);

            setShowResultsQ(true);
            setShowResults(true);
            setShowResults2(true);
            setShowResults3(true);
            setShowResults4(true);
            setHelp(false);
            setShowResults55(true);
            mass++
            setVal(mass)
            if(mass==9) {
                router.push('/win');
                globalThis.selectSq=-1;
            }
            else{
                setShowResultsQ(false);
                setShowResults(false);
                setShowResults2(false);
                setShowResults3(false);
                setShowResults4(false);
                setShowResults10(true);
                setShowResults13(true);
                setShowResults15(false);
                setBooks(ciri.books);
                Start();
            }

        }
        else {
            switch(selectSq) {
                case 1:
                    setColors1(COLORS.strred)
                    break;
                case 2:
                    setColors2(COLORS.strred)
                    break;
                case 3:
                    setColors3(COLORS.strred)
                    break;
                case 4:
                    setColors4(COLORS.strred)
                    break;
            }
            switch(tr) {
                case 1:
                    setColors11(COLORS.strred)
                    setColors12(COLORS2.strgrey)
                    setColors13(COLORS2.strgrey)
                    setColors14(COLORS2.strgrey)
                    break;
                case 2:
                    setColors12(COLORS.strred)
                    setColors11(COLORS2.strgrey)
                    setColors13(COLORS2.strgrey)
                    setColors14(COLORS2.strgrey)
                    break;
                case 3:
                    setColors13(COLORS.strred)
                    setColors11(COLORS2.strgrey)
                    setColors14(COLORS2.strgrey)
                    setColors12(COLORS2.strgrey)
                    break;
                case 4:
                    setColors14(COLORS.strred)
                    setColors11(COLORS2.strgrey)
                    setColors12(COLORS2.strgrey)
                    setColors13(COLORS2.strgrey)
                    break;
            }
            --value
            globalThis.hearts=value;
            setValue(value)
            if (value == 0) {
                setHelp(false);
                globalThis.hearts=5;
                setValue(5);
                globalThis.selectSq=-1;
                setShowResults55(true);
                router.push('/fail');
            }
        }
    }

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    function Fith(event,mass,answers,setShowResults,setShowResults2,setShowResults3,setShowResults4,setHelp) {
        let rand1,isCorr;
        document.getElementById("first").blur();
        document.getElementById("second").blur();
        document.getElementById("third").blur();
        document.getElementById("fourth").blur();

        setShowResults(false);
        setShowResults2(false);
        setShowResults3(false);
        setShowResults4(false);
        setHelp(false);

        for(let i=0;i<4;i++){
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
        document.getElementById("50").blur();
        switch(rand1) {
            case 0:
                setShowResults(true);
                // @ts-ignore
                globalThis.selectSq=1;
                document.getElementById("first").focus()
                setColors1(COLORS2.vid);
                break;
            case 1:
                setShowResults2(true);
                // @ts-ignore
                globalThis.selectSq=2;
                document.getElementById("second").focus()
                setColors2(COLORS2.vid);
                break;
            case 2:
                setShowResults3(true);
                // @ts-ignore
                globalThis.selectSq=3;
                document.getElementById("third").focus()
                setColors3(COLORS2.vid);
                break;
            case 3:
                setShowResults4(true);
                // @ts-ignore
                globalThis.selectSq=4;
                document.getElementById("fourth").focus()
                setColors4(COLORS2.vid);
                break;
        }
        document.getElementById("50").blur();

        setShowResults55(false);
        setColors5(COLORS2.strgrey);

    }

    function MobFith(event,mass,answers,setShowResults,setShowResults2,setShowResults3,setShowResults4,setHelp) {
        let rand1,isCorr;
        setShowResults(false);
        setShowResults2(false);
        setShowResults3(false);
        setShowResults4(false);
        setHelp(false);

        for(let i=0;i<4;i++){
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
                // @ts-ignore
                globalThis.selectSq=1;
                break;
            case 1:
                setShowResults2(true);
                // @ts-ignore
                globalThis.selectSq=2;
                break;
            case 2:
                setShowResults3(true);
                // @ts-ignore
                globalThis.selectSq=3;
                break;
            case 3:
                setShowResults4(true);
                // @ts-ignore
                globalThis.selectSq=4;
                break;
        }
        setShowResults55(false);
        setColors5(COLORS2.strgrey);
    }

    function handleEnter(){
        console.log(selectSq)
        switch (selectSq) {
            case 1:
                clickMe(event,answers[0].isCorrect,value,setValue,setVal,mass,setShowResults,setShowResults2,setShowResults3,setShowResults4,setHelp,setShowResults11,setShowResults12,setShowResults14,setBooks,setShowResults10,setShowResults13,setShowResults15,0)
                break;
            case 2:
                clickMe(event,answers[1].isCorrect,value,setValue,setVal,mass,setShowResults,setShowResults2,setShowResults3,setShowResults4,setHelp,setShowResults11,setShowResults12,setShowResults14,setBooks,setShowResults10,setShowResults13,setShowResults15,0)
                break;
            case 3:
                clickMe(event,answers[2].isCorrect,value,setValue,setVal,mass,setShowResults,setShowResults2,setShowResults3,setShowResults4,setHelp,setShowResults11,setShowResults12,setShowResults14,setBooks,setShowResults10,setShowResults13,setShowResults15,0)
                break;
            case 4:
                clickMe(event,answers[3].isCorrect,value,setValue,setVal,mass,setShowResults,setShowResults2,setShowResults3,setShowResults4,setHelp,setShowResults11,setShowResults12,setShowResults14,setBooks,setShowResults10,setShowResults13,setShowResults15,0)
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
                Start()
                break;
            default:
                console.log('Fara');
                break;
        }
    }
    function handleBackspace(){
        selectSq=-1;
        router.push('/level');
    }
    function handleArrowUp(){
        switch (selectSq) {
            case 6:
                setColors6(COLORS2.strgrey);
                if(showResults55==false){
                    setColors6(COLORS2.vid);
                    document.getElementById("help").focus();
                }
                else {
                    globalThis.selectSq = 5;
                    setColors5(COLORS2.vid);
                    document.getElementById("50").focus();
                    document.getElementById("help").blur();
                }
                break;
            case 7:
                setColors7(COLORS2.strgrey);
                if(showResults4==false){
                    if(showResults3==false){
                        globalThis.selectSq=2;
                        setColors6(COLORS2.vid);
                        document.getElementById("second").focus();
                        document.getElementById("later").blur();
                    }
                    else{
                        globalThis.selectSq=3;
                        setColors3(COLORS2.vid);
                        document.getElementById("third").focus();
                        document.getElementById("later").blur();
                    }
                }
                else {
                    globalThis.selectSq = 4;
                    setColors4(COLORS2.vid);
                    document.getElementById("fourth").focus();
                    document.getElementById("later").blur();
                }
                break;
            case 4:
                setColors4(COLORS2.strgrey);
                if(showResults3==false){
                    if(showResults2==false){
                        globalThis.selectSq=1;
                        setColors1(COLORS2.vid);
                        document.getElementById("first").focus();
                        document.getElementById("fourth").blur();
                    }
                    else{
                        globalThis.selectSq=2;
                        setColors2(COLORS2.vid);
                        document.getElementById("second").focus();
                        document.getElementById("fourth").blur();
                    }
                }
                else {
                    globalThis.selectSq = 3;
                    setColors3(COLORS2.vid);
                    document.getElementById("third").focus();
                    document.getElementById("fourth").blur();
                }
                break;
            case 3:
                setColors3(COLORS2.strgrey);
                if(showResults2==false){
                    if(showResults==false){
                        setColors3(COLORS2.vid);
                        globalThis.selectSq=3;
                        document.getElementById("third").focus();
                    }
                    else{
                        setColors1(COLORS2.vid);
                        globalThis.selectSq=1;
                        document.getElementById("first").focus();
                        document.getElementById("third").blur();
                    }
                }
                else {
                    setColors2(COLORS2.vid);
                    globalThis.selectSq = 2;
                    document.getElementById("second").focus();
                    document.getElementById("third").blur();
                }
                break;
            case 2:
                setColors2(COLORS2.strgrey);
                if(showResults==false){
                    setColors2(COLORS2.vid);
                    globalThis.selectSq=2;
                    document.getElementById("second").focus();
                }
                else {
                    globalThis.selectSq = 1;
                    setColors1(COLORS2.vid);
                    document.getElementById("first").focus();
                    document.getElementById("second").blur();
                }
                break;
            case 1:
                document.getElementById("first").blur();
                globalThis.selectSq = 7;
                setColors7(COLORS2.vid);
                setColors1(COLORS2.strgrey);
                document.getElementById("later").focus();
                break;
            case 5:
                document.getElementById("50").blur();
                globalThis.selectSq = 6;
                setColors6(COLORS2.vid);
                setColors5(COLORS2.strgrey);
                document.getElementById("help").focus();
                break;
            default:
                console.log('Ana');
                break;
        }
    }
    function handleArrowDown(){
        switch (selectSq) {
            case 1:
                setColors1(COLORS2.strgrey);
                if(showResults2==false){
                    if(showResults3==false){
                        globalThis.selectSq=4;
                        setColors4(COLORS2.vid);
                        document.getElementById("fourth").focus();
                        document.getElementById("first").blur();
                    }
                    else{
                        globalThis.selectSq=3;
                        setColors3(COLORS2.vid);
                        document.getElementById("third").focus();
                        document.getElementById("first").blur();
                    }
                }
                else {
                    globalThis.selectSq = 2;
                    setColors2(COLORS2.vid);
                    document.getElementById("second").focus();
                    document.getElementById("first").blur();
                }
                break;
            case 2:
                setColors2(COLORS2.strgrey);
                if(showResults3==false){
                    if(showResults4==false){
                        globalThis.selectSq=7;
                        setColors7(COLORS2.vid);
                        document.getElementById("later").focus();
                        document.getElementById("second").blur();
                    }
                    else{
                        globalThis.selectSq=4;
                        setColors4(COLORS2.vid);
                        document.getElementById("fourth").focus();
                        document.getElementById("second").blur();
                    }
                }
                else {
                    globalThis.selectSq = 3;
                    setColors3(COLORS2.vid);
                    document.getElementById("third").focus();
                    document.getElementById("second").blur();
                }
                break;
            case 3:
                setColors3(COLORS2.strgrey);
                if(showResults4==false){
                    globalThis.selectSq = 7;
                    setColors7(COLORS2.vid);
                    document.getElementById("later").focus();
                    document.getElementById("third").blur();
                }
                else {
                    globalThis.selectSq = 4;
                    setColors4(COLORS2.vid);
                    document.getElementById("fourth").focus();
                    document.getElementById("third").blur();
                }
                break;
            case 4:
                setColors4(COLORS2.strgrey);
                globalThis.selectSq=7;
                setColors7(COLORS2.vid);
                document.getElementById("later").focus();
                document.getElementById("fourth").blur();
                break;
            case 5:
                setColors5(COLORS2.strgrey);
                globalThis.selectSq=6;
                setColors6(COLORS2.vid);
                document.getElementById("help").focus();
                document.getElementById("50").blur();
                break;
            case 6:
                setColors6(COLORS2.strgrey);
                if(showResults55==false){
                    document.getElementById("help").blur();
                    globalThis.selectSq=5;
                    setColors5(COLORS2.vid);
                    document.getElementById("50").focus();
                }
                else {
                    document.getElementById("help").blur();
                    globalThis.selectSq = 7;
                    setColors7(COLORS2.vid);
                    document.getElementById("later").focus();
                }
                break;
            case 7:
                document.getElementById("later").blur();
                setColors7(COLORS2.strgrey);
                if(showResults==false){
                    if(showResults2==false){
                        globalThis.selectSq = 3;
                        setColors3(COLORS2.vid);
                        document.getElementById("third").focus();
                    }
                    else {
                        globalThis.selectSq = 2;
                        setColors2(COLORS2.vid);
                        document.getElementById("second").focus();
                    }
                }
                else{
                    globalThis.selectSq = 1;
                    setColors1(COLORS2.vid);
                    document.getElementById("first").focus();
                }
                break;
            default:
                console.log('Diva');
                break;
        }
    }
    function handleArrowLeft() {
        if (selectSq != 6 && selectSq != 5) {
            setColors1(COLORS2.strgrey)
            setColors2(COLORS2.strgrey)
            setColors3(COLORS2.strgrey)
            setColors4(COLORS2.strgrey)
            setColors7(COLORS2.strgrey)
            if (showResults55 == false) {
                globalThis.selectSq = 6;
                setColors6(COLORS2.vid)
                if (showResults != false) {
                    document.getElementById("first").blur();
                }
                if (showResults2 != false) {
                    document.getElementById("second").blur();
                }
                if (showResults3 != false) {
                    document.getElementById("third").blur();
                }
                if (showResults4 != false) {
                    document.getElementById("fourth").blur();
                }
                document.getElementById("help").focus();
                document.getElementById("later").blur();
            } else {
                globalThis.selectSq = 5;
                setColors5(COLORS2.vid)
                document.getElementById("50").focus();
                document.getElementById("help").blur();
                document.getElementById("later").blur();
                document.getElementById("first").blur();
                if (showResults != false) {
                    document.getElementById("first").blur();
                }
                if (showResults2 != false) {
                    document.getElementById("second").blur();
                }
                if (showResults3 != false) {
                    document.getElementById("third").blur();
                }
                if (showResults4 != false) {
                    document.getElementById("fourth").blur();
                }
            }
        } else {
            switch (selectSq) {
                case 5:
                    document.getElementById("50").blur();
                    setColors5(COLORS2.strgrey);
                    if(showResults==false){
                        if(showResults2==false){
                            globalThis.selectSq = 3;
                            setColors3(COLORS2.vid);
                            document.getElementById("third").focus();
                        }
                        else {
                            globalThis.selectSq = 2;
                            setColors2(COLORS2.vid);
                            document.getElementById("second").focus();
                        }
                    }
                    else{
                        globalThis.selectSq = 1;
                        setColors1(COLORS2.vid);
                        document.getElementById("first").focus();
                    }
                    break;
                case 6:
                    document.getElementById("help").blur();
                    setColors6(COLORS2.strgrey);
                    if(showResults==false){
                        if(showResults2==false){
                            globalThis.selectSq = 3;
                            setColors3(COLORS2.vid);
                            document.getElementById("third").focus();
                        }
                        else {
                            globalThis.selectSq = 2;
                            setColors2(COLORS2.vid);
                            document.getElementById("second").focus();
                        }
                    }
                    else{
                        globalThis.selectSq = 1;
                        setColors1(COLORS2.vid);
                        document.getElementById("first").focus();
                    }
                    break;
            }
        }
    }
    function handleArrowRight(){
        // @ts-ignore
        if(selectSq>4&&selectSq!=7) {
            setColors5(COLORS2.strgrey)
            setColors6(COLORS2.strgrey)
            document.getElementById("later").blur();
            if (showResults == false) {
                if (showResults2 == false) {
                    // @ts-ignore
                    globalThis.selectSq = 3;
                    setColors3(COLORS2.vid)
                    document.getElementById("help").blur();
                    document.getElementById("later").blur();
                    document.getElementById("third").focus();
                }
                else {
                    globalThis.selectSq = 2;
                    setColors2(COLORS2.vid)
                    document.getElementById("help").blur();
                    document.getElementById("later").blur();
                    document.getElementById("second").focus();
                }
            } else {
                globalThis.selectSq = 1;
                setColors1(COLORS2.vid)
                document.getElementById("help").blur();
                document.getElementById("later").blur();
                document.getElementById("first").focus();
            }
        }
        else{
            switch (selectSq) {
                case 1:
                    document.getElementById("first").blur();
                    setColors1(COLORS2.strgrey)
                    break;
                case 2:
                    document.getElementById("second").blur();
                    setColors2(COLORS2.strgrey)
                    break;
                case 3:
                    document.getElementById("third").blur();
                    setColors3(COLORS2.strgrey)
                    break;
                case 4:
                    document.getElementById("fourth").blur();
                    setColors4(COLORS2.strgrey)
                    break;
                case 7:
                    document.getElementById("later").blur();
                    setColors7(COLORS2.strgrey)
                    break;
            }
            globalThis.selectSq = 6;
            setColors6(COLORS2.vid)
            document.getElementById("help").focus();
        }
    }

    useKey("Enter",handleEnter);
    useKey("Backspace",handleBackspace);
    useKey("ArrowUp",handleArrowUp);
    useKey("ArrowDown",handleArrowDown);
    useKey("ArrowRight",handleArrowRight);
    useKey("ArrowLeft", handleArrowLeft);
    if(indexVar.device=='mobile')
    {
        return (
            <Body className={shani.bodyAnim}>
                {showToast ?
                    <div className={shani.Toast}>
                        <Toast style={{margin: 0}} text="У вас закончились звезды"/></div>
                    : null}

                {showHelp ?
                    <div className={shani.Toast}>
                        <Toast text={help}/></div>
                    : null}

                <div className={ien.fuck1}>
                    <div className={ien.texticon1Mob}>
                        {
                            // @ts-ignore
                            triangle}
                    </div>
                    <img src="/rect.png" className={ien.FirstMobIc}/>
                </div>

                <div className={ien.fuck}>
                    <div className={ien.texticon2Mob}>
                        {// @ts-ignore
                            hearts}
                    </div>
                    <img src="/heart.png" className={ien.SecondMobIc}/>
                </div>
                    <Header
                        back={false}
                        className={lambert.headers}
                    >
                    </Header>
                <div className={ciri.TextBack}>Вопрос</div>
                {showResultsQ ?
                    <div className={lambert.textQue}>{way}</div>
                    : null}
                {showResults ?
                    <MobAn1
                        onClick={() => clickMe(event, answers[0].isCorrect, value, setValue, setVal, mass, setShowResults, setShowResults2, setShowResults3, setShowResults4, setHelp, setShowResults11, setShowResults12, setShowResults14, setBooks, setShowResults10, setShowResults13, setShowResults15,1)}
                        className={shani.rel3}>
                        <Button id={[0].toString()} text={answers[0].answer} className={shani.fckdiv}></Button>
                    </MobAn1>
                    : null}

                {showResults2 ?
                    <MobAn2
                        onClick={() => clickMe(event, answers[1].isCorrect, value, setValue, setVal, mass, setShowResults, setShowResults2, setShowResults3, setShowResults4, setHelp, setShowResults11, setShowResults12, setShowResults14, setBooks, setShowResults10, setShowResults13, setShowResults15,2)}
                        className={shani.rel3}>
                        <Button id={[1].toString()} text={answers[1].answer} className={shani.fckdiv}></Button>
                    </MobAn2>
                    : null}

                {showResults3 ?
                    <MobAn3
                        onClick={() => clickMe(event, answers[2].isCorrect, value, setValue, setVal, mass, setShowResults, setShowResults2, setShowResults3, setShowResults4, setHelp, setShowResults11, setShowResults12, setShowResults14, setBooks, setShowResults10, setShowResults13, setShowResults15,3)}
                        className={shani.rel3}>
                        <Button id={[2].toString()} text={answers[2].answer} className={shani.fckdiv}></Button>
                    </MobAn3>
                    : null}

                {showResults4 ?
                    <MobAn4
                        onClick={() => clickMe(event, answers[3].isCorrect, value, setValue, setVal, mass, setShowResults, setShowResults2, setShowResults3, setShowResults4, setHelp, setShowResults11, setShowResults12, setShowResults14, setBooks, setShowResults10, setShowResults13, setShowResults15,4)}
                        className={shani.rel3}>
                        <Button id={[3].toString()} text={answers[3].answer} className={shani.fckdiv}></Button>
                    </MobAn4>
                    : null}
                {showResults10 ?
                    <div className={shani.threebutt}>
                        {showResults55 ?
                        <FirstButt className={shani.butt1}
                                   onClick={() => MobFith(event, answers.mass, answers, setShowResults, setShowResults2, setShowResults3, setShowResults4, setHelp)}>
                            <Button text="50/50" className={shani.fifthonfifth}></Button>
                        </FirstButt>
                            : null}
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
                    <img className={shani.boy} src={'giphy.gif'} height={200} width={200}/>
                    : null}
                {showResults11 ?
                    <Image className={Books} src={'books.png'} style={{top: '85%'}} height={100} width={100}/>
                    : null}
                {showResults12 ?
                    <div className={shani.Toast2}>
                        <Toast text="Когда человек добежит до препятствия - появится вопрос. Готов(а)?"/></div>
                    : null}
                {showResults14 ?
                    <div className={ciri.fckdivOk} style={{marginTop: 10}}
                         onClick={() => Start()}>
                        <Button text={"Ok"} className={ciri.brOk}></Button>
                    </div>
                    : null}
            </Body>
        );
    } else {
        return (
            <Body >
                {showResults11 ?
                        <Image className={Books} src={'books.png'} height={100} width={100} style={{top: '85%'}}/>
                    : null}
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
                        {triangle}
                    </div>
                    <img src="/rect.png" className={lambert.Firsticon}/>
                    <div className={lambert.texticon2}>
                        {hearts}
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
                <div className={ciri.TextBack}>Вопрос</div>
                {showResults17 ?
                    <div className={imr.textQue}>{way}</div>
                    : null}
                {showResults ?
                    <Answer1 id={"first"} tabIndex={-1}
                        onClick={() => clickMe(event, answers[0].isCorrect, value, setValue, setVal, mass, setShowResults, setShowResults2, setShowResults3, setShowResults4, setHelp, setShowResults11, setShowResults12, setShowResults14, setBooks, setShowResults10, setShowResults13, setShowResults15)}
                        className={ciri.rel3}>
                        <Button id={[0].toString()} text={answers[0].answer} className={ciri.fckdiv}></Button>
                    </Answer1>
                    : null}

                {showResults2 ?
                    <Answer2 id={"second"} tabIndex={-1}
                        onClick={() => clickMe(event, answers[1].isCorrect, value, setValue, setVal, mass, setShowResults, setShowResults2, setShowResults3, setShowResults4, setHelp, setShowResults11, setShowResults12, setShowResults14, setBooks, setShowResults10, setShowResults13, setShowResults15)}
                        className={ciri.rel3}>
                        <Button id={[1].toString()} text={answers[1].answer} className={ciri.fckdiv}></Button>
                    </Answer2>
                    : null}

                {showResults3 ?
                    <Answer3 id={"third"} tabIndex={-1}
                        onClick={() => clickMe(event, answers[2].isCorrect, value, setValue, setVal, mass, setShowResults, setShowResults2, setShowResults3, setShowResults4, setHelp, setShowResults11, setShowResults12, setShowResults14, setBooks, setShowResults10, setShowResults13, setShowResults15)}
                        className={ciri.rel3}>
                        <Button id={[2].toString()} text={answers[2].answer} className={ciri.fckdiv}></Button>
                    </Answer3>
                    : null}

                {showResults4 ?
                    <Answer4 id={"fourth"} tabIndex={-1}
                        onClick={() => clickMe(event, answers[3].isCorrect, value, setValue, setVal, mass, setShowResults, setShowResults2, setShowResults3, setShowResults4, setHelp, setShowResults11, setShowResults12, setShowResults14, setBooks, setShowResults10, setShowResults13, setShowResults15)}
                        className={ciri.rel3}>
                        <Button id={[3].toString()} text={answers[3].answer} className={ciri.fckdiv}></Button>
                    </Answer4>
                    : null}
                {showResults10 ?
                    <div className={ciri.threebutt}>
                        {showResults55 ?
                        <FirstButt id={"50"} tabIndex={-1} className={imr.butt1}
                                   onClick={() => Fith(event, answers.mass, answers, setShowResults, setShowResults2, setShowResults3, setShowResults4, setHelp)}>
                            <Button text="50/50" className={ciri.fifthonfifth}></Button>
                        </FirstButt>
                        : null}
                        <SecondButt id={"help"} tabIndex={-1} className={ciri.butt2} onClick={() => Help(event, setHelp, answers.help)}>
                            <Button text="Помощь" className={ciri.Help}
                                    ></Button>
                        </SecondButt>

                        <ThirdButt id={"later"}  tabIndex={-1} className={ciri.butt3}
                                   onClick={() => Later(event, mass, setVal, setStar, star, setToast, setShowResults, setShowResults2, setShowResults3, setShowResults4, setHelp)}>
                            <div className={ciri.Later}>
                                <Button text="Пропустить за 1" className={ciri.LaterButt}></Button>
                                <img src="/rect.png" className={ciri.romb}/>
                            </div>
                        </ThirdButt>

                    </div>
                    : null}
                {showResults13 ?
                    <img tabIndex={-1} className={ciri.boy} src={'giphy.gif'} height={200} width={200}/>
                    : null}

                {showResults12 ?
                    <div tabIndex={-1} className={ciri.Toast2}>
                        <Toast tabIndex={-1} text="Когда человек добежит до препятствия - появится вопрос. Готов(а)?"/></div>
                    : null}
                {showResults14 ?
                    <div tabIndex={-1} className={ciri.fckdivOk} style={{marginTop: 10}}
                         onClick={() => Start()}>
                        <Button tabIndex={-1} autoFocus text={"Ok"} className={ciri.brOk}></Button>
                    </div>
                    : null}
            </Body>
        );
    }
}

export default Level;
