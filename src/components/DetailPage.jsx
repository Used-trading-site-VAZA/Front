import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../cass/DetailPage.scss";
export default function ObjectInner(data){
    let { id } = useParams();
    console.log(id);
    const [Detail,setDetail] = useState(data);
    useEffect(()=>{
        setDetail({
            title: "너의 물건은",
            img: "",
            postid:12333344,
            contents:"물건을 팔기위해 하굈습니다\n제발 사주세요"
          });
    },[]);
    return(
        
        <div className="detailFrame">
            <div><p>{Detail.title}</p></div>
            <div>
                <img src="" alt="" />
            </div>
            <div>
                <div className="contents" readOnly>{Detail.contents}</div>
            </div>
        </div>
    );
}

