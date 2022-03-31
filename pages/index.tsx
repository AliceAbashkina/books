import lutik from '../styles/Home.module.css';
import zoltan from '../styles/Home_NM.module.css';
import {useRouter} from "next/router";
import {useEffect, useRef, useState} from "react";
import {FocusProps, OutlinedProps, addFocus, detectDevice} from '@sberdevices/plasma-ui';

import {AssistantAppState, createAssistant} from "@sberdevices/assistant-client";
import {COLORS} from "../public/colors";
import styled from "styled-components";
import {isMobile} from 'react-device-detect';


//let deviceKind='sds';

let deviceKind=detectDevice();
export var device= deviceKind;
globalThis.str=0;
globalThis.triangle=5;
globalThis.hearts =5;
globalThis.items= ["Животные", "Путешествия"];
globalThis.glory= ["animals", "travel"];
globalThis.text=["Как хорошо ты знаешь животных?", "Что ты знаешь о других странах?"];
globalThis.index=0;
globalThis.level=1;
globalThis.selectSq=-1;
globalThis.selectSq1=1;
globalThis.selectSq2=1;



export default function Home(){
    const Buttons = styled.button<FocusProps>`
      background-color: gold;
    ${addFocus}
`;

    const MyImage = styled.div`
      background-color: gold;
`;

    const Go = styled.div`
      color: #000000;
      font-family: Rubik;
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      line-height: 130%;
`;
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
            window.addEventListener("keyup",handle);
            return ()=>window.removeEventListener("keyup",handle)
        },[key]);
    }
    useKey("Enter",handleEnter);

    function handleEnter(){
        router.push('/cat');
        console.log("s");
    }
    const router = useRouter();


    const initializeAssistant = (getState: any) => {
        return createAssistant({ getState });
    };

    const assistantStateRef = useRef<AssistantAppState>();
    const assistantRef = useRef<ReturnType<typeof createAssistant>>();

    useEffect(() => {
        assistantRef.current = initializeAssistant(() => assistantStateRef.current);

        assistantRef.current.on('data', ({ navigation, action }: any) => {
            if (action) {

            }
        });
    });

        if (deviceKind=='mobile') {
            return(
            <div className={lutik.con}>
                <div className={lutik.purple}></div>
                <div className={lutik.rel2}>
                    <div className={lutik.smart} style={{zIndex:1}}>
                        Smart
                    </div>
                    <div className={lutik.runner} style={{zIndex:1}}>
                        Runner
                    </div>
                    <div className={lutik.svet}>Ученье — свет, а неученье — тьма</div>
                </div>
                <div className={lutik.rel3}>
                    <div className={lutik.border0} style={{zIndex:5}}/>
                    <div className={lutik.border1} style={{zIndex:5}}/>
                    <div className={lutik.border2} style={{zIndex:5}}/>
                    <div className={lutik.border3} style={{zIndex:55}}/>
                    <div className={lutik.border4} style={{zIndex:5}}/>
                    <div className={zoltan.rec11}>
                        <img src="/rect.png" width={20}
                               height={30}/>
                    </div>
                    <div className={zoltan.rec21}>
                        <img src="/rect.png" width={20}
                               height={30}/>
                    </div>
                </div>
                <div className={lutik.rel1}>
                    <div className={lutik.chel}>
                        <img src="/chel.png" width={250}
                               height={300}/>
                    </div>
                        <div className={lutik.square} onClick={() => router.push('/cat')}>
                                <div className={lutik.play}>
                                    <img src="/play.png" width={85} height={102}/>
                                </div>
                                <div className={lutik.Go}>Начать</div>
                        </div>
                </div>
            </div>
        );
    }
    else{
        return(
            <div className={zoltan.bodys} tabIndex={-1}>
                <div className={zoltan.three } tabIndex={-1}>
                    <div className={zoltan.smarts} tabIndex={-1}>
                        Smart
                    </div>
                    <div className={zoltan.runner} tabIndex={-1}>
                        Runner
                    </div>
                    <div className={zoltan.svet} tabIndex={-1}>Ученье — свет, а неученье — тьма</div>
                </div>
                    <Buttons autoFocus tabIndex={-1} onClick={() => router.push('/cat')}>
                        <MyImage className={zoltan.square} tabIndex={-1}>
                            <div className={zoltan.play} tabIndex={-1}>
                                <img width={85} height={102} tabIndex={-1}/>
                            </div>
                            <Go className={zoltan.Go} tabIndex={-1}>Начать</Go>
                        </MyImage>
                    </Buttons>
                <div className={zoltan.rec1} tabIndex={-1}>
                    <img src="/rect.png" width={20}
                           height={30}/>
                </div>
                <div className={zoltan.rec2} tabIndex={-1}>
                    <img src="/rect.png" width={20}
                           height={30}/>
                </div>
                <div className={zoltan.rec3} tabIndex={-1}>
                    <img src="/rect.png" width={38}
                           height={57}/>
                </div>
                <div className={zoltan.circle_fon} tabIndex={-1}>
                    <img src="/3cir.png" width={900}
                           height={850}/>
                </div>
                <div className={zoltan.chel} tabIndex={-1}>
                    <img src="/chel_pc.png" width={500}
                           height={470}/>
                </div>
                <div className={zoltan.blur} tabIndex={-1}>
                    <img src="/blur.png" width={2000}
                           height={800}/>
                </div>
                <div className={zoltan.star} tabIndex={-1}>
                    <img src="/star.png" width={300}
                           height={298}/>
                </div>
            </div>

        );
    }
}
