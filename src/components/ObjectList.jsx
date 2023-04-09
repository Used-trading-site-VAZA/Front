
import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import ObjectInner from "./ObjectInner";
import axios from "axios";


const exData = [
    {title:"너의 물건은"},
    {title:"물건의 아이"},
]

export default function ObjectList(){
     
    const [data,setData] = useState([]);
    useEffect(()=>{
        
        setData(exData);
    },[])

    return (
        <>
            <SearchBar/>
            <ObjectInner data={data}/>
        </>
    );
}