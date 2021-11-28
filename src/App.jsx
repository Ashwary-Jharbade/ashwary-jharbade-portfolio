import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { getStorageData, setStorageData } from "./utilities/localStorage";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ErrorBoundary from "./components/ErrorBoundary";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import About from "./components/About";

function App() {
  const [theme, setTheme] = useState("dark");
  useEffect(() => {
    const { status, data } = getStorageData("theme", { themeColor: "dark" });
    if (!status) {
      return;
    }
    const { themeColor } = data;
    setTheme(themeColor);
  }, []);

  useEffect(() => {
    setStorageData("theme", { themeColor: theme });
  }, [theme]);

  const _themeTogglerHandler = () => {
    if (theme === "light") {
      setTheme("dark");
      return;
    }
    setTheme("light");
  };

  return (
    <>
      <ErrorBoundary>
        <div className={theme}>
          <div className="page-wrapper">
            <div>
              <BrowserRouter>
                <Navbar
                  themeToggler={_themeTogglerHandler}
                  theme={theme}
                ></Navbar>
                <Routes>
                  <Route path="/" element={<Home />}></Route>
                  <Route path="project" element={<Projects />}>
                    <Route path=":projectId" element={<Projects />}></Route>
                  </Route>
                  <Route path="aboutme" element={<About />}></Route>
                  <Route path="contact" element={<Contact />}></Route>
                </Routes>
              </BrowserRouter>
            </div>
          </div>
        </div>
      </ErrorBoundary>
    </>
  );
}

export default App;
