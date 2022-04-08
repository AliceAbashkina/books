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
import ien from "../styles/Level.module.css";
// @ts-ignore
globalThis.selectSq2=1;

export function Second(){
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
    function handleBackspace(){
        Back();
    }
    function handleArrowUp(){
        switch (
            // @ts-ignore
            selectSq2) {
            case 3:
                // @ts-ignore
                globalThis.selectSq2=1;
                document.getElementById("first").focus();
                document.getElementById("third").blur();

                break;
            case 4:
                // @ts-ignore
                globalThis.selectSq2=2;
                document.getElementById("second").focus();
                document.getElementById("fourth").blur();
                break;
            case 5:
                // @ts-ignore
                globalThis.selectSq2=3;
                document.getElementById("third").focus();
                document.getElementById("fifth").blur();
                break;
            case 6:
                // @ts-ignore
                globalThis.selectSq2=4;
                document.getElementById("fourth").focus();
                document.getElementById("six").blur();
                break;
            default:
                console.log('Genga');
                break;
        }
    }
    function handleArrowDown(){
        switch (
            // @ts-ignore
            selectSq2) {
            case 1:
                // @ts-ignore

                globalThis.selectSq2=3;
                document.getElementById("third").focus();
                document.getElementById("first").blur();
                break;
            case 2:
                // @ts-ignore
                globalThis.selectSq2=4;
                document.getElementById("fourth").focus();
                document.getElementById("second").blur();
                break;
            case 3:
                // @ts-ignore
                globalThis.selectSq2=5;
                document.getElementById("fifth").focus();
                document.getElementById("third").blur();
                break;
            case 4:
                // @ts-ignore
                globalThis.selectSq2=6;
                document.getElementById("six").focus();
                document.getElementById("fourth").blur();
                break;
            default:
                console.log('Hanzo');
                break;
        }
    }
    function handleArrowRight(){
        switch (
            // @ts-ignore
            selectSq2) {
            case 1:
                // @ts-ignore
                globalThis.selectSq2=2;
                document.getElementById("second").focus();
                document.getElementById("first").blur();
                break;
            case 3:
                // @ts-ignore
                globalThis.selectSq2=4;
                document.getElementById("fourth").focus();
                document.getElementById("third").blur();
                break;
            case 5:
                // @ts-ignore
                globalThis.selectSq2=6;
                document.getElementById("six").focus();
                document.getElementById("fifth").blur();
                break;
            default:
                console.log('Hanzo');
                break;
        }
    }
    function handleArrowLeft(){
        switch (
            // @ts-ignore
            selectSq2) {
            case 2:
                // @ts-ignore
                globalThis.selectSq2=1;
                document.getElementById("first").focus();
                document.getElementById("second").blur();
                break;
            case 4:
                // @ts-ignore
                globalThis.selectSq2=3;
                document.getElementById("third").focus();
                document.getElementById("fourth").blur();
                break;
            case 6:
                // @ts-ignore
                globalThis.selectSq2=5;
                document.getElementById("fifth").focus();
                document.getElementById("six").blur();
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


    function Fail(setHelp){
        setHelp(true);
        setTimeout(function (){setHelp(false)},2000);
    }
    const router=useRouter();
    function Back(){
        router.push('/level');
        // @ts-ignore
        selectQ=1;
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

    const [colors1, setColors1]= useState(COLORS.strgrey);
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
      &:focus {
        background-color: rgba(255, 108, 64, 0.45);
      }
    `;
    const Square2 = styled.div`
      position: absolute;
      width: 219px;
      height: 134px;

      border-radius: 13px;
      background-color: ${ colors2 };
      backdrop-filter: blur(1px);
      &:focus {
        background-color: rgba(255, 108, 64, 0.45);
      }
    `;
    const Square3 = styled.div`
      position: absolute;
      width: 219px;
      height: 134px;

      border-radius: 13px;
      background-color: ${ colors3 };
      backdrop-filter: blur(1px);
      &:focus {
        background-color: rgba(255, 108, 64, 0.45);
      }
    `;
    const Square4 = styled.div`
      position: absolute;
      width: 219px;
      height: 134px;

      border-radius: 13px;
      background-color: ${ colors4 };
      backdrop-filter: blur(1px);
      &:focus {
        background-color: rgba(255, 108, 64, 0.45);
      }
    `;
    const Square5 = styled.div`
      position: absolute;
      width: 219px;
      height: 134px;

      border-radius: 13px;
      background-color: ${ colors5 };
      backdrop-filter: blur(1px);
      &:focus {
        background-color: rgba(255, 108, 64, 0.45);
      }
    `;
    const Square6 = styled.div`
      position: absolute;
      width: 219px;
      height: 134px;

      border-radius: 13px;
      background-color: ${ colors6 };
      backdrop-filter: blur(1px);
      &:focus {
        background-color: rgba(255, 108, 64, 0.45);
      }
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
                <div className={triss.rel}>
                    <div className={triss.square1} onClick={()=>ClickMobile(1)}>
                        <div />
                        <div className={triss.text1}>1</div>
                    </div>
                    <div className={triss.square2} onClick={()=>ClickMobile(2)}>
                        <div />
                        <div className={triss.text2}>2</div>
                    </div>
                    <div className={triss.square3} onClick={()=>ClickMobile(3)}>
                        <div />                        <div className={triss.text3}>3</div>
                    </div>
                    <div className={triss.square4} onClick={()=>ClickMobile(-1)}>
                        <div />                        <div className={triss.text4}>4</div>
                    </div>
                    <div className={triss.square5} onClick={()=>ClickMobile(-1)}>
                        <div />                        <div className={triss.text5}>5</div>
                    </div>
                    <div className={triss.square6} onClick={()=>ClickMobile(-1)}>
                        <div />                        <div className={triss.text6}>6</div>
                    </div>
                </div>
            </div>
        );
    }
    else{
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useEffect(() => {
            document.getElementById("first").focus();
        }, []);
        return(
            <div  tabIndex={-1} className={triss.body}>
                { showHelp?
                    <div tabIndex={-1} className={imr.Toast}>
                        <Toast text={"В следующей версии"} /> </div>
                    :null}
                <div  tabIndex={-1} className={fri.TextBack}>Уровень</div>
                <div  tabIndex={-1} className={triss.BackHead}>
                    <Header  tabIndex={-1}
                        back={true}
                        onBackClick={() => router.push('/level')}
                    >
                    </Header>
                </div>
                <div  tabIndex={-1} className={triss.fuck}>
                    <div  tabIndex={-1} className={triss.texticon1}>
                        {
                            // @ts-ignore
                            triangle}
                    </div>
                    <img   tabIndex={-1} src="/rect.png" className={triss.Firsticon}/>
                    <div  tabIndex={-1} className={triss.texticon2}>
                        {
                            // @ts-ignore
                            hearts}
                    </div>
                    <img  tabIndex={-1} src="/heart.png" className={triss.Secondicon}/>
                </div>
                <div  tabIndex={-1} className={fri.rel}>
                    <Square1  tabIndex={-1} className={fri.square1} id="first" onClick={()=>Enter(1)}>
                    <div  tabIndex={-1}>
                        <div  tabIndex={-1} className={fri.text1}>1</div>
                    </div>
                    </Square1 >
                    <Square2  tabIndex={-1} className={fri.square2} id="second" onClick={()=>Enter(2)}>
                        <div  tabIndex={-1} className={fri.text2}>2</div>
                    </Square2>
                    <Square3  tabIndex={-1} className={fri.square3} id="third" onClick={()=>Enter(3)}>
                        <div  tabIndex={-1} className={fri.text3}>3</div>
                    </Square3>
                    <Square4  tabIndex={-1} className={fri.square4} id="fourth" onClick={()=>Fail(setHelp)}>
                        <div  tabIndex={-1} className={fri.text4}>4</div>
                    </Square4>
                    <Square5  tabIndex={-1} className={fri.square5} id="fifth" onClick={()=>Fail(setHelp)}>
                        <div  tabIndex={-1} className={fri.text5}>5</div>
                    </Square5>
                    <Square6  tabIndex={-1} className={fri.square6} id="six" onClick={()=>Fail(setHelp)}>
                        <div  tabIndex={-1} className={fri.text6}>6</div>
                    </Square6>

                    <div  tabIndex={-1} className={fri.c}>
                        <img   tabIndex={-1} src="/2c.png" width={1400} height={1200}/>
                    </div>
                </div>
                <div  tabIndex={-1}  className={fri.chel}>
                    <img  tabIndex={-1} src="/chel_second.png" width={400} height={600}/>
                </div>
            </div>
        );
    }
}

export default Second;
