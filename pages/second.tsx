import {
    detectDevice,
    Header, Toast
} from "@sberdevices/plasma-ui";
import triss from "../styles/Second.module.css";
import fri from "../styles/Second_NM.module.css";
import {router} from "next/client";
import Image from "next/image";
import {COLORS} from "./colors";
import {useState} from "react";
import styled from "styled-components";
import imr from "../styles/Que_NM.module.css";
import {useKey} from "./index";

function Back(){
    router.push('/level');
}

function Enter(){
    router.push('/que');
}

function Fail(setHelp){
    setHelp(true);
    setTimeout(function (){setHelp(false)},2000);
}
let selectSq=1;

export function Second(){
    device.str=3;
    const [colors1, setColors1]= useState(COLORS.strred);
    const [colors2, setColors2]= useState(COLORS.strgrey);
    const [colors3, setColors3]= useState(COLORS.strgrey);
    const [colors4, setColors4]= useState(COLORS.strgrey);
    const [colors5, setColors5]= useState(COLORS.strgrey);
    const [colors6, setColors6]= useState(COLORS.strgrey);

    const [showHelp, setHelp]=useState(false);

    const Square1 = styled.div`
      position: absolute;
      width: 219px;
      height: 134px;
     
      border-radius: 13px;
      background-color: ${ colors1 };
      backdrop-filter: blur(1px);
    `;
    const Square2 = styled.div`
      position: absolute;
      width: 219px;
      height: 134px;

      border-radius: 13px;
      background-color: ${ colors2 };
      backdrop-filter: blur(1px);
    `;
    const Square3 = styled.div`
      position: absolute;
      width: 219px;
      height: 134px;

      border-radius: 13px;
      background-color: ${ colors3 };
      backdrop-filter: blur(1px);
    `;
    const Square4 = styled.div`
      position: absolute;
      width: 219px;
      height: 134px;

      border-radius: 13px;
      background-color: ${ colors4 };
      backdrop-filter: blur(1px);
    `;
    const Square5 = styled.div`
      position: absolute;
      width: 219px;
      height: 134px;

      border-radius: 13px;
      background-color: ${ colors5 };
      backdrop-filter: blur(1px);
    `;
    const Square6 = styled.div`
      position: absolute;
      width: 219px;
      height: 134px;

      border-radius: 13px;
      background-color: ${ colors6 };
      backdrop-filter: blur(1px);
    `;
    if (device.device == "mobile") {
        return (
            <div className={triss.body}>
                <div className={triss.TextBack}>Сложность</div>
                <div className={triss.BackHead}>
                    <Header
                        back={true}
                        onBackClick={() => router.push('/level')}
                    >
                    </Header>
                </div>
                <div className={triss.fuck}>
                    <div className={triss.texticon1}>
                        {score.triangle}
                    </div>
                    <img src="/rect.png" className={triss.Firsticon}/>
                    <div className={triss.texticon2}>
                        {score.hearts}
                    </div>
                    <img src="/heart.png" className={triss.Secondicon}/>
                </div>
                <div className={triss.rel}>
                    <div className={triss.square1} onClick={() => router.push('/que')}>
                        <Image src="/fsquare.png" width={118} height={118}/>
                        <div className={triss.text1}>1</div>
                    </div>
                    <div className={triss.square2}>
                        <Image src="/fsquare.png" width={118} height={118}/>
                        <div className={triss.text2}>2</div>
                    </div>
                    <div className={triss.square3}>
                        <Image src="/fsquare.png" width={118} height={118}/>
                        <div className={triss.text3}>3</div>
                    </div>
                    <div className={triss.square4}>
                        <Image src="/fsquare.png" width={118} height={118}/>
                        <div className={triss.text4}>4</div>
                    </div>
                    <div className={triss.square5}>
                        <Image src="/fsquare.png" width={118} height={118}/>
                        <div className={triss.text5}>5</div>
                    </div>
                    <div className={triss.square6}>
                        <Image src="/fsquare.png" width={118} height={118}/>
                        <div className={triss.text6}>6</div>
                    </div>
                </div>
            </div>
        );
    }
    else{
        function handleEnter(){
            if(selectSq===1){
                Enter();
            }
            else {
                setHelp(true);
                setTimeout(function (){setHelp(false)},2000);
            }
        }
        function handleBackspace(){
            Back();
        }
        function handleArrowUp(){
            switch (selectSq) {
                case 3:
                    selectSq=1;
                    setColors1(COLORS.strred);
                    setColors3(COLORS.strgrey);
                    break;
                case 4:
                    selectSq=2;
                    setColors2(COLORS.strred);
                    setColors4(COLORS.strgrey);
                    break;
                case 5:
                    selectSq=3;
                    setColors3(COLORS.strred);
                    setColors5(COLORS.strgrey);
                    break;
                case 6:
                    selectSq=4;
                    setColors4(COLORS.strred);
                    setColors6(COLORS.strgrey);
                    break;
                default:
                    console.log('Genga');
                    break;
            }
        }
        function handleArrowDown(){
            switch (selectSq) {
                case 1:
                    selectSq=3;
                    setColors3(COLORS.strred);
                    setColors1(COLORS.strgrey);
                    break;
                case 2:
                    selectSq=4;
                    setColors4(COLORS.strred);
                    setColors2(COLORS.strgrey);
                    break;
                case 3:
                    selectSq=5;
                    setColors5(COLORS.strred);
                    setColors3(COLORS.strgrey);
                    break;
                case 4:
                    selectSq=6;
                    setColors6(COLORS.strred);
                    setColors4(COLORS.strgrey);
                    break;
                default:
                    console.log('Hanzo');
                    break;
            }
        }
        function handleArrowRight(){
            switch (selectSq) {
                case 1:
                    selectSq=2;
                    setColors2(COLORS.strred);
                    setColors1(COLORS.strgrey);
                    break;
                case 3:
                    selectSq=4;
                    setColors4(COLORS.strred);
                    setColors3(COLORS.strgrey);
                    break;
                case 5:
                    selectSq=6;
                    setColors6(COLORS.strred);
                    setColors5(COLORS.strgrey);
                    break;
                default:
                    console.log('Hanzo');
                    break;
            }
        }
        function handleArrowLeft(){
            switch (selectSq) {
                case 2:
                    selectSq=1;
                    setColors1(COLORS.strred);
                    setColors2(COLORS.strgrey);
                    break;
                case 4:
                    selectSq=3;
                    setColors3(COLORS.strred);
                    setColors4(COLORS.strgrey);
                    break;
                case 6:
                    selectSq=5;
                    setColors5(COLORS.strred);
                    setColors6(COLORS.strgrey);
                    break;
                default:
                    console.log('Hanzo');
                    break;
            }
        }
        useKey("Enter",handleEnter);
        useKey("Backspace",handleBackspace);
        useKey("ArrowUp",handleArrowUp);
        useKey("ArrowDown",handleArrowDown);
        useKey("ArrowRight",handleArrowRight);
        useKey("ArrowLeft", handleArrowLeft);
        return(
            <div className={triss.body}>
                { showHelp?
                    <div className={imr.Toast}>
                        <Toast text={"Будет в следующей версии"} /> </div>
                    :null}
                <div className={fri.TextBack}>Уровень</div>
                <div className={triss.BackHead}>
                    <Header
                        back={true}
                        onBackClick={() => router.push('/level')}
                    >
                    </Header>
                </div>
                <div className={triss.fuck}>
                    <div className={triss.texticon1}>
                        {score.triangle}
                    </div>
                    <img src="/rect.png" className={triss.Firsticon}/>
                    <div className={triss.texticon2}>
                        {score.hearts}
                    </div>
                    <img src="/heart.png" className={triss.Secondicon}/>
                </div>
                <div className={fri.rel}>
                    <Square1 className={fri.square1}>
                    <div onClick={Enter}>
                        <div className={fri.text1}>1</div>
                    </div>
                    </Square1>
                    <Square2 className={fri.square2}  onClick={()=>Fail(setHelp)}>
                        <div className={fri.text2}>2</div>
                    </Square2>
                    <Square3 className={fri.square3}  onClick={()=>Fail(setHelp)}>
                        <div className={fri.text3}>3</div>
                    </Square3>
                    <Square4 className={fri.square4}  onClick={()=>Fail(setHelp)}>
                        <div className={fri.text4}>4</div>
                    </Square4>
                    <Square5 className={fri.square5} onClick={()=>Fail(setHelp)}>
                        <div className={fri.text5}>5</div>
                    </Square5>
                    <Square6 className={fri.square6}  onClick={()=>Fail(setHelp)}>
                        <div className={fri.text6}>6</div>
                    </Square6>

                    <div className={fri.c}>
                        <Image src="/2c.png" width={1400} height={1200}/>
                    </div>
                </div>
                <div className={fri.chel}>
                    <Image src="/chel_second.png" width={400} height={600}/>
                </div>
            </div>
        );
    }
}

export default Second;
