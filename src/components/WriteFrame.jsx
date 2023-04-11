import { useState } from "react";
import '../cass/WriteFrame.scss';

export default function WriteFrame(){
    const [data,setData] = useState([]);

    return(
        <div className="WriteOutFrame">
        <form>
          <input></input>
          <input type="number"></input>
          <select name="거래내역">
              <option value="1">직거래</option>
              <option value="2">배</option>
          </select>
          <textarea></textarea>
          <button type="submit">업로드</button>
        </form>
      </div>
    );
}