import React from "react";
import Spinner from '../assets/img/spinner.gif';

const Loading:React.FC =()=> {
    return(
            <img className="loading-bar" src={Spinner} alt="loading"/>
    )   
}

export default Loading;