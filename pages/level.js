import ien from "../styles/Level.module.css";
import vesemir from "../styles/Level_NM.module.css";

import {
    detectDevice,
    Header
} from "@sberdevices/plasma-ui";
import {router} from "next/client";
import {useState} from "react";
import styled from "styled-components";
import { FocusProps, OutlinedProps, addFocus } from '@sberdevices/plasma-ui';

export function Level() {

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

                <div className={ien.squareQ1}  onClick={() => router.push('/first')} >
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

            <div className={vesemir.squareQ1}  onClick={() =>router.push('/first')} id="idSq">
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
            <div className={vesemir.squareQ2}  onClick={() =>router.push('/second')} id="idSq2">
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

        </div>);
    }
}


export default Level;