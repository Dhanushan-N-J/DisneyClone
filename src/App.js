import { Login } from "./components/Login";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />}> </Route>
        <Route path="/Header" element={<Header />}></Route>
      </Routes>
    </div>
  );
}

export default App;
