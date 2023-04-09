import React from "react";
import { Link } from "react-router-dom";
import "../cass/Profile.scss"

import BlankProfileImg from '../img/bros_blank.jpg';


export default function Profile(ProfileImg) {
  return (
    <>
      <div className="profileFrame">
        <img  className="profileImg" src={ProfileImg===null?`${ProfileImg}`:`${BlankProfileImg}`} alt="" />
      </div>
    </>
  );
}

function settingBar({ user }) {
  return (
    <div>
      <p>{user ? "로딩중" : user}</p>
      <div></div>
      <Link to="/Chat" >
        <p>채팅</p>
      </Link>
      <Link to="/Write" >
        <p>글작성</p>
      </Link>
      <Link to="/" >
        <p>수정</p>
      </Link>
    </div>
  );
}

Profile.defaultProps = {
  ProfileImg: null,
}