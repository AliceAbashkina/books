import lutik from '../styles/Home.module.css';
import zoltan from '../styles/Home_NM.module.css';
import {useRouter} from "next/router";
import {useEffect, useRef, useState} from "react";
import {detectDevice} from "@sberdevices/plasma-ui";
import {AssistantAppState, createAssistant} from "@sberdevices/assistant-client";
import {COLORS} from "../public/colors";
import styled from "styled-components";

function Prom(){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 100);
    });
}

let deviceKind=detectDevice();
//let deviceKind='sds';
console.log(deviceKind)

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
globalThis.selectSq2=1;

export default function Home(){
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
    if (deviceKind === 'mobile') {
        return (
            <div className={lutik.con}>
                <div className={lutik.purple}></div>
                <div className={lutik.rel2}>
                    <div className={lutik.smart}>
                        Smart
                    </div>
                    <div className={lutik.runner}>
                        Runner
                    </div>
                    <div className={lutik.svet}>Ученье — свет, а неученье — тьма</div>
                </div>
                <div className={lutik.rel3}>
                    <div className={lutik.border0}/>
                    <div className={lutik.border1}/>
                    <div className={lutik.border2}/>
                    <div className={lutik.border3}/>
                    <div className={lutik.border4}/>
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
                    <div onClick={() => router.push('/cat')} className={lutik.Div2}>
                        <button className={lutik.square}>
                            <div className={lutik.play}>
                                <img src="/play.png" width={'50%'} height={'30%'}/>
                            </div>
                            <div className={lutik.Go}>Начать</div>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
    else{
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useEffect(() => {
            document.getElementById("Start").focus();
        }, []);
        return(
            <div className={zoltan.bodys}>
                <div className={zoltan.three}>
                    <div className={zoltan.smarts}>
                        Smart
                    </div>
                    <div className={zoltan.runner}>
                        Runner
                    </div>
                    <div className={zoltan.svet}>Ученье — свет, а неученье — тьма</div>
                </div>
                <div tabIndex={1} id="Start" onClick={() => router.push('/cat')}>
                    <button className={zoltan.square}>
                        <div className={zoltan.play}>
                            <img src="/play.png" width={85} height={102}/>
                        </div>
                        <div className={zoltan.Go}>Начать</div>
                    </button>
                </div>
                <div className={zoltan.rec1}>
                    <img src="/rect.png" width={20}
                         height={30}/>
                </div>
                <div className={zoltan.rec2}>
                    <img src="/rect.png" width={20}
                         height={30}/>
                </div>
                <div className={zoltan.rec3}>
                    <img src="/rect.png" width={38}
                         height={57}/>
                </div>
                <div className={zoltan.circle_fon}>
                    <img src="/3cir.png" width={900}
                         height={850}/>
                </div>
                <div className={zoltan.chel}>
                    <img src="/chel_pc.png" width={500}
                         height={470}/>
                </div>
                <div className={zoltan.blur}>
                    <img src="/blur.png" width={2000}
                         height={800}/>
                </div>
                <div className={zoltan.star}>
                    <img src="/star.png" width={300}
                         height={298}/>
                </div>
            </div>

        );
    }
}
