import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./components/Pages/Home";
import { About } from "./components/Pages/About";
import Service from "./components/Pages/Service";
import { Blog } from "./components/Pages/Blog";
import { Contact } from "./components/Pages/Contact";
import Error from "./components/Pages/Error";

const App=() => {
  
  return (
    <>
      <Router>
        <NavBar />
        <div className="pages">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/service" element={<Service />} />
            <Route exact path="/blog" element={<Blog />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/*" element={<Error />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
