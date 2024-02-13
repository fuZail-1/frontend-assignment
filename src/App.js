import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import CatDetail from "./Components/CatDetail";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/catdetail/:id" element={<CatDetail />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
