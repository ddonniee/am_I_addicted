import React from "react";
import Spinner from '../assets/img/seeking.gif';

const Seeking:React.FC =()=> {
    return(
            <img className="loading-bar" src={Spinner} alt="loading"/>
    )   
}

export default Seeking;