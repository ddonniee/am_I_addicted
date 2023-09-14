import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import gsap from 'gsap';
// utils
import { sampleJson } from '../data/database';
import { useDispatch, useSelector } from 'react-redux';
import { increment } from '../reducer/score';
import { RootState } from '../store';
// components
import Loading from '../components/Loading';
// img
import One1 from '../assets/img/1-1.jpeg';
import One2 from '../assets/img/1-2.jpeg';
import Two1 from '../assets/img/2-1.jpeg';
import Two2 from '../assets/img/2-2.png'
import Three1 from '../assets/img/3-1.jpeg';
import Three2 from '../assets/img/3-2.png'
import Four1 from '../assets/img/4-1.png';
import Four2 from '../assets/img/4-2.png'
import Five1 from '../assets/img/5-1.jpeg';
import Five2 from '../assets/img/5-2.jpeg';
import Six1 from '../assets/img/6-1.jpeg';
import Six2 from '../assets/img/6-2.jpeg';
import Seven1 from '../assets/img/7-1.jpeg';
import Seven2 from '../assets/img/7-2.jpeg';
import Eight1 from '../assets/img/8-1.jpeg';
import Eight2 from '../assets/img/8-2.jpeg';
import Nine1 from '../assets/img/9-1.jpeg';
import Nine2 from '../assets/img/9-2.png';
import Ten1 from '../assets/img/10-1.jpeg';
import Ten2 from '../assets/img/10-2.jpeg';


interface DataItem {
    question: string;
    answer: Record<number, string>[];
  }
const Test:React.FC=()=>{

    const boxRef1 = useRef(null);
    const boxRef2 = useRef(null);
    const boxRef3 = useRef(null);

    const data: DataItem[] = sampleJson.data;
    const navigate = useNavigate();

    const dispatch = useDispatch()
    const score = useSelector((state:RootState)=>state.score.value);
    const [cnt, setCnt] = useState(0)

    // kakao sharing
    // useEffect(()=>{
    //     const script = document.createElement("script");
    //     script.src = "https://developers.kakao.com/sdk/js/kakao.js";
    //     script.async = true;
    //     document.body.appendChild(script);
    //     return () => document.body.removeChild(script);
    //   }, []);

    const onLoadResult = () =>{
        // window.location.assign('/result')
        navigate('/result', {
            state: {
                score: score
            }
        })
    }
    const [isProceed, setIsProceed] = useState(false)
    const onAddScroe = (idx:number)=> {
        setIsProceed(true);
        let newScore = 0;
        console.log(score,newScore)
        if(idx===0) {
            newScore = score+1;
        }else {
            newScore = score+10;
        }
        dispatch({type:increment.type, payload:newScore})
        if(cnt!==9) {
            setCnt(cnt+1)
            setImageIndex(0)
        }else {
            onLoadResult()
        }
        // const loadingTimer = setTimeout(() => {
        //     setIsProceed(false)
        //   }, 1000)
        //   clearTimeout(loadingTimer);
    }
   
    /**n img animation */
    const imgRef = useRef(null);
    const [imageIndex, setImageIndex] = useState(0);
    const imagePaths:string[][] = [
        [One1, One2],
        [Two1, Two2],
        [Three1, Three2],
        [Four1, Four2],
        [Five1, Five2],
        [Six1, Six2],
        [Seven1, Seven2],
        [Eight1, Eight2],
        [Nine1, Nine2],
        [Ten1, Ten2],
    ];

     // 이미지 변경 함수, 2초마다 호출
     useLayoutEffect(()=>{
        // 뒤로가기로 왔을 때 점수 초기화
        if(cnt===0) {
            dispatch({type:increment.type, payload:0})
        }
        const inntervalId = setInterval(()=>{
            setImageIndex(prevIndex=>(prevIndex+1)%imagePaths[cnt].length)
        },3000)
       
        const firstAnimation = gsap.timeline()
        .from(boxRef1.current, {
          duration: 0.3,
          opacity: 0,
          y: -50,
          onComplete: () =>{
            const timer = setTimeout(()=>{
                setIsProceed(false)
            },500)
            // clearTimeout(timer)
          }
        })
        .to(boxRef1.current, {
            duration: 0.3,
            opacity: 1,
            y: 0,
        })
        const secondAnimation = gsap.timeline()
          .from(boxRef2.current, {
            duration: 0.3,
            opacity: 0,
            delay:1,
          })
          .to(boxRef2.current, {
            duration: 0.3,
            opacity: 1,
            ease: "elastic"
          });
          const thirdAnimation = gsap.timeline()
          .from(boxRef3.current, {
            duration: 0.3,
            opacity: 0,
            delay:2,
            y: 50,
          })
          .to(boxRef3.current, {
            duration: 0.3,
            opacity: 1,
            y: 0,
            ease: "elastic"
          });

        return () => {
          // 컴포넌트가 unmount될 때 애니메이션을 제거
          firstAnimation.kill();
          secondAnimation.kill();
          thirdAnimation.kill();
          clearInterval(inntervalId);
        };
      
     },[cnt])

     useEffect(()=>{
        const imageAnimation = gsap.timeline()
        .from(imgRef.current, {
            duration: 0.5,
            opacity: 0
        })
        .to(imgRef.current, {
            duration: 0.5,
            opacity:1
        })
        return () => {
            imageAnimation.kill();
        }
     },[imageIndex])


      return(
          <>
          <div className='contents test-container' ref={boxRef1}>
            <div className='progress-bar'></div>
            <div className='title' ref={boxRef2}>{data[cnt].question}</div>
            <div className='question' ref={boxRef3}>
            <img ref={imgRef} src={imagePaths[cnt][imageIndex]}></img>
                {
                    data[cnt].answer.map((item,idx)=>{
                        return (
                            <button className='custom-btn' onClick={()=> cnt!==9 ? onAddScroe(idx) : onLoadResult()} key={idx}>{item[idx+1]}</button>
                        )
                    })
                }
            </div>
            
          </div>
          {
            isProceed &&
            <Loading />
            }
        </>
      )
  }
  export default Test;