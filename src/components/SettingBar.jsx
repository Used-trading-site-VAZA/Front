
import { Link } from "react-router-dom";

import '../cass/SettingBar.scss';


export default function SettingBar({ user,showBar }) {  
    if(!showBar){
      return null;
    }
    

    const goChat =()=>{
      
    }

    return (
      <div className="BarFrame">
        <p>{user&&!user===null? user:"로딩중"}</p>
        <div className="line"></div>
        
        <p onClick={goChat}>채팅</p>
       
        <Link to="/Write" >
          <p>글작성</p>
        </Link>
        <Link to="/" >
          <p>수정</p>
        </Link>
      </div>
    );
  }
  
SettingBar.defaultProps={
  user:"김민수",
}