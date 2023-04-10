import { useState } from "react";
import ChatInner from "./ChatInner";


export default function Chat(){
    
    const [nowPerson,setNowPerson] = useState();

    return (
        <div>
            <div>
                
            </div>
            <div>
                <ChatInner nowPerson={nowPerson}/>
            </div>
        </div>
    );
}