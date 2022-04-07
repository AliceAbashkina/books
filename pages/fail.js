import {
    Button,
    Header
} from "@sberdevices/plasma-ui";
import lambert from "../styles/Que.module.css";

import {useRouter} from "next/router";
import {useEffect, useRef} from "react";
import * as indexVar from './index';
import ien from "../styles/Level.module.css";

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
        globalThis.index=0;
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
                    <div className={ien.texticon1Mob}>
                        {triangle}
                    </div>
                    <img src="/rect.png" className={ien.FirstMobIc}/>
                    <div className={ien.texticon2Mob}>
                        {hearts}
                    </div>
                    <img src="/heart.png" className={ien.SecondMobIc}/>
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
            globalThis.index=0;
            router.push('/cat');
        }
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useKey("Enter",handleEnter);
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useEffect(() => {
            document.getElementById("Fail").focus();
        }, []);

        return (
            <div tabIndex={-1} className={lambert.body}>
                <div tabIndex={-1} className={lambert.headers}>
                    <Header
                        back={true}
                        onBackClick={() => router.push('/second')}
                    >
                    </Header>
                </div>
                <div tabIndex={-1} className={lambert.fuck}>
                    <div tabIndex={-1} className={lambert.texticon1}>
                        {triangle}
                    </div>
                    <img tabIndex={-1} src="/rect.png" className={lambert.Firsticon}/>
                    <div tabIndex={-1} className={lambert.texticon2}>
                        {hearts}
                    </div>
                    <img tabIndex={-1} src="/heart.png" className={lambert.Secondicon}/>
                </div>
                <div tabIndex={-1}  className={lambert.textFail}>Ты проиграл</div>
                <div tabIndex={1}  className={lambert.rel5} style={{marginTop: 10}} onClick={() => router.push('/cat')} autoFocus id={"Fail"}>
                    <Button tabIndex={-1} text={"Окей"} className={lambert.okButt} />
                </div>
            </div>
        );
    }
}

export default Fail;
