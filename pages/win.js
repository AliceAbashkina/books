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
        globalThis.triangle += 3;
        globalThis.hearts += 3;
        router.push('/level')
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
                <div className={win.textQue} style={{marginTop: 50}}>Ты выиграл!</div>
                <div className={lambert.textQue} style={{marginTop: 150}}>Получи награду</div>

                <div className={lambert.rel3} style={{marginTop: 100}} onClick={ClickMe}>
                    <Button text={"Окей"} className={lambert.fckdiv}></Button>
                    <img src="/rect.png" className={win.bonusIcon}/>
                    <img src="/heart.png" className={win.bonusIcon2}/>
                    <div className={win.bonusIcon3} >+3</div>
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
            globalThis.triangle += 3;
            globalThis.hearts += 3;
            globalThis.index=0;
            router.push('/level')
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
                <div className={lambert.textQue}>Получи награду</div>
                <div className={win.rel5} style={{marginTop: 10}} onClick={ClickMe} id="StartQ">
                    <Button  style={{bottom: "10%"}} text={"Окей"} className={lambert.okButt}/>
                    <img src="/rect.png" className={win.bonusIcon}/>
                    <img src="/heart.png" className={win.bonusIcon2}/>
                    <div className={win.bonusIcon3} >+3</div>
                </div>
            </div>
        );
    }
}

export default Win;
