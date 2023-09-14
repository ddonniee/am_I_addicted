import React, { useRef,useEffect } from "react";
import {gsap} from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import {Box, Button} from '@mui/material';

//imgs 
import Image from '../assets/img/main.jpeg';

gsap.registerPlugin(ScrollTrigger);

const Main:React.FC=()=>{

    const onStart = (event: React.MouseEvent<HTMLButtonElement>) =>{
        window.location.assign('/test')
    }
    
    const titleRef = useRef(null);
    const imgRef = useRef(null);
    const buttonRef = useRef(null);
    const detailRef = useRef(null);
    
    useEffect(() => {
        const titleAnimation = gsap.timeline()
          .from(titleRef.current, {
            duration: 0.3,
            opacity: 0,
            delay:1,
            y: 100,
           
          })
          .to(titleRef.current, {
            duration: 0.3,
            opacity: 1,
            y: 0,
            ease: "elastic"
          
    });
          
        const imageAnimation = gsap.timeline()
          .from(imgRef.current, {
            duration: 0.3,
            opacity: 0,
            delay:2,
            y: 50,
          })
          .to(imgRef.current, {
            duration: 0.3,
            opacity: 1,
            y: 0,
            ease: "elastic"
          });
          const detailAnimation = gsap.timeline()
          .from(detailRef.current, {
            duration: 0.3,
            opacity: 0,
            delay:3,
            y: 50,
          })
          .to(detailRef.current, {
            duration: 0.3,
            opacity: 1,
            y: 0,
            ease: "elastic"
          });
          const buttonAnimation = gsap.timeline()
          .from(buttonRef.current, {
            duration: 0.3,
            opacity: 0,
            delay:4,
            y: 50,
          })
          .to(buttonRef.current, {
            duration: 0.3,
            opacity: 1,
            y: 0,
            ease: "elastic"
          });

        return () => {
          // 컴포넌트가 unmount될 때 애니메이션을 제거
          titleAnimation.kill();
          imageAnimation.kill();
          buttonAnimation.kill();
        };
      }, []);

    const text = "너! 내 ㄷ..도..도도돋..⭐︎";
    return(
    <div className="main-container">
    <div className="title" ref={titleRef}>
    {text.split('').map((char, index) => (
        <div key={index}  style={{display:'inline-block'}}>
            {char}
        </div>
        ))}
        </div>
    <div className="contents">
        <img src={Image} alt="main-img" ref={imgRef}></img>
        <div className="detail-txt" ref={detailRef}>얼마나 절여졌을까 ? 도파민 테스트하기! </div>
        <button className="custom-btn" onClick={onStart} ref={buttonRef}>ㄱㄱ</button>
    </div>
    </div>
    )
}
export default Main;