import { Link } from "react-router-dom";
import { useRef } from "react";

const Navbar = ({ themeToggler, theme }) => {
  const navItemRef = useRef(null);

  const _onHamburgerBtnClickHandler = (e) => {
    if (!e) {
      return;
    }

    const { display } = navItemRef.current.style;
    if (!display || display === "none") {
      navItemRef.current.style.display = "block";
      return;
    }
    navItemRef.current.style.display = "none";
  };

  return (
    <>
      <div className="navbar">
        <div className="container">
          <div className="brand">
            <Link to="/">AJ</Link>
          </div>
          <div className="navbar-items-container">
            <div className="navbar-item lg-item">
              <Link to="/">Home</Link>
            </div>
            <div className="navbar-item lg-item">
              <Link to="/aboutme">About</Link>
            </div>
            <div className="navbar-item lg-item">
              <Link to="/project">Project</Link>
            </div>
            <div className="navbar-item lg-item">
              <Link to="/contact">Contact</Link>
            </div>
            <div onClick={themeToggler} className="toggleContainer navbar-item">
              <div>
                {theme === "light" ? (
                  <div className="toggleSwitch">
                    <span className="fa fa-moon-o"></span>
                  </div>
                ) : null}
              </div>
              <div>
                {theme === "dark" ? (
                  <div className="toggleSwitch">
                    <span className="fa fa-sun-o"></span>
                  </div>
                ) : null}
              </div>
            </div>
            <div className="navbar-item navbar-content-toggler">
              <div>
                <span
                  onClick={_onHamburgerBtnClickHandler}
                  className="fa fa-bars"
                ></span>
              </div>
              <div ref={navItemRef} className="navbar-content">
                <div className="navbar-content-item">
                  <Link to="/">Home</Link>
                </div>
                <div className="navbar-content-item">
                  <Link to="/aboutme">About</Link>
                </div>
                <div className="navbar-content-item">
                  <Link to="/project">Project</Link>
                </div>
                <div className="navbar-content-item">
                  <Link to="/contact">Contact</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
