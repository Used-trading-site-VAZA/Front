


export default function Signup() {


  return (
    <>
      <div></div>
      <div>
        <form>
          <input className="emailInput" type="text" />
          <input className="nameInput" type="text" />
          <input className="passInput" type="text" />
          <input className="rePassInput" type="text" />
          <select name="" id="">
            {}  /*map을 사용해서 지역data 선택자 만들고 그 선택한것을 바탕으로 하위 select에 정보를 선택할 수 있게  */ 
          </select>
        
          <div></div>
          <button type="submit">회원가입</button>
          
        </form>
      </div>
    </>
  );
}
