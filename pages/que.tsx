import {
    Button, detectDevice,
    Header, TextArea, Toast
} from "@sberdevices/plasma-ui";
import lambert from "../styles/Que.module.css";
import imr from "../styles/Que_NM.module.css";
import {router} from "next/client";
import tupik from "../public/sa.json";
import {useEffect, useReducer, useRef, useState} from "react";
import {reducer} from "./store";
import {createAssistant, createSmartappDebugger} from "@sberdevices/assistant-client";
import Image from "next/image";

const initialize  = (getState:any) => {
    return createAssistant({ getState });
};

export function Que(){
    const [value, setValue] = useState(score.hearts);
    const [star,setStar]=useState(score.triangle);
    const [mass=0, setVal] = useState(0);
    const [answer, setAnswer]=useState("");

    const assistantRef = useRef<ReturnType<typeof createAssistant>>();

    const [appState, dispatch] = useReducer(reducer, {answer_st: []});

    const [showResults, setShowResults] = useState(true);
    const [showResults2, setShowResults2] = useState(true);
    const [showResults3, setShowResults3] = useState(true);
    const [showResults4, setShowResults4] = useState(true);
    const [showToast,setToast]=useState(false);
    const [showHelp, setHelp]=useState(false);

    device.str=4;
    if (typeof window !== 'undefined' && device.str===4) {
        window.addEventListener('keyup', (event) => {
            switch (event.code) {
                case 'Backspace':
                    router.push('/second');
                    break;
            }
        });
    }
    useEffect(() => {
        assistantRef.current = initialize(() => {});
        assistantRef.current.on('data', ({ action }: any) => {
            if(action){
                dispatch(action);
            }
        });
    }, []);

    let way,answers,help;
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
    if (device.device == "mobile") {
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
                    onBackClick={() => router.push('/second')}
                >
                </Header>
            </div>

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

            <form
                onSubmit={(event)=>{
                    event.preventDefault();
                    dispatch({type:'answer',answer});
                    setAnswer('');
                }}
            >
                <input value={answer}
                       type={"text"}
                       onChange={({target: {value}}) => setAnswer(value)}
                       required={true}
                       autoFocus={true}
                />
            </form>

            <div className={lambert.textQue}>{way}</div>

            {showResults ?
                <div onClick={() => clickMe(event, answers[0].isCorrect, value, setValue, setVal, mass,setShowResults,setShowResults2,setShowResults3,setShowResults4,setHelp)}
                     className={lambert.rel3}>
                    <Button id={[0].toString()} text={answers[0].answer} className={lambert.fckdiv}></Button>
                </div>
                : null}

            {showResults2 ?
                <div onClick={() => clickMe(event,answers[1].isCorrect,value,setValue,setVal,mass,setShowResults,setShowResults2,setShowResults3,setShowResults4,setHelp)} className={lambert.rel3}>
                    <Button id={[1].toString()} text={answers[1].answer} className={lambert.fckdiv} ></Button>
                </div>
                : null}

            {showResults3 ?
                <div onClick={() => clickMe(event,answers[2].isCorrect,value,setValue,setVal,mass,setShowResults,setShowResults2,setShowResults3,setShowResults4,setHelp)} className={lambert.rel3}>
                    <Button id={[2].toString()}  text={answers[2].answer} className={lambert.fckdiv} ></Button>
                </div>
                : null}

            {showResults4 ?
                <div onClick={() => clickMe(event,answers[3].isCorrect,value,setValue,setVal,mass,setShowResults,setShowResults2,setShowResults3,setShowResults4,setHelp)} className={lambert.rel3}>
                    <Button id={[3].toString()}  text={answers[3].answer} className={lambert.fckdiv} ></Button>
                </div>
                : null}

            <div className={lambert.threebutt}>
                <div className={lambert.butt1} onClick={() => Fith(event,answers.mass, answers,setShowResults,setShowResults2,setShowResults3,setShowResults4,setHelp)}>
                    <Button text="50/50" className={lambert.fifthonfifth} ></Button>
                </div>

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
        return(
            <div className={lambert.body}>
                <div className={imr.c}>
                    <Image src="/2c.png" width={1400} height={1200}/>
                </div>
                { showToast?
                    <div className={imr.Toast}>
                        <Toast text="У вас закончились звезды" /> </div>
                    :null}

                { showHelp?
                    <div className={imr.Toast}>
                        <Toast text={help} /> </div>
                    :null}

                <div className={imr.TextBackQue}>Вопрос</div>

                <div className={lambert.headers}>
                    <Header
                        back={true}
                        onBackClick={() => router.push('/second')}
                    >
                    </Header>
                </div>

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

                <form
                    onSubmit={(event)=>{
                        event.preventDefault();
                        dispatch({type:'answer',answer});
                        setAnswer('');
                    }}
                >
                    <input value={answer}
                           type={"text"}
                           onChange={({target: {value}}) => setAnswer(value)}
                           required={true}
                           autoFocus={true}
                    />
                </form>

                <div className={imr.textQue}>{way}</div>

                {showResults ?
                    <div onClick={() => clickMe(event, answers[0].isCorrect, value, setValue, setVal, mass,setShowResults,setShowResults2,setShowResults3,setShowResults4,setHelp)}
                         className={imr.rel3}>
                        <Button id={[0].toString()} text={answers[0].answer} className={imr.fckdiv}></Button>
                    </div>
                    : null}

                {showResults2 ?
                    <div onClick={() => clickMe(event,answers[1].isCorrect,value,setValue,setVal,mass,setShowResults,setShowResults2,setShowResults3,setShowResults4,setHelp)} className={imr.rel3}>
                        <Button id={[1].toString()} text={answers[1].answer} className={imr.fckdiv} ></Button>
                    </div>
                    : null}

                {showResults3 ?
                    <div onClick={() => clickMe(event,answers[2].isCorrect,value,setValue,setVal,mass,setShowResults,setShowResults2,setShowResults3,setShowResults4,setHelp)} className={imr.rel3}>
                        <Button id={[2].toString()}  text={answers[2].answer} className={imr.fckdiv} ></Button>
                    </div>
                    : null}

                {showResults4 ?
                    <div onClick={() => clickMe(event,answers[3].isCorrect,value,setValue,setVal,mass,setShowResults,setShowResults2,setShowResults3,setShowResults4,setHelp)} className={imr.rel3}>
                        <Button id={[3].toString()}  text={answers[3].answer} className={imr.fckdiv} ></Button>
                    </div>
                    : null}

                <div className={imr.threebutt}>
                    <div className={imr.butt1} onClick={() => Fith(event,answers.mass, answers,setShowResults,setShowResults2,setShowResults3,setShowResults4,setHelp)}>
                        <Button text="50/50" className={imr.fifthonfifth} ></Button>
                    </div>

                    <div className={imr.butt2}>
                        <Button text="Помощь" className={imr.Help} onClick={() => Help(event,setHelp,answers.help)}></Button>
                    </div>

                    <div className={imr.butt3} onClick={() => Later(event,mass,setVal,setStar,star,setToast,setShowResults,setShowResults2,setShowResults3,setShowResults4,setHelp)}>
                        <div className={imr.Later}>
                            <Button text="Пропустить за 1" className={imr.LaterButt}></Button>
                            <img src="/rect.png" className={imr.romb}/>
                        </div>
                    </div>

                </div>
            </div>
        );
    }

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

function clickMe(event, isCorrect,value,setValue,setVal,mass,setShowResults,setShowResults2,setShowResults3,setShowResults4,setHelp){
    if (isCorrect == true) {
        setShowResults(true);
        setShowResults2(true);
        setShowResults3(true);
        setShowResults4(true);
        setHelp(false);

        mass++

        if(mass==9) {
            router.push('/second');
        }
        setVal(mass)
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

export default Que;
