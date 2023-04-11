import { useState } from "react";
import "../cass/WriteFrame.scss";

export default function WriteFrame() {
  const [data, setData] = useState([]);

  return (
    <div className="WriteOutFrame">
      <form>
        <input className="titleInput" type="text"></input>
        <input className="moneyInput" type="number"></input>
        <select className="Transaction" name="거래내역">
          <option value="1">직거래</option>
          <option value="2">택배</option>
        </select>
        <textarea></textarea>
        <p>Tip. 거래시 발생하는 문제는 저희가 책임지지 않아요!!</p>
        <button className="uploadBTN" type="submit">업로드</button>
      </form>
    </div>
  );
}
