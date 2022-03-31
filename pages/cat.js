import geralt from '../styles/Cat.module.css';
import eskel from '../styles/Cat_NM.module.css'
import {
    Header,
    Button
} from "@sberdevices/plasma-ui";
import {IconArrowLeft, IconArrowRight} from "@sberdevices/plasma-icons";
import {white} from "@sberdevices/plasma-tokens/colors/values";
import {useEffect, useRef, useState} from "react";
import {useRouter} from "next/router";
import * as indexVar from './index';

export function Cat() {
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

    const [index,setValue] = useState(0);
    const massIm=["/dog.png","/travel.png"];

    if (indexVar.device == "mobile") {
        return (
            <div className={geralt.body}>
                <Header
                    className={geralt.headers}
                    back={false}
                >
                    <div className={geralt.backtext}>Выбери категорию</div>
                </Header>
                <div className={geralt.Group}>
                    <div className={geralt.ImageCat}>
                        <img src={massIm[index]} width={400} height={400}></img>
                    </div>
                    <div className={geralt.nameCat}>
                        {items[index]}
                    </div>
                    <div className={geralt.square}>
                        <div className={geralt.textCat}>
                            {text[index]}
                        </div>
                    </div>
                    <div className={geralt.arrow}>
                    <div onClick={() => ClickLeft(event, index, setValue)} className={geralt.buttonArrow}>
                        <Button><IconArrowLeft color={white}/></Button>
                    </div>
                    <div onClick={() => ClickRight(event, index, setValue)} className={geralt.buttonArrow}>
                        <Button><IconArrowRight color={white}/></Button>
                    </div>
                    </div>
                </div>
                <div className={geralt.okButtonDes} onClick={() => router.push('/level')}>
                    <div><Button className={geralt.buttonW} text="ВЫБРАТЬ"/></div>
                </div>
            </div>
        );
    }
    else {
        function handleEnter(){
            router.push('/level');
            console.log("bruh");
        }
        function handleArrowLeft(){
            ClickLeft(event, index, setValue)
        }
        function handleArrowRight(){
            ClickRight(event, index, setValue)
        }
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useKey("Enter",handleEnter);
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useKey("ArrowLeft",handleArrowLeft);
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useKey("ArrowRight",handleArrowRight);
        return(
            <div  tabIndex={-1} className={geralt.body} >
                <Header
                    className={geralt.headers}
                    back={false}
                    tabIndex={-1}
                >
                    <div tabIndex={-1} className={geralt.backtext}>Выбери категорию</div>
                </Header>
                <div tabIndex={-1} className={eskel.ImageCat}>
                    <img tabIndex={-1} src={massIm[index]} width={600} height={600}></img>
                </div>
                <div tabIndex={-1} className={eskel.nameCat}>
                    {items[index]}
                </div>
                <div tabIndex={-1} className={eskel.square}>
                    <div className={eskel.textCat}>
                        {text[index]}
                    </div>
                </div>
                <div  tabIndex={-1} className={eskel.Group}>
                    <div tabIndex={-1} onClick={() => ClickLeft(event, index, setValue)} className={eskel.buttonArrow}>
                        <Button tabIndex={-1}><IconArrowLeft color={white}/></Button>
                    </div>
                    <div tabIndex={-1} onClick={() => ClickRight(event, index, setValue)} className={eskel.buttonArrow}>
                        <Button tabIndex={-1}><IconArrowRight color={white}/></Button>
                    </div>
                </div>
                <div className={eskel.okButtonDes} autoFocus tabIndex={-1} onClick={() => router.push('/level')}>
                    <div tabIndex={-1}><Button tabIndex={-1} className={eskel.buttonW} text="ВЫБРАТЬ"/></div>
                </div>
            </div>
        );
    }
}

function ClickLeft(event,index,setValue)
{
   if(index==1){
       index=0;
       globalThis.index=0;
       setValue(index);
   }
   else{
       index++;
       globalThis.index=index;
       setValue(index);
   }
    console.log(index);
}


function ClickRight(event,index,setValue){
    if(index==0){
        index=1;
        globalThis.index=index;
        setValue(index);
    }
    else{
        index--;
        globalThis.index=index;
        setValue(index);
    }
    console.log(index);
}
export default Cat;
