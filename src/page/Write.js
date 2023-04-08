
export default function Write() {

    return (
      <div>
        <form>
          <input></input>
          <input type="number"></input>
          <select name="거래내역">
              <option value="1">직거래</option>
              <option value="2">택배</option>
          </select>
          <input></input>
          <button type="submit">업로드</button>
        </form>
      </div>
    );
  }
  