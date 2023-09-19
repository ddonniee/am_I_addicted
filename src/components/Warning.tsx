import React, { useEffect } from "react";

interface WarningProps {
    text: string;
    onClose: (value:boolean) => void;
    isReload : boolean;
}
const Warning:React.FC<WarningProps> = props =>{

    const {text, onClose, isReload} = props;

      useEffect(() => {
            setTimeout(() => {
                onClose(false);
                // 3초 후에 홈 페이지로 이동
                if(isReload) {
                    window.location.assign('/');
                }
            }, 3000);
    }, [onClose]);

    return(
    <div className="modal">
        <div className="timeout-modal">
            <span>{text}</span>
        </div>
    </div>
    )
}
export default Warning;