import "./App.css";
import Home from "./components/home/Home";
import Work from "./components/work/Work";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";

import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="max-w-[1300px] mx-auto w-[90%]">
      <Navbar/>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
        </Routes>
      </Router>
      </div>
  )
}

export default App;
