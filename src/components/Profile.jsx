import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../cass/Profile.scss"

import BlankProfileImg from '../img/bros_blank.jpg';
import SettingBar from "./SettingBar";

export default function Profile(ProfileImg) {
  const [showSettingBar,setShowSettingBar] = useState(false);

  const onClick =() =>{
    if(!showSettingBar){
      setShowSettingBar(true);
      console.log(showSettingBar);
    }
    else{
      setShowSettingBar(false);
      console.log(showSettingBar);
    }
  }

  return (
    <>
      <div className="profileFrame">
        <img className="profileImg" src={ProfileImg===null?`${ProfileImg}`:`${BlankProfileImg}`} alt=""
        onClick={onClick} />
      </div>
      <SettingBar showBar={showSettingBar}/>
    </>
  );
}

