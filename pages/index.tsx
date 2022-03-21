import lutik from '../styles/Home.module.css';
import zoltan from '../styles/Home_NM.module.css';
import Link from "next/link";
import Image from "next/image";
import {useRouter} from "next/router";
import {func} from "prop-types";
import {router} from "next/client";
import {useEffect, useRef} from "react";
import {detectDevice} from "@sberdevices/plasma-ui";

let srcH=1000;
//let deviceKind=detectDevice();
let deviceKind='sds';
console.log(deviceKind)

export function useKey(key,cb){
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

export default function Home(){
    const router = useRouter();
    global.device = {
        device: deviceKind,
        str: 0
    };

    global.score = {
        triangle: 5,
        hearts: 5
    };

    global.cat = {
        items: ["Животные", "Путешествия"],
        glory: ["animals", "travel"],
        text: ["Как хорошо ты знаешь животных?", "Что ты знаешь о других странах?"],
        index: 0
    };

    if (device.device === 'mobile') {
        device.str=0;
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
                    <div className={lutik.rec1}>
                        <Image src="/rect.png" width={20}
                               height={30}/>
                    </div>
                    <div className={lutik.rec2}>
                        <Image src="/rect.png" width={20}
                               height={30}/>
                    </div>
                </div>
                <div className={lutik.rel1}>
                    <div className={lutik.chel}>
                        <img src="/chel.png" width={250}
                               height={300}/>
                    </div>
                    <Link href="/cat">
                        <div>
                            <button className={lutik.square}>
                                <div className={lutik.play}>
                                    <Image src="/play.png" width={85} height={102}/>
                                </div>
                                <div className={lutik.Go}>Начать</div>
                            </button>
                        </div>
                    </Link>
                </div>

            </div>
        );
    }
    else{
        device.str=0;
        function handleEnter(){
            router.push('/cat');
            console.log("s");
        }
        useKey("Enter",handleEnter);
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
                <Link href="/cat">
                    <div>
                        <button className={zoltan.square}>
                            <div className={zoltan.play}>
                                <Image src="/play.png" width={85} height={102}/>
                            </div>
                            <div className={zoltan.Go}>Начать</div>
                        </button>
                    </div>
                </Link>
                <div className={zoltan.rec1}>
                    <Image src="/rect.png" width={20}
                           height={30}/>
                </div>
                <div className={zoltan.rec2}>
                    <Image src="/rect.png" width={20}
                           height={30}/>
                </div>
                <div className={zoltan.rec3}>
                    <Image src="/rect.png" width={38}
                           height={57}/>
                </div>
                <div className={zoltan.circle_fon}>
                    <Image src="/3cir.png" width={900}
                           height={850}/>
                </div>
                <div className={zoltan.chel}>
                    <Image src="/chel_pc.png" width={500}
                           height={470}/>
                </div>
                <div className={zoltan.blur}>
                    <Image src="/blur.png" width={2000}
                           height={800}/>
                </div>
                <div className={zoltan.star}>
                    <Image src="/star.png" width={300}
                           height={298}/>
                </div>
            </div>

        );
    }
}

