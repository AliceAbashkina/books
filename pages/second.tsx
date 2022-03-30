import {
    detectDevice,
    Header, Toast
} from "@sberdevices/plasma-ui";
import triss from "../styles/Second.module.css";
import fri from "../styles/Second_NM.module.css";
import {COLORS} from "../public/colors";
import {useEffect, useRef, useState} from "react";
import styled from "styled-components";
import imr from "../styles/Que_NM.module.css";
import {useRouter} from "next/router";
import * as indexVar from './index';

export function Second(){
    function Fail(setHelp){
        setHelp(true);
        setTimeout(function (){setHelp(false)},2000);
    }
    const router=useRouter();
    function Back(){
        router.push('/level');
        globalThis.selectQ=1;
    }

    function Enter(levels){
        globalThis.level=levels;
        router.push('/que');
    }
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

    globalThis.str=3

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

    function ClickMobile(levels) {
        if(levels==-1){
            setHelp(true);
            setTimeout(function (){setHelp(false)},2000);
        }
        else {
            globalThis.level = levels;
            router.push('/que')
        }
    }

    if (
        indexVar.device == "mobile") {
        return (
            <div className={triss.body}>
                { showHelp?
                    <div className={triss.Toast}>
                        <Toast text={"В следующей версии"} /> </div>
                    :null}
                <div className={triss.TextBack}>Уровень</div>
                <div className={triss.BackHead}>
                    <Header
                        back={true}
                        onBackClick={() => router.push('/level')}
                    >
                    </Header>
                </div>
                <div className={triss.fuck}>
                    <div className={triss.texticon1}>
                        {triangle}
                    </div>
                    <img src="/rect.png" className={triss.Firsticon}/>
                    <div className={triss.texticon2}>
                        {hearts}
                    </div>
                    <img src="/heart.png" className={triss.Secondicon}/>
                </div>
                <div className={triss.rel}>
                    <div className={triss.square1} onClick={()=>ClickMobile(1)}>
                        <img src="/fsquare.png" width={118} height={118}/>
                        <div className={triss.text1}>1</div>
                    </div>
                    <div className={triss.square2} onClick={()=>ClickMobile(2)}>
                        <img src="/fsquare.png" width={118} height={118}/>
                        <div className={triss.text2}>2</div>
                    </div>
                    <div className={triss.square3} onClick={()=>ClickMobile(-1)}>
                        <img src="/fsquare.png" width={118} height={118}/>
                        <div className={triss.text3}>3</div>
                    </div>
                    <div className={triss.square4} onClick={()=>ClickMobile(-1)}>
                        <img src="/fsquare.png" width={118} height={118}/>
                        <div className={triss.text4}>4</div>
                    </div>
                    <div className={triss.square5} onClick={()=>ClickMobile(-1)}>
                        <img src="/fsquare.png" width={118} height={118}/>
                        <div className={triss.text5}>5</div>
                    </div>
                    <div className={triss.square6} onClick={()=>ClickMobile(-1)}>
                        <img src="/fsquare.png" width={118} height={118}/>
                        <div className={triss.text6}>6</div>
                    </div>
                </div>
            </div>
        );
    }
    else{
        // @ts-ignore
        function handleEnter(){
            if( // @ts-ignore
                selectSq2<3){
                Enter( // @ts-ignore
                    selectSq2);
            }
            else {
                setHelp(true);
                setTimeout(function (){setHelp(false)},2000);
            }
        }
        // @ts-ignore
        function handleBackspace(){
            Back();
        }
        // @ts-ignore
        function handleArrowUp(){
            switch (
                // @ts-ignore
                selectSq2) {
                case 3:
                    // @ts-ignore
                    globalThis.selectSq2=1;
                    setColors1(COLORS.strred);
                    setColors3(COLORS.strgrey);
                    break;
                case 4:
                    // @ts-ignore
                    globalThis.selectSq2=2;
                    setColors2(COLORS.strred);
                    setColors4(COLORS.strgrey);
                    break;
                case 5:
                    // @ts-ignore
                    globalThis.selectSq2=3;
                    setColors3(COLORS.strred);
                    setColors5(COLORS.strgrey);
                    break;
                case 6:
                    // @ts-ignore
                    globalThis.selectSq2=4;
                    setColors4(COLORS.strred);
                    setColors6(COLORS.strgrey);
                    break;
                default:
                    console.log('Genga');
                    break;
            }
        }
        // @ts-ignore
        function handleArrowDown(){
            switch (
                // @ts-ignore
                selectSq2) {
                case 1:
                    // @ts-ignore
                    globalThis.selectSq2=3;
                    setColors3(COLORS.strred);
                    setColors1(COLORS.strgrey);
                    break;
                case 2:
                    // @ts-ignore
                    globalThis.selectSq2=4;
                    setColors4(COLORS.strred);
                    setColors2(COLORS.strgrey);
                    break;
                case 3:
                    // @ts-ignore
                    globalThis.selectSq2=5;
                    setColors5(COLORS.strred);
                    setColors3(COLORS.strgrey);
                    break;
                case 4:
                    // @ts-ignore
                    globalThis.selectSq2=6;
                    setColors6(COLORS.strred);
                    setColors4(COLORS.strgrey);
                    break;
                default:
                    console.log('Hanzo');
                    break;
            }
        }
        // @ts-ignore
        function handleArrowRight(){

            switch (
                // @ts-ignore
                selectSq2) {
                case 1:
                    // @ts-ignore
                    globalThis.selectSq2=2;
                    setColors2(COLORS.strred);
                    setColors1(COLORS.strgrey);
                    break;
                case 3:
                    // @ts-ignore
                    globalThis.selectSq2=4;
                    setColors4(COLORS.strred);
                    setColors3(COLORS.strgrey);
                    break;
                case 5:
                    // @ts-ignore
                    globalThis.selectSq2=6;
                    setColors6(COLORS.strred);
                    setColors5(COLORS.strgrey);
                    break;
                default:
                    console.log('Hanzo');
                    break;
            }
        }
        // @ts-ignore
        function handleArrowLeft(){
            switch (
                // @ts-ignore
                selectSq2) {
                case 2:
                    // @ts-ignore
                    globalThis.selectSq2=1;
                    setColors1(COLORS.strred);
                    setColors2(COLORS.strgrey);
                    break;
                case 4:
                    // @ts-ignore
                    globalThis.selectSq2=3;
                    setColors3(COLORS.strred);
                    setColors4(COLORS.strgrey);
                    break;
                case 6:
                    // @ts-ignore
                    globalThis.selectSq2=5;
                    setColors5(COLORS.strred);
                    setColors6(COLORS.strgrey);
                    break;
                default:
                    console.log('Hanzo');
                    break;
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
            <div className={triss.body}>
                { showHelp?
                    <div className={imr.Toast}>
                        <Toast text={"В следующей версии"} /> </div>
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
                        {
                            // @ts-ignore
                            triangle}
                    </div>
                    <img src="/rect.png" className={triss.Firsticon}/>
                    <div className={triss.texticon2}>
                        {
                            // @ts-ignore
                            hearts}
                    </div>
                    <img src="/heart.png" className={triss.Secondicon}/>
                </div>
                <div className={fri.rel}>
                    <Square1 className={fri.square1}>
                    <div onClick={()=>Enter(1)}>
                        <div className={fri.text1}>1</div>
                    </div>
                    </Square1>
                    <Square2 className={fri.square2}  onClick={()=>Enter(2)}>
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
                        <img src="/2c.png" width={1400} height={1200}/>
                    </div>
                </div>
                <div className={fri.chel}>
                    <img src="/chel_second.png" width={400} height={600}/>
                </div>
            </div>
        );
    }
}

export default Second;
