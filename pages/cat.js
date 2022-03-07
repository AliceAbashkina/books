import geralt from '../styles/Cat.module.css';
import eskel from '../styles/Cat_NM.module.css'
import {
    Header,
    Button
} from "@sberdevices/plasma-ui";
import Image from "next/image";
import {router} from "next/client";
import {IconArrowLeft, IconArrowRight} from "@sberdevices/plasma-icons";
import {white} from "@sberdevices/plasma-tokens/colors/values";
import {useState} from "react";
import styled from "styled-components";
import {global} from "styled-jsx/css";

export function Cat() {

    const [index,setValue] = useState(0);
    const massIm=["/dog.png","/travel.png"];

    device.str=1;
    if (typeof window !== 'undefined' && device.str==1) {
        window.addEventListener('keydown', (event) => {
            switch (event.code) {
                case 'Enter':
                    router.push('/level');
                    console.log("bruh");
                    break;
                case 'ArrowLeft':
                    ClickLeft(event, index, setValue)
                    console.log(device.str);
                    break;
                case 'ArrowRight':
                    ClickRight(event, index, setValue)
                    console.log(device.str);
                    break;
            }
        });
    }

    if (device.device == "mobile") {
        return (
            <div className={geralt.body}>
                <Header
                    className={geralt.headers}
                    back={false}
                >
                    <div className={geralt.backtext}>Выбери категорию</div>
                </Header>
                <div className={geralt.ImageCat}>
                    <Image src={massIm[index]} width={400} height={400}></Image>
                </div>
                <div className={geralt.nameCat}>
                    {cat.items[index]}
                </div>
                <div className={geralt.square}>
                    <div className={geralt.textCat}>
                        {cat.text[index]}
                    </div>
                </div>
                <div className={geralt.Group}>
                    <div onClick={() => ClickLeft(event, index, setValue)} className={geralt.buttonArrow}>
                        <Button><IconArrowLeft color={white}/></Button>
                    </div>
                    <div onClick={() => ClickRight(event, index, setValue)} className={geralt.buttonArrow}>
                        <Button><IconArrowRight color={white}/></Button>
                    </div>
                </div>
                <div className={geralt.okButtonDes} onClick={() => router.push('/level')}>
                    <div><Button className={geralt.buttonW} text="ВЫБРАТЬ"/></div>
                </div>
            </div>
        );
    }
    else {
        return(
            <div className={geralt.body}>
                <Header
                    className={geralt.headers}
                    back={false}
                >
                    <div className={geralt.backtext}>Выбери категорию</div>
                </Header>
                <div className={eskel.ImageCat}>
                    <Image src={massIm[index]} width={600} height={600}></Image>
                </div>
                <div className={eskel.nameCat}>
                    {cat.items[index]}
                </div>
                <div className={eskel.square}>
                    <div className={eskel.textCat}>
                        {cat.text[index]}
                    </div>
                </div>
                <div className={eskel.Group}>
                    <div onClick={() => ClickLeft(event, index, setValue)} className={eskel.buttonArrow}>
                        <Button><IconArrowLeft color={white}/></Button>
                    </div>
                    <div onClick={() => ClickRight(event, index, setValue)} className={eskel.buttonArrow}>
                        <Button><IconArrowRight color={white}/></Button>
                    </div>
                </div>
                <div className={eskel.okButtonDes} onClick={() => router.push('/level')}>
                    <div><Button className={eskel.buttonW} text="ВЫБРАТЬ"/></div>
                </div>
            </div>
        );
    }
}

function ClickLeft(event,index,setValue)
{
   if(index==1){
       index=0;
       cat.index=0;
       setValue(index);
   }
   else{
       index++;
       cat.index=index;
       setValue(index);
   }
    console.log(index);
}


function ClickRight(event,index,setValue){
    if(index==0){
        index=1;
        cat.index=index;
        setValue(index);
    }
    else{
        index--;
        cat.index=index;
        setValue(index);
    }
    console.log(index);
}
export default Cat;
