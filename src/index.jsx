import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import darkContext from "./darkContext";
import './style.scss';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Works from "./pages/Works/Works";
import StudyCase from "./components/StudyCase/StudyCase";

const App = () => {
  if (localStorage.getItem('theme') == null) localStorage.setItem('theme', false);
  const localTheme = localStorage.getItem('theme') === 'true' ? true : false;
  const [isDark, setIsDark] = React.useState(localTheme);

  return (
    <darkContext.Provider value = {{
      isDark,
      toggle: () => {
        setIsDark(!isDark);
          localStorage.setItem('theme', !isDark);
        }
      }}>

      <div className={`global-wrapper ${isDark ? 'dark-mode' : 'light-mode'}`}>
        <Router>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />}/>
            <Route path="/works" element={<Works />}>
              <Route path="/works/:clientname" element={<StudyCase />} />
            </Route>
          </Routes>
        </Router>
      </div>
    </darkContext.Provider>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));