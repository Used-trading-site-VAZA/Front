import { Routes } from "react-router";
import { BrowserRouter as Router, Route, useLocation } from "react-router-dom";
import "./App.scss";
import Main from "./page/Home";
import Rogin from "./page/Rogin";
import Write from "./page/Write";
import Signup from "./components/Signup";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/rogin" element={<Rogin />} />
          <Route path="/" element={<Main />} />
          <Route path="/Write" element={<Write />} />
          <Route path="/Signup" element={<Signup />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
