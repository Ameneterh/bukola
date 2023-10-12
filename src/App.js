// import logo from "./logo.svg";
// import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./MainPage/LandingPage";
import Profile from "./MainPage/Profile";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<LandingPage />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
      </Routes>
    </div>
  );
}

export default App;
