import ien from "../styles/Level.module.css";
import vesemir from "../styles/Level_NM.module.css";
import imr from "../styles/Que_NM.module.css";
import {COLORS} from "../public/colors";

import {
    addFocus, FocusProps,
    Header, Toast, withAutoFocus
} from "@sberdevices/plasma-ui";
import {useRouter} from "next/router";
import {useEffect, useRef, useState} from "react";
import styled from "styled-components";
import * as indexVar from "./index";
import lambert from "../styles/Que.module.css";
import triss from "../styles/Second.module.css";

globalThis.selectQ=1;

export function Level() {
    const [focusState1, setFocus1]= useState(true);
    const [focusState2, setFocus2]= useState(false);
    function squareQ1(){
        router.push('/first')
    }

    function squareQ2 (){
        router.push('/second')
    }


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
    globalThis.str=2

    const [colors, setColors]= useState(COLORS.strgrey);
    const [colors2, setColors2]= useState(COLORS.strgrey);
    const [showHelp, setHelp]=useState(false);

    const Container1 = styled.div`
    position: relative;
    width: 600px;
    height: 300px;
    margin-left: auto;
    margin-right: auto;
    top: 112px;
    
    backdrop-filter: blur(126.885px);
      border-radius: 13px;
      background-color: ${ colors };
      &:focus {
        background-color: rgba(255, 108, 64, 0.45);
        color: white;
      }
      `;

    const Container2 = styled.div`
      background-color: ${ colors2 };
      &:focus {
      background-color: rgba(255, 108, 64, 0.45);
      color: white;
      }
      `;

    useKey("Enter",handleEnter);
    useKey("Backspace",handleBackspace);
    useKey("ArrowUp",handleArrowUp);
    useKey("ArrowDown",handleArrowDown);

    function handleEnter(){
        if(
            // @ts-ignore
            globalThis.selectQ==1){
            router.push('/first');
        }
        else if(
            // @ts-ignore
            globalThis.selectQ==2){
            // @ts-ignore
            globalThis.selectSq2=1;
            router.push('/second');
        }
    }
    function handleBackspace(){
        globalThis.index=0;
        router.push('/cat');
    }
    function handleArrowUp(){
        // @ts-ignore
        globalThis.selectQ=1;
        document.getElementById("Mycon1").focus();
        document.getElementById("Mycon2").blur();
    }
    function handleArrowDown(){
        // @ts-ignore
        globalThis.selectQ=2;
        document.getElementById("Mycon1").blur()
        document.getElementById("Mycon2").focus();
    }

    function Back(){
        // @ts-ignore
        globalThis.index=0;
        router.push('/cat')
    }

    if (indexVar.device == "mobile") {
        return(
        <div className={ien.bqs}>
            <div className={ien.backtext}>
                Тип забега
            </div>
            <div  className={triss.BackHeadS}>
            <Header
                back={true}
                onBackClick={() => router.push('/cat')}
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

            <div className={ien.fuckS}>
                <div className={ien.texticon2Mob}>
                    {// @ts-ignore
                        hearts}
                </div>
                <img src="/heart.png" className={ien.SecondMobIc}/>
            </div>

            <div className={ien.relS}>
            <div className={ien.squareQ1S}  onClick={() => router.push('/first')}>
                <div className={ien.text1}>
                    Чем дальше бежишь, тем сложнее вопросы
                </div>
                <div className={ien.text2}>
                    Беги, пока можешь
                </div>
                <div className={ien.text3}>
                    На выживание
                </div>
                <div className={ien.bonus}>
                    +3
                </div>
                <img src="/rect.png" className={ien.bonusIcon}/>
                <img src="/heart.png" className={ien.bonusIcon2}/>
            </div>


            <div className={ien.squareQ2S}  onClick={() => router.push('/second')} >
                <div className={ien.text21}>
                    Сложность по уровням
                </div>
                <div className={ien.text22}>
                    Чем дальше, тем сложнее
                </div>
                <div className={ien.text23}>
                    По уровням
                </div>
            </div>
            </div>

        </div>
    );}
    else {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useEffect(() => {
            document.getElementById("Mycon1").focus();
        }, []);
        return (
            <div tabIndex={-1} className={ien.bqs} >
            <div tabIndex={-1} className={vesemir.backtext}>
                Тип забега
            </div>
            <Header tabIndex={-1}
                back={true}
                className={ien.headers}
                onBackClick={() => router.push('/cat')}
            >
            </Header>
            <div tabIndex={-1} className={ien.fuck}>
                <div tabIndex={-1} className={ien.texticon1}>
                    { // @ts-ignore
                        triangle}
                </div>
                <img tabIndex={-1} src="/rect.png" className={lambert.Firsticon}/>
                <div tabIndex={-1} className={ien.texticon2}>
                    {   // @ts-ignore
                        hearts}
                </div>
                <img tabIndex={-1} src="/heart.png" className={lambert.Secondicon}/>
            </div>
            { showHelp?
                <div tabIndex={-1} className={imr.Toast}>
                    <Toast  text={"В следующей версии("} /> </div>
                :null}
            <Container1 id="Mycon1"  onClick={() =>squareQ1()} tabIndex={-1}>
                <div tabIndex={-1} className={ien.text1}>
                    Чем дальше бежишь, тем сложнее вопросы
                </div>
                <div tabIndex={-1} className={ien.text2}>
                    Беги, пока можешь
                </div>
                <div tabIndex={-1} className={vesemir.text3}>
                    На выживание
                </div>
                <div tabIndex={-1} className={ien.bonus}>
                    +3
                </div>
                <img tabIndex={-1} src="/rect.png" className={vesemir.bonusIcon}/>
                <img tabIndex={-1} src="/heart.png" className={vesemir.bonusIcon2}/>
            </Container1>

            <Container2 id="Mycon2" className={vesemir.squareQ2} onClick={() =>squareQ2()} tabIndex={-1}>
                <div tabIndex={-1}className={ien.text21}>
                    Сложность по уровням
                </div>
                <div tabIndex={-1} className={ien.text22}>
                    Чем дальше, тем сложнее
                </div>
                <div  tabIndex={-1} className={vesemir.text23}>
                    По уровням
                </div>
            </Container2>

        </div>);
    }
}

export default Level;
