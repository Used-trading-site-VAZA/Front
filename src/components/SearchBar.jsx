import { useState } from "react";
import "../cass/SearchBar.scss";

export default function SearchBar(){
    const [text,setText] = useState('');

    const onChange = ( e ) => {
        setText(e.target.value);
    }

    const onSearch = () => {

    }

    return(
        <>  
        
            <input className="SearchFrame" onChange={onChange} value={text} type="text"></input>
            {/* <button onClick={onSearch}>검색</button> */}
        </>
    );

}