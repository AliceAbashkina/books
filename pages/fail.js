import {
    Button,
    Header
} from "@sberdevices/plasma-ui";
import lambert from "../styles/Que.module.css";

import {useRouter} from "next/router";
import {useEffect, useRef} from "react";
import * as indexVar from './index';

export function Fail(){
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


    if (indexVar.device == "mobile") {
        globalThis.hearts=5;
        globalThis.triangle=5;
        return (
            <div className={lambert.body}>
                <div className={lambert.headers}>
                    <Header
                        back={true}
                        onBackClick={() => router.push('/second')}
                    >
                    </Header>
                </div>
                <div className={lambert.fuck}>
                    <div className={lambert.texticon1}>
                        {triangle}
                    </div>
                    <img src="/rect.png" className={lambert.Firsticon}/>
                    <div className={lambert.texticon2}>
                        {hearts}
                    </div>
                    <img src="/heart.png" className={lambert.Secondicon}/>
                </div>
                <div className={lambert.textQue}>Ты проиграл</div>
                <div className={lambert.rel3} style={{marginTop: 10}} onClick={() => router.push('/cat')}>
                    <Button text={"Окей"} className={lambert.fckdiv}></Button>
                </div>
            </div>
        );
    }
    else{
        function handleEnter(){
            globalThis.hearts=5;
            globalThis.triangle=5;
            router.push('/');
        }
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useKey("Enter",handleEnter);
        return (
            <div className={lambert.body}>
                <div className={lambert.headers}>
                    <Header
                        back={true}
                        onBackClick={() => router.push('/second')}
                    >
                    </Header>
                </div>
                <div className={lambert.fuck}>
                    <div className={lambert.texticon1}>
                        {triangle}
                    </div>
                    <img src="/rect.png" className={lambert.Firsticon}/>
                    <div className={lambert.texticon2}>
                        {hearts}
                    </div>
                    <img src="/heart.png" className={lambert.Secondicon}/>
                </div>
                <div className={lambert.textFail}>Ты проиграл</div>
                <div className={lambert.rel5} style={{marginTop: 10}} onClick={() => router.push('/')}>
                    <Button text={"Окей"} className={lambert.okButt}/>
                </div>
            </div>
        );
    }
}

export default Fail;
