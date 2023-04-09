import { useEffect, useState } from "react";

export default function ObjectInner({data}){

    const [innerData,setInnerData] = useState([]);
    useEffect(()=>{
        setInnerData(data);
    },[])
    return(
        <div>

        </div>
    );
}

