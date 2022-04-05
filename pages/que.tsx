import {
    Button, detectDevice,
    Header, TextArea, Toast
} from "@sberdevices/plasma-ui";
import lambert from "../styles/Que.module.css";
import imr from "../styles/Que_NM.module.css";
import {useRouter} from "next/router";
import tupik from "../public/sa.json";
import tupik2 from "../public/sa1_2.json";
import {useEffect, useReducer, useRef, useState} from "react";
import {createAssistant} from "@sberdevices/assistant-client";
import {COLORS} from "../public/colors";
import {COLORS2} from "../public/colors";
import styled from "styled-components";
import * as indexVar from './index';

// @ts-ignore
globalThis.selectSq1=1;

const initialize  = (getState:any) => {
    return createAssistant({ getState });
};

export function Que(){
    function Prom(){
        return new Promise(resolve => {
            setTimeout(() => {
                resolve('resolved');
            }, 100);
        });
    }

    function Back() {
        () => router.push('/second');
    }

    async function clickMe(event, isCorrect,value,setValue,setVal,mass,setShowResults,setShowResults2,setShowResults3,setShowResults4,setHelp,selectSq,itr){
        if (isCorrect == true) {
            // @ts-ignore
            switch(selectSq1) {
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
            switch(itr) {
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
            const result = await Prom();
            setColors1(COLORS.strgrey);
            setColors2(COLORS.strgrey);
            setColors3(COLORS.strgrey);
            setColors4(COLORS.strgrey);

            setColors11(COLORS.strgrey);
            setColors12(COLORS.strgrey);
            setColors13(COLORS.strgrey);
            setColors14(COLORS.strgrey);

            setShowResults(true);
            setShowResults2(true);
            setShowResults3(true);
            setShowResults4(true);
            setHelp(false);
            setShowResults55(true);
            mass++

            if(mass==9) {
                router.push('/winQue');
            }
            setVal(mass)
        }
        else {
            // @ts-ignore
            switch(selectSq1) {
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
            switch(itr) {
                case 1:
                    setColors11(COLORS.strred)
                    setColors12(COLORS.strgrey)
                    setColors13(COLORS.strgrey)
                    setColors14(COLORS.strgrey)
                    break;
                case 2:
                    setColors12(COLORS.strred)
                    setColors11(COLORS.strgrey)
                    setColors13(COLORS.strgrey)
                    setColors14(COLORS.strgrey)
                    break;
                case 3:
                    setColors13(COLORS.strred)
                    setColors11(COLORS.strgrey)
                    setColors14(COLORS.strgrey)
                    setColors12(COLORS.strgrey)

                    break;
                case 4:
                    setColors14(COLORS.strred)
                    setColors11(COLORS.strgrey)
                    setColors12(COLORS.strgrey)
                    setColors13(COLORS.strgrey)
                    break;
            }
            --value
            // @ts-ignore
            globalThis.hearts=value;
            setValue(value)
            if (value == 0) {
                setHelp(false);
                // @ts-ignore
                globalThis.hearts=5;
                setShowResults55(true);
                router.push('/fail');
            }
        }
    }

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
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
        if(rand1<isCorr){
            switch(rand1) {
                case 0:
                    // @ts-ignore
                    globalThis.selectSq=1;
                    setColors1(COLORS.secgrey)
                    break;
                case 1:
                    // @ts-ignore
                    globalThis.selectSq=2;
                    setColors2(COLORS.secgrey)
                    break;
                case 2:
                    // @ts-ignore
                    globalThis.selectSq=3;
                    setColors3(COLORS.secgrey)
                    break;
                case 3:
                    // @ts-ignore
                    globalThis.selectSq=4;
                    setColors4(COLORS.secgrey)
                    break;
            }
        }
        else{
            globalThis.selectSq=isCorr;
            switch(isCorr) {
                case 0:
                    // @ts-ignore
                    globalThis.selectSq=1;
                    setColors1(COLORS.secgrey)
                    break;
                case 1:
                    // @ts-ignore
                    globalThis.selectSq=2;
                    setColors2(COLORS.secgrey)
                    break;
                case 2:
                    // @ts-ignore
                    globalThis.selectSq=3;
                    setColors3(COLORS.secgrey)
                    break;
                case 3:
                    // @ts-ignore
                    globalThis.selectSq=4;
                    setColors4(COLORS.secgrey)
                    break;
            }
        }
        setShowResults55(false);
        setColors5(COLORS2.strgrey);
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
                    default:
                        setShowResults4(true);
                        isCorr=i;
                        break;
                }
            }
        }
        rand1=getRandomInt(3);

        while(rand1==isCorr)
        {
            rand1=getRandomInt(3);
        }
        switch(rand1) {
            case 0:
                setShowResults(true);
                // @ts-ignore
                globalThis.selectSq1=1;
                document.getElementById("first").focus()
                break;
            case 1:
                setShowResults2(true);
                // @ts-ignore
                globalThis.selectSq1=2;
                document.getElementById("second").focus()
                break;
            case 2:
                setShowResults3(true);
                // @ts-ignore
                globalThis.selectSq1=3;
                document.getElementById("third").focus()
                break;
            case 3:
                setShowResults4(true);
                // @ts-ignore
                globalThis.selectSq1=4;
                document.getElementById("fourth").focus()
                break;
        }
        document.getElementById("50").blur();

        setShowResults55(false);
        setColors5(COLORS.strgrey);
    }

    function Later(event,mass,setVal,setStar,star,setToast,setShowResults,setShowResults2,setShowResults3,setShowResults4,setHelp){
        if(star>0){
            setShowResults(true);
            setShowResults2(true);
            setShowResults3(true);
            setShowResults4(true);
            setHelp(false)
            mass++
            if(mass==9){
                router.push('/winQue');
                setStar(5);
            }
            else {
                setVal(mass);
                star--;
                globalThis.triangle = star;
                setStar(star);
                setShowResults55(true)
                globalThis.selectSq1 = 1;
                setColors1(COLORS.strgrey);
                setColors7(COLORS.strgrey);
                setColors2(COLORS.strgrey);
                setColors3(COLORS.strgrey);
                setColors4(COLORS.strgrey);
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

    const router=useRouter();
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


    const [value, setValue] = useState(
        // @ts-ignore
        hearts);
    const [star,setStar]=useState(
        // @ts-ignore
        triangle);
    const [mass=0, setVal] = useState(0);
    const [answer, setAnswer]=useState("");

    const assistantRef = useRef<ReturnType<typeof createAssistant>>();

    const [showResults, setShowResults] = useState(true);
    const [showResults2, setShowResults2] = useState(true);
    const [showResults3, setShowResults3] = useState(true);
    const [showResults4, setShowResults4] = useState(true);
    const [showResults55, setShowResults55] = useState(true); //50\50

    const [showToast,setToast]=useState(false);
    const [showHelp, setHelp]=useState(false);

    const [colors1, setColors1]= useState(COLORS.strgrey); //no-mob-ans
    const [colors2, setColors2]= useState(COLORS.strgrey);
    const [colors3, setColors3]= useState(COLORS.strgrey);
    const [colors4, setColors4]= useState(COLORS.strgrey);

    const [colors11, setColors11]= useState(COLORS.strgrey);
    const [colors12, setColors12]= useState(COLORS.strgrey);
    const [colors13, setColors13]= useState(COLORS.strgrey);
    const [colors14, setColors14]= useState(COLORS.strgrey);

    const [colors5, setColors5]= useState(COLORS.strgrey); //no-mobs 50\50 colors
    const [colors6, setColors6]= useState(COLORS.strgrey);
    const [colors7, setColors7]= useState(COLORS.strgrey);

    let way,answers,help;

    const Answer1 = styled.div`
      background-color: ${ colors1 };
      &:focus {
        background-color: ${COLORS.secgrey};
      }
    `;

    const Answer2 = styled.div`
      background-color: ${ colors2 };
      &:focus {
        background-color: ${COLORS.secgrey};
      }
    `;

    const Answer3 = styled.div`
      background-color: ${ colors3 };
      &:focus {
        background-color: ${COLORS.secgrey};
      }
    `;

    const Answer4 = styled.div`
      background-color: ${ colors4 };
      &:focus {
        background-color: ${COLORS.secgrey};
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

    const FirstButt = styled.div`
      background-color: ${ colors5 };
      &:focus {
        background-color: ${COLORS.secgrey};
      }
    `;

    const SecondButt = styled.div`
      background-color: ${ colors6 };
      &:focus {
        background-color: ${COLORS.secgrey};
      }
    `;

    const ThirdButt = styled.div`
      background-color: ${ colors7 };
      &:focus {
        background-color: ${COLORS.secgrey};
      }
    `;
    // @ts-ignore
    if(level==1){
        // @ts-ignore
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
    }}
    else{
        // @ts-ignore
        switch (items[index]){
            case "Путешествия":
                way=tupik2[0].travel[mass].question;
                answers=tupik2[0].travel[mass].answerOptions;
                help=tupik2[0].travel[mass].help;
                break;
            case "Животные":
                way=tupik2[0].animals[mass].question;
                answers=tupik2[0].animals[mass].answerOptions;
                help=tupik2[0].animals[mass].help;
                break;
        }
    }
    // @ts-ignore
    if (indexVar.device == "mobile") {
    return (
        <div className={lambert.body}>
            { showToast?
                <div className={lambert.Toast}>
                    <Toast text="У вас закончились звезды" /> </div>
                :null}

            { showHelp?
                <div className={lambert.Toast}>
                    <Toast text={help} /> </div>
                :null}

            <div className={lambert.TextBackQue}>Вопрос</div>

            <div className={lambert.headers}>
                <Header
                    back={true}
                    onBackClick={()=>router.push('/second')}
                >
                </Header>
            </div>

            <div className={lambert.fuck}>
                <div className={lambert.texticon1}>

                    { // @ts-ignore
                        triangle}
                </div>
                <img src="/rect.png" className={lambert.Firsticon}/>
                <div className={lambert.texticon2}>
                    {// @ts-ignore
                        hearts}
                </div>
                <img src="/heart.png" className={lambert.Secondicon}/>
            </div>

            <div className={lambert.textQue}>{way}</div>

            {showResults ?
                <MobAn1 onClick={() => clickMe(event, answers[0].isCorrect, value, setValue, setVal, mass,setShowResults,setShowResults2,setShowResults3,setShowResults4,setHelp,
                    // @ts-ignore
                    selectSq1,1)}
                     className={lambert.rel3}>
                    <Button id={[0].toString()} text={answers[0].answer} className={lambert.fckdiv}></Button>
                </MobAn1>
                : null}

            {showResults2 ?
                <MobAn2 onClick={() => clickMe(event,answers[1].isCorrect,value,setValue,setVal,mass,setShowResults,setShowResults2,setShowResults3,setShowResults4,setHelp,
                    // @ts-ignore
                    selectSq1,2)} className={lambert.rel3}>
                    <Button id={[1].toString()} text={answers[1].answer} className={lambert.fckdiv} ></Button>
                </MobAn2>
                : null}

            {showResults3 ?
                <MobAn3 onClick={() => clickMe(event,answers[2].isCorrect,value,setValue,setVal,mass,setShowResults,setShowResults2,setShowResults3,setShowResults4,setHelp,
                    // @ts-ignore
                    selectSq1,3)} className={lambert.rel3}>
                    <Button id={[2].toString()}  text={answers[2].answer} className={lambert.fckdiv} ></Button>
                </MobAn3>
                : null}

            {showResults4 ?
                <MobAn4 onClick={() => clickMe(event,answers[3].isCorrect,value,setValue,setVal,mass,setShowResults,setShowResults2,setShowResults3,setShowResults4,setHelp,
                    // @ts-ignore
                    selectSq1,4)} className={lambert.rel3}>
                    <Button id={[3].toString()}  text={answers[3].answer} className={lambert.fckdiv} ></Button>
                </MobAn4>
                : null}

            <div className={lambert.threebutt}>
                {showResults55 ?
                <div className={lambert.butt1} onClick={() => MobFith(event,answers.mass, answers,setShowResults,setShowResults2,setShowResults3,setShowResults4,setHelp)}>
                    <Button text="50/50" className={lambert.fifthonfifth} ></Button>
                </div> :null}

                <div className={lambert.butt2}>
                    <Button text="Помощь" className={lambert.Help} onClick={() => Help(event,setHelp,answers.help)}></Button>
                </div>

                <div className={lambert.butt3} onClick={() => Later(event,mass,setVal,setStar,star,setToast,setShowResults,setShowResults2,setShowResults3,setShowResults4,setHelp)}>
                    <div className={lambert.rel4}>
                        <Button text="Пропустить за 1" className={lambert.Later}></Button>
                        <img src="/rect.png" className={lambert.romb}/>
                    </div>
                </div>
            </div>
        </div>
    );}
    else{
        // @ts-ignore
        function handleEnter(){
            switch (
                // @ts-ignore
                selectSq1) {
                case 1:
                    clickMe(event,answers[0].isCorrect,value,setValue,setVal,mass,setShowResults,setShowResults2,setShowResults3,setShowResults4,setHelp,
                        // @ts-ignore
                        selectSq1,0)
                    break;
                case 2:
                    clickMe(event,answers[1].isCorrect,value,setValue,setVal,mass,setShowResults,setShowResults2,setShowResults3,setShowResults4,setHelp,
                        // @ts-ignore
                        selectSq1,0)
                    break;
                case 3:
                    clickMe(event,answers[2].isCorrect,value,setValue,setVal,mass,setShowResults,setShowResults2,setShowResults3,setShowResults4,setHelp,
                        // @ts-ignore
                        selectSq1,0)
                    break;
                case 4:
                    clickMe(event,answers[3].isCorrect,value,setValue,setVal,mass,setShowResults,setShowResults2,setShowResults3,setShowResults4,setHelp,
                        // @ts-ignore
                        selectSq1,0)
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
                default:
                    console.log('Fara');
                    break;
            }
        }
        // @ts-ignore
        function handleBackspace(){
            // @ts-ignore
            globalThis.selectSq1=1;
            // @ts-ignore
            globalThis.selectSq2=1;
            router.push('/second');
        }
        // @ts-ignore
        function handleArrowUp(){
            // @ts-ignore
            switch (selectSq1) {
                case 6:
                    if(showResults55==false){
                        document.getElementById("help").focus();
                        setColors6(COLORS.secgrey);
                    }
                    else {
                        // @ts-ignore
                        globalThis.selectSq1 = 5;
                        document.getElementById("50").focus();
                        document.getElementById("help").blur();
                    }
                    break;
                case 7:
                    if(showResults4==false){
                        if(showResults3==false){
                            // @ts-ignore
                            globalThis.selectSq1=2;
                            document.getElementById("second").focus();
                            document.getElementById("later").blur();
                        }
                        else{
                            // @ts-ignore
                            globalThis.selectSq1=3;
                            document.getElementById("third").focus();
                            document.getElementById("later").blur();
                        }
                    }
                    else {
                        // @ts-ignore
                        globalThis.selectSq1 = 4;
                        document.getElementById("fourth").focus();
                        document.getElementById("later").blur();
                    }
                    break;
                case 4:
                    if(showResults3==false){
                        if(showResults2==false){
                            // @ts-ignore
                            globalThis.selectSq1=1;
                            document.getElementById("first").focus();
                            document.getElementById("fourth").blur();
                        }
                        else{
                            // @ts-ignore
                            globalThis.selectSq1=2;
                            document.getElementById("second").focus();
                            document.getElementById("fourth").blur();
                        }
                    }
                    else {
                        // @ts-ignore
                        globalThis.selectSq1 = 3;
                        document.getElementById("third").focus();
                        document.getElementById("fourth").blur();
                    }
                    break;
                case 3:
                    if(showResults2==false){
                        if(showResults==false){
                        }
                        else{
                            // @ts-ignore
                            globalThis.selectSq1=1;
                            document.getElementById("first").focus();
                            document.getElementById("third").blur();
                        }
                    }
                    else {
                        // @ts-ignore
                        globalThis.selectSq1 = 2;
                        document.getElementById("second").focus();
                        document.getElementById("third").blur();
                    }
                    break;
                case 2:
                    if(showResults==false){
                    }
                    else {
                        // @ts-ignore
                        globalThis.selectSq1 = 1;
                        document.getElementById("first").focus();
                        document.getElementById("second").blur();
                    }
                    break;
                default:
                    console.log('Ana');
                    break;
            }
        }
        // @ts-ignore
        function handleArrowDown(){
            // @ts-ignore
            switch (selectSq1) {
                case 1:
                    if(showResults2==false){
                        if(showResults3==false){
                            // @ts-ignore
                            globalThis.selectSq1=4;
                            document.getElementById("fourth").focus();
                            document.getElementById("first").blur();
                        }
                        else{
                            // @ts-ignore
                            globalThis.selectSq1=3;
                            document.getElementById("third").focus();
                            document.getElementById("first").blur();
                        }
                    }
                    else {
                        // @ts-ignore
                        globalThis.selectSq1 = 2;
                        document.getElementById("second").focus();
                        document.getElementById("first").blur();
                    }
                    break;
                case 2:
                    if(showResults3==false){
                        if(showResults4==false){
                            // @ts-ignore
                            globalThis.selectSq1=1;
                            document.getElementById("first").focus();
                            document.getElementById("second").blur();
                        }
                        else{
                            // @ts-ignore
                            globalThis.selectSq1=4;
                            document.getElementById("fourth").focus();
                            document.getElementById("second").blur();
                        }
                    }
                    else {
                        // @ts-ignore
                        globalThis.selectSq1 = 3;
                        document.getElementById("third").focus();
                        document.getElementById("second").blur();
                    }
                    break;
                case 3:
                    if(showResults4==false){
                        // @ts-ignore
                        globalThis.selectSq1 = 7;
                        document.getElementById("later").focus();
                        document.getElementById("third").blur();
                    }
                    else {
                        // @ts-ignore
                        globalThis.selectSq1 = 4;
                        document.getElementById("fourth").focus();
                        document.getElementById("third").blur();
                    }
                    break;
                case 4:
                    // @ts-ignore
                    globalThis.selectSq1=7;
                    document.getElementById("later").focus();
                    document.getElementById("fourth").blur();
                    break;
                case 5:
                    // @ts-ignore
                    globalThis.selectSq1=6;
                    document.getElementById("help").focus();
                    document.getElementById("50").blur();
                    break;
                default:
                    console.log('Diva');
                    break;
            }
            // @ts-ignore
            console.log(selectSq1);
        }
        // @ts-ignore
        function handleArrowLeft(){
            // @ts-ignore
            if(selectSq1!=6&&selectSq1!=5) {
                if(showResults55==false){
                    globalThis.selectSq1 = 6;
                    if(showResults!=false){
                        document.getElementById("first").blur();
                    }
                    if(showResults2!=false){
                        document.getElementById("second").blur();
                    }
                    if(showResults3!=false){
                        document.getElementById("third").blur();
                    }
                    if(showResults4!=false){
                        document.getElementById("fourth").blur();
                    }
                    document.getElementById("help").focus();
                    document.getElementById("later").blur();
                }
                else {
                    globalThis.selectSq1 = 5;
                    document.getElementById("50").focus();
                    document.getElementById("help").blur();
                    document.getElementById("later").blur();
                    if(showResults!=false){
                        document.getElementById("first").blur();
                    }
                    if(showResults2!=false){
                        document.getElementById("second").blur();
                    }
                    if(showResults3!=false){
                        document.getElementById("third").blur();
                    }
                    if(showResults4!=false){
                        document.getElementById("fourth").blur();
                    }
                }
            }
        }
        // @ts-ignore
        function handleArrowRight(){
            // @ts-ignore
            if(selectSq1>4&&selectSq1!=7) {
                if (showResults == false) {
                    if (showResults2 == false) {
                        // @ts-ignore
                        globalThis.selectSq1 = 3;
                        document.getElementById("help").blur();
                        document.getElementById("later").blur();
                        document.getElementById("third").focus();
                    }
                    else {
                        globalThis.selectSq1 = 2;
                        document.getElementById("help").blur();
                        document.getElementById("later").blur();
                        document.getElementById("second").focus();
                    }
                } else {
                    globalThis.selectSq1 = 1;
                    document.getElementById("help").blur();
                    document.getElementById("later").blur();
                    document.getElementById("first").focus();
                }
            }
        }
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useKey("Enter",handleEnter);
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useKey("Backspace",handleBackspace);
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useKey("ArrowUp",handleArrowUp);
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useKey("ArrowDown",handleArrowDown);
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useKey("ArrowRight",handleArrowRight);
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useKey("ArrowLeft", handleArrowLeft);
        return(
            <div  tabIndex={-1} className={lambert.body}>
                <div  tabIndex={-1} className={imr.c}>
                    <img  tabIndex={-1} src="/2c.png" width={1400} height={1200}/>
                </div>
                { showToast?
                    <div  tabIndex={-1} className={imr.Toast}>
                        <Toast text="У вас закончились звезды" /> </div>
                    :null}

                { showHelp?
                    <div  tabIndex={-1} className={imr.Toast}>
                        <Toast text={help} /> </div>
                    :null}

                <div  tabIndex={-1} className={imr.TextBackQue}>Вопрос</div>

                <div  tabIndex={-1} className={lambert.headers}>
                    <Header  tabIndex={-1}
                        back={true}
                        onBackClick={() => router.push('/second')}
                    >
                    </Header>
                </div>

                <div tabIndex={-1} className={lambert.fuck}>
                    <div tabIndex={-1} className={lambert.texticon1}>
                        {// @ts-ignore
                            triangle}
                    </div>
                    <img  tabIndex={-1} src="/rect.png" className={lambert.Firsticon}/>
                    <div tabIndex={-1} className={lambert.texticon2}>
                        {// @ts-ignore
                            hearts}
                    </div>
                    <img  tabIndex={-1} src="/heart.png" className={lambert.Secondicon}/>
                </div>

                <div  tabIndex={-1} className={imr.textQue}>{way}</div>

                {showResults ?
                    <Answer1 id="first" tabIndex={-1} onClick={() => clickMe(event, answers[0].isCorrect, value, setValue, setVal, mass,setShowResults,setShowResults2,setShowResults3,setShowResults4,setHelp,
                        // @ts-ignore
                        selectSq1,0)}
                         className={imr.rel3}>
                        <Button  tabIndex={-1} id={[0].toString()} text={answers[0].answer} className={imr.fckdiv}></Button>
                    </Answer1>
                    : null}

                {showResults2 ?
                    <Answer2 id="second" tabIndex={-1} onClick={() => clickMe(event,answers[1].isCorrect,value,setValue,setVal,mass,setShowResults,setShowResults2,setShowResults3,setShowResults4,setHelp,
                        // @ts-ignore
                        selectSq1,0)} className={imr.rel3}>
                        <Button  tabIndex={-1} id={[1].toString()} text={answers[1].answer} className={imr.fckdiv} ></Button>
                    </Answer2>
                    : null}

                {showResults3 ?
                    <Answer3 id="third" tabIndex={-1} onClick={() => clickMe(event,answers[2].isCorrect,value,setValue,setVal,mass,setShowResults,setShowResults2,setShowResults3,setShowResults4,setHelp,
                        // @ts-ignore
                        selectSq1,0)} className={imr.rel3}>
                        <Button  tabIndex={-1} id={[2].toString()}  text={answers[2].answer} className={imr.fckdiv} ></Button>
                    </Answer3>
                    : null}

                {showResults4 ?
                    <Answer4 id="fourth" tabIndex={-1} onClick={() => clickMe(event,answers[3].isCorrect,value,setValue,setVal,mass,setShowResults,setShowResults2,setShowResults3,setShowResults4,setHelp,
                        // @ts-ignore
                        selectSq1,0)} className={imr.rel3}>
                        <Button  tabIndex={-1} id={[3].toString()}  text={answers[3].answer} className={imr.fckdiv} ></Button>
                    </Answer4>
                    : null}

                <div className={imr.threebutt}  tabIndex={-1}>
                    {showResults55 ?
                    <FirstButt id="50"  tabIndex={-1} className={imr.butt1} onClick={() => Fith(event,answers.mass, answers,setShowResults,setShowResults2,setShowResults3,setShowResults4,setHelp)}>
                        <Button  tabIndex={-1} text="50/50" className={imr.fifthonfifth} ></Button>
                    </FirstButt>
                    : null}
                    <SecondButt id="help"  tabIndex={-1} className={imr.butt2}>
                        <Button  tabIndex={-1} text="Помощь" className={imr.Help} onClick={() => Help(event,setHelp,answers.help)}></Button>
                    </SecondButt>

                    <ThirdButt id="later"  tabIndex={-1} className={imr.butt3} onClick={() => Later(event,mass,setVal,setStar,star,setToast,setShowResults,setShowResults2,setShowResults3,setShowResults4,setHelp)}>
                        <div  tabIndex={-1} className={imr.Later}>
                            <Button  tabIndex={-1} text="Пропустить за 1" className={imr.LaterButt}></Button>
                            <img  tabIndex={-1} src="/rect.png" className={imr.romb}/>
                        </div>
                    </ThirdButt>

                </div>
            </div>
        );
    }

}

export default Que;
