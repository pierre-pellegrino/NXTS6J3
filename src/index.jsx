import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import darkContext from "./darkContext";
import workContext from "./displayWorkContext";
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
  // Set theme based on user preferences (localStorage)
  if (localStorage.getItem('theme') == null) localStorage.setItem('theme', false);
  const localTheme = localStorage.getItem('theme') === 'true' ? true : false;
  const [isDark, setIsDark] = React.useState(localTheme);

  // Set works display based on user preferences (localStorage)
  if (localStorage.getItem('workDisplay') == null) localStorage.setItem('workDisplay', false);
  const localWorkDisplay = localStorage.getItem('workDisplay') === 'true' ? true : false;
  const [isRegular, setIsRegular] = React.useState(localWorkDisplay);

  return (
    <darkContext.Provider value = {{
      isDark,
      toggle: () => {
        setIsDark(!isDark);
        localStorage.setItem('theme', !isDark);
      }
    }}>
      <workContext.Provider value = {{
        isRegular,
        toggle: () => {
          setIsRegular(!isRegular);
          localStorage.setItem('workDisplay', !isRegular);
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
      </workContext.Provider>
  </darkContext.Provider>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));