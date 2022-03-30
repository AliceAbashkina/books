import ien from "../styles/Level.module.css";
import vesemir from "../styles/Level_NM.module.css";
import imr from "../styles/Que_NM.module.css";
import {COLORS} from "../public/colors";

import {
    Header, Toast
} from "@sberdevices/plasma-ui";
import {useRouter} from "next/router";
import {useEffect, useRef, useState} from "react";
import styled from "styled-components";
import * as indexVar from "./index";

globalThis.selectQ=1;

export function Level() {
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

    const [colors, setColors]= useState(COLORS.strred);
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
      &:active {
        background-color: rgba(255, 108, 64, 0.45);
        color: white;
      }
      `;

    const Container2 = styled.div`
      background-color: ${ colors2 };
      &:active {
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
            selectQ==1){
            router.push('/first');
        }
        else if(
            // @ts-ignore
            selectQ==2){
            // @ts-ignore
            selectSq2=1;
            router.push('/second');
        }
    }
    function handleBackspace(){
        router.push('/cat');
    }
    function handleArrowUp(){
        console.log("s");
        setColors(COLORS.strred);
        setColors2(COLORS.strgrey);
        // @ts-ignore
        selectQ=1;
    }
    function handleArrowDown(){
        console.log("s");
        setColors(COLORS.strgrey);
        setColors2(COLORS.strred);
        // @ts-ignore
        selectQ=2;
    }

    if (indexVar.device == "mobile") {
        return(
        <div className={ien.bqs}>
            <div className={ien.backtext}>
                Тип забега
            </div>
            <Header
                back={true}
                className={ien.headers}
                onBackClick={() => router.push('/cat')}
            >
            </Header>
            <div className={ien.fuck}>
                <div className={ien.texticon1}>
                    {
                        // @ts-ignore
                        triangle}
                </div>
                <img src="/rect.png" className={ien.Firsticon}/>
                <div className={ien.texticon2}>
                    {// @ts-ignore
                        hearts}
                </div>
                <img src="/heart.png" className={ien.Secondicon}/>
            </div>

            <div className={ien.squareQ1}  onClick={() => router.push('/first')}>
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


            <div className={ien.squareQ2}  onClick={() => router.push('/second')} >
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
    );}
    else {
        return (

            <div className={ien.bqs} >
            <div className={ien.backtext}>
                Тип забега
            </div>
            <Header
                back={true}
                className={ien.headers}
                onBackClick={() => router.push('/cat')}
            >
            </Header>
            <div className={ien.fuck}>
                <div className={ien.texticon1}>
                    { // @ts-ignore
                        triangle}
                </div>
                <img src="/rect.png" className={ien.Firsticon}/>
                <div className={ien.texticon2}>
                    {   // @ts-ignore
                        hearts}
                </div>
                <img src="/heart.png" className={ien.Secondicon}/>
            </div>
            { showHelp?
                <div className={imr.Toast}>
                    <Toast text={"В следующей версии("} /> </div>
                :null}
            <Container1 onClick={() =>squareQ1()} >
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
                <img src="/rect.png" className={vesemir.bonusIcon}/>
                <img src="/heart.png" className={vesemir.bonusIcon2}/>
            </Container1>

            <Container2 className={vesemir.squareQ2}  onClick={() =>squareQ2()} >
                <div className={ien.text21}>
                    Сложность по уровням
                </div>
                <div className={ien.text22}>
                    Чем дальше, тем сложнее
                </div>
                <div className={ien.text23}>
                    По уровням
                </div>
            </Container2>

        </div>);
    }
}

export default Level;
