import {
    detectDevice,
    Header
} from "@sberdevices/plasma-ui";
import triss from "../styles/Second.module.css";
import fri from "../styles/Second_NM.module.css";
import {router} from "next/client";
import Image from "next/image";

export function Second(){
    if (device.device == "mobile") {
        return (
            <div className={triss.body}>
                <div className={triss.TextBack}>Сложность</div>
                <div className={triss.BackHead}>
                    <Header
                        back={true}
                        onBackClick={() => router.push('/level')}
                    >
                    </Header>
                </div>
                <div className={triss.fuck}>
                    <div className={triss.texticon1}>
                        {score.triangle}
                    </div>
                    <img src="/rect.png" className={triss.Firsticon}/>
                    <div className={triss.texticon2}>
                        {score.hearts}
                    </div>
                    <img src="/heart.png" className={triss.Secondicon}/>
                </div>
                <div className={triss.rel}>
                    <div className={triss.square1} onClick={() => router.push('/que')}>
                        <Image src="/fsquare.png" width={118} height={118}/>
                        <div className={triss.text1}>1</div>
                    </div>
                    <div className={triss.square2}>
                        <Image src="/fsquare.png" width={118} height={118}/>
                        <div className={triss.text2}>2</div>
                    </div>
                    <div className={triss.square3}>
                        <Image src="/fsquare.png" width={118} height={118}/>
                        <div className={triss.text3}>3</div>
                    </div>
                    <div className={triss.square4}>
                        <Image src="/fsquare.png" width={118} height={118}/>
                        <div className={triss.text4}>4</div>
                    </div>
                    <div className={triss.square5}>
                        <Image src="/fsquare.png" width={118} height={118}/>
                        <div className={triss.text5}>5</div>
                    </div>
                    <div className={triss.square6}>
                        <Image src="/fsquare.png" width={118} height={118}/>
                        <div className={triss.text6}>6</div>
                    </div>
                </div>
            </div>
        );
    }
    else{
        return(
            <div className={triss.body}>
                <div className={fri.TextBack}>Уровень</div>
                <div className={triss.BackHead}>
                    <Header
                        back={true}
                        onBackClick={() => router.push('/level')}
                    >
                    </Header>
                </div>
                <div className={triss.fuck}>
                    <div className={triss.texticon1}>
                        {score.triangle}
                    </div>
                    <img src="/rect.png" className={triss.Firsticon}/>
                    <div className={triss.texticon2}>
                        {score.hearts}
                    </div>
                    <img src="/heart.png" className={triss.Secondicon}/>
                </div>
                <div className={fri.rel}>
                    <div className={fri.square1} onClick={() => router.push('/que')}>
                        <Image src="/fsquare.png" width={219} height={134}/>
                        <div className={fri.text1}>1</div>
                    </div>
                    <div className={fri.square2}>
                        <Image src="/fsquare.png" width={219} height={134}/>
                        <div className={fri.text2}>2</div>
                    </div>
                    <div className={fri.square3}>
                        <Image src="/fsquare.png" width={219} height={134}/>
                        <div className={fri.text3}>3</div>
                    </div>
                    <div className={fri.square4}>
                        <Image src="/fsquare.png" width={219} height={134}/>
                        <div className={fri.text4}>4</div>
                    </div>
                    <div className={fri.square5}>
                        <Image src="/fsquare.png" width={219} height={134}/>
                        <div className={fri.text5}>5</div>
                    </div>
                    <div className={fri.square6}>
                        <Image src="/fsquare.png" width={219} height={134}/>
                        <div className={fri.text6}>6</div>
                    </div>

                    <div className={fri.c}>
                        <Image src="/2c.png" width={1400} height={1200}/>
                    </div>
                </div>
                <div className={fri.chel}>
                    <Image src="/chel_second.png" width={400} height={600}/>
                </div>
            </div>
        );
    }
}

export default Second;