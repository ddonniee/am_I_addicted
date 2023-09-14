import React, { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import { useDispatch, useSelector } from "react-redux";
import { useSelect } from "@mui/base";
import { RootState } from "../store";
import { useLocation } from "react-router-dom";
import { update } from '../reducer/score';
import Warning from "../components/Warning";
import Seeking from "../components/Seeking";
// imgs
import Result1 from '../assets/img/result1.png';
import Result2 from '../assets/img/result2.jpeg';
import Result3 from '../assets/img/result3.jpeg';
import Result4 from '../assets/img/result4.jpeg';
import Kakao from '../assets/img/kakao.png'
// utils
import { shareKakao } from "../utils/shareKakao";
const Result:React.FC=()=>{
    
    const location = useLocation();
    const score = location.state.score;
    const path = location.pathname==='/result' ? 'result-container':''
    const title = process.env.REACT_APP_SHARE_TITLE;
    const url = process.env.REACT_APP_PUBLIC_URL;
    const dispatch = useDispatch();
    useEffect(()=>{
        console.log(score)
        dispatch({type:update.type, payload:path})
    },[])

   
    const result = [
        {
            title: '이시대의 맑.눈.광',
            detail : '대중교통에서도 핸드폰을 안보는 맑눈광..\n 어이어이.. 괜찮은거야?',
            imgSrc : Result1,
        },
        {
            title: '아 응애에요, 도린이 등장',
            detail : '이 밈을 안다면 어쩌면 자신을 속이는걸지도 ..',
            imgSrc : Result2,
        },
        {
            title: '웬만한 숏츠는 다 본 숏츠마스터',
            detail : '1분 이상의 컨텐츠는 시청이 불가하진 않나요?',
            imgSrc : Result3,
        },
        {
            title: '\"도파민 쫓지마...\",\n \"그거..어떻게 하는건데...\"',
            detail : '\"여기 도파민 청 나왔습니다.\" 도파민에 절여진 당신, 일생가?',
            imgSrc : Result4,
        }
    ]
    const [elemIdx, setElemIdx] = useState(-1)
    const countScore = () => {
 
        let elem = -1;
        if(score<=30) {
            setElemIdx(0)
            elem = 0
        }else if(30<score && score<=60) {
            setElemIdx(1)
            elem = 1
        }else if(60<score && score<=80) {
            setElemIdx(2)
            elem = 2
        }else if(score>80) { 
            setElemIdx(3)
            elem = 3
        }
        if(elem===-1) {
            setOpenAlert(true)
        }
    }

    const [openAlert, setOpenAlert] = useState(false)
   useEffect(()=>{
    let timer = setTimeout(()=>{
        countScore();
    },5000)
   },[])

   useEffect(() => {
    // inner-container 클래스를 가진 모든 요소 가져오기
    const elements = document.getElementsByClassName("inner-container");
  
    // HTMLCollection을 배열로 변환
    const elementsArray = Array.from(elements);
  
    // 모든 요소에 클래스 추가
    elementsArray.forEach((element) => {
      element.classList.add("result-container");
    });
  
    const time = setTimeout(()=>{
        elementsArray.forEach((element) => {
            element.classList.remove("result-container");
          });
    },5000)
  }, []);

    return(
        <div className='contents'>
            <div className='progress-bar'></div>
            {
                elemIdx!==-1 &&
                <div className="result-page">
                    <h1 className="title">{result[elemIdx].title}</h1>
                    <span className="detail-txt">{result[elemIdx].detail}</span>
                    <img src={result[elemIdx].imgSrc} alt="result-img"/>

                    <button onClick={()=>shareKakao('title','title')} className='kakao-btn' id='kakao-btn'></button>
                    <label htmlFor="kakao-btn"><span>카카오톡 공유하기</span><img src={Kakao} className="kakao-img"/></label>
                </div>
            }
            {
                openAlert &&
                <Warning text="Please do test first" onClose={()=>setOpenAlert(false)}/>
            }
            {
                elemIdx === -1 && 
                <Seeking />
            }
        </div>
    )
}
export default Result;