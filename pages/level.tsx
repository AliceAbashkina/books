import ien from "../styles/Level.module.css";
import vesemir from "../styles/Level_NM.module.css";
import {COLORS} from "./colors";

import {
    detectDevice,
    Header
} from "@sberdevices/plasma-ui";
import {router} from "next/client";
import {useState} from "react";
import styled, {createGlobalStyle} from "styled-components";

export function Level() {
    device.str=2;

    const [colors, setColors]= useState(COLORS.strgrey);
    const [colors2, setColors2]= useState(COLORS.strgrey);

    let selectQ;

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

    if (typeof window !== 'undefined' && device.str===2) {
        window.addEventListener('keyup', (event) => {
            switch (event.code) {
                case 'ArrowUp':
                setColors(COLORS.strred);
                    setColors2(COLORS.strgrey);
                    selectQ=1;
                    break;
                case 'ArrowDown':
                    setColors(COLORS.strgrey);
                    setColors2(COLORS.strred);
                    selectQ=2;
                    break;
                case 'Backspace':
                    router.push('/cat');
                    break;
                case 'Enter':
                    if(selectQ==1){
                        router.push('/first');
                    }
                    else{
                        router.push('/second');
                    }
                    break;
            }
        });
    }
    if (device.device == "mobile") {
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
                    {score.triangle}
                </div>
                <img src="/rect.png" className={ien.Firsticon}/>
                <div className={ien.texticon2}>
                    {score.hearts}
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
                    +10%
                </div>
                <img src="/rect.png" className={ien.bonusIcon}/>
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
        return (<div className={ien.bqs}>
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
                    {score.triangle}
                </div>
                <img src="/rect.png" className={ien.Firsticon}/>
                <div className={ien.texticon2}>
                    {score.hearts}
                </div>
                <img src="/heart.png" className={ien.Secondicon}/>
            </div>

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
                    +10%
                </div>
                <img src="/rect.png" className={ien.bonusIcon}/>
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

function squareQ1(){
    router.push('/first')
}

function squareQ2 (){
        router.push('/second')
}

export default Level;
