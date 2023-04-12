import { Routes } from "react-router";
import { BrowserRouter as Router, Route, useLocation } from "react-router-dom";
import "./App.scss";
import Main from "./page/Home";
import Rogin from "./page/Rogin";
import Write from "./page/Write";
import Signup from "./components/Signup";
import Detail from "./components/DetailPage" ;
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/rogin" element={<Rogin />} />
          <Route path="/" element={<Main />} />
          <Route path="/write" element={<Write />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
