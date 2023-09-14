import React, { useEffect } from "react";

interface WarningProps {
    text: string;
    onClose: (value:boolean) => void;
}
const Warning:React.FC<WarningProps> = props =>{

    const {text, onClose} = props;

      useEffect(() => {
        setTimeout(() => {
            onClose(false);
            // 3초 후에 홈 페이지로 이동
            window.location.assign('/');
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

// const Style = styled.div`
//     .timeout-modal {
//         background : black; padding: 10px 15px; border-radius: 10px;
//         span {
//             color: white; font-size: 1.2rem; font-weight: 600;
//         }
//     }
// `