import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import SearchBar from "./SearchBar";
import "../cass/ObjectList.scss";
import axios from "axios";

const exData = [
  {
    title: "너의 물건은",
    img: "",
    postid:12333344
  },
  {
    title: "물건의 아이",
    img:"",
    postid:12333345
  },
  {
    title: "너의 물건은",
    img: "",
    postid:12333346
  },
  {
    title: "물건의 아이",
    img:"",
    postid:12333347
  },
  {
    title: "물건의 문단속",
    img: "",
    postid:12333348
  },
  {
    title: "물건의 아이",
    img:"",
    postid:12333349
  },
  {
    title: "너의 물건은",
    img: "",
    postid:12333350
  },
  {
    title: "물건의 아이",
    img:"",
    postid:12333351
  },
];

export default function ObjectList() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  

  useEffect(() => {
    setData(exData);
  }, []);

  const goDetailPage = (id) =>{
    navigate(`/detail/${id}`);
  }


  return (
    <>
      <SearchBar />

      <div className="filterFrame">
        
      </div>
      <div className="line_1"></div>
      <div className="frame">
        {data.map((data) => (
          <div onClick={()=>goDetailPage(data.postid)} className="list">
            <div className="img">
              <img  src={data.img} alt="" />
            </div>
            <div className="title"><p>{data.title}</p></div>
            <div className="sale"><p>{}</p> </div>
          </div>
          
        ))}
      </div>
    </>
  );
}
