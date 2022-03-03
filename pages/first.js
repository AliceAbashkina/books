import ciri from "../styles/First.module.css";
import {Header} from "@sberdevices/plasma-ui";
import {router} from "next/client";

export function Level() {
    return (
        <div className={ciri.body}>
    <Header
        back={true}
        className={ciri.HeadSecond}
        onBackClick={() => router.push('/level')}
    >
    </Header>
            <div className={ciri.TextBack}>Наука</div>
        </div>
    );
}
export function Run(){
    let run = true;
    let garbages = ["/trash.png","/books.png","/stairs.png"];
    let ch=Math.random(0,2);
    Run(garbages[ch]);
}


export default Level;