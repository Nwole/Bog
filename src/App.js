import "./App.css";
import TopBar from "./Components/TopBar/TopBar";
import Single from "./Components/Pages/Single/Single";
import Home from "./Components/Pages/Home";
import Write from "./Components/Pages/Write/Write";
import Settings from "./Components/Pages/Settings/Settings";
import Login from "./Components/Pages/Login/Login";
import Register from "./Components/Pages/Register/Register";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const user = true;
  return (
    <Router>
      <div className="App">
        <TopBar />
        <Routes>
          <Route path="/" exact element={user ? <Home /> : <Register />} />
          <Route path="/register" element={user ? <Home /> : <Register />} />
          <Route path="/login" element={user ? <Home /> : <Login />} />
          <Route path="/write" element={user ? <Write /> : <Register />} />
          <Route path="/settings" element={user ? <Settings /> : <Register />} />
          <Route path="/post/:postId" element={<Single />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
