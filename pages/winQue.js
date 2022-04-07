import {
    Button,
    Header
} from "@sberdevices/plasma-ui";
import lambert from "../styles/Que.module.css";
import win from "../styles/Win.module.css";
import {useRouter} from "next/router";
import {useEffect, useRef} from "react";
import * as indexVar from './index';
import ien from "../styles/Level.module.css";

export function Win(){

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


    function ClickMe() {
        router.push('/cat')
        globalThis.index=0;
    }

    if (indexVar.device == "mobile") {
        return (
            <div className={lambert.body}>
                <div className={lambert.headers}>
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
                <div className={win.textQue} style={{marginTop: 50}}>Ты выиграл!</div>

                <div className={lambert.rel3} style={{marginTop: 100}} onClick={ClickMe}>
                    <Button text={"Окей"} className={lambert.fckdiv}></Button>
                </div>

            </div>
        );
    }

    else{
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useEffect(() => {
            document.getElementById("StartQ").focus();
        }, []);
        function handleEnter(){
            globalThis.index=0;
            router.push('/cat')
        }
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useKey("Enter",handleEnter);
        return (
            <div className={lambert.body}>
                <div className={lambert.headers}>
                    <Header
                        back={true}
                        onBackClick={() => router.push('/level')}
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
                <div className={win.textQue}>Ты выиграл!</div>
                <div className={win.rel5} style={{marginTop: 10}} id="StartQ" onClick={ClickMe}>
                    <Button  style={{bottom: "10%"}} text={"Окей"} className={lambert.okButt}/>
                </div>
            </div>
        );
    }
}

export default Win;
