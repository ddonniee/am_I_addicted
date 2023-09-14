import React from "react"

declare const window: any; // typescript 타입 명시를 위해
  
let MY_KEY = 98448;
export const shareKakao=(title:string, url:string)=>{
    if(window.Kakao) {
        const kakao = window.Kakao;
        if(!kakao.isInitialized()) {
            kakao.init(process.env.REACT_APP_KAKAO_SHARE_KEY);
            // kakao.init('84b0a9e347bcf91463842245d45520d9')
        }
        kakao.Share.createCustomButton({
            container: '#kakao-btn',
            templateId:MY_KEY ,
            templateArgs: {
              title: '제목 영역입니다.',
              description: '설명 영역입니다.',
            },
          });
    }
}