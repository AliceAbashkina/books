import {
    Button, detectDevice,
    Header
} from "@sberdevices/plasma-ui";
import lambert from "../styles/Que.module.css";
import {router} from "next/client";
import {COLORS} from "./colors";
import {useKey} from "./index";


export function Fail(){
    if (device.device == "mobile") {
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
                        5
                    </div>
                    <img src="/rect.png" className={lambert.Firsticon}/>
                    <div className={lambert.texticon2}>
                        0
                    </div>
                    <img src="/heart.png" className={lambert.Secondicon}/>
                </div>
                <div className={lambert.textQue}>Ты проиграл</div>
                <div className={lambert.rel3} style={{marginTop: 10}} onClick={() => router.push('/')}>
                    <Button text={"Окей"} className={lambert.fckdiv}></Button>
                </div>
            </div>
        );
    }
    else{
        function handleEnter(){
            router.push('/');
        }
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
                        5
                    </div>
                    <img src="/rect.png" className={lambert.Firsticon}/>
                    <div className={lambert.texticon2}>
                        0
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
