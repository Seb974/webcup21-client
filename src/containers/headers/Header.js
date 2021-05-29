import PropTypes from "prop-types";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../components/header/Logo";
import Navigation from "../../components/header/Navigation";
import HeaderBtn from "../../components/header/HeaderBtn";
import MobileMenu from "../../components/header/MobileMenu";
import AuthContext from "../../contexts/AuthContext";

const Header = ({ theme }) => {
  const [scroll, setScroll] = useState(0);
  const [headerTop, setHeaderTop] = useState(0);
  const { isAuthenticated } = useContext(AuthContext);

  useEffect(() => {
    const header = document.querySelector("header");
    setHeaderTop(header.offsetTop);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };
  console.log(theme);
  return (
    <header
      className={`dg__header header--absolute space-right-left ${
        scroll > headerTop ? "stick" : ""
      }`}
    >
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-2 col-xl-2 col-6">
            {/* logo */}
            {/* <Logo
              image={
                theme === "white" ? "/images/logo/2.png" : "/images/logo/1.png"
              }
            /> */}  <Link to={process.env.PUBLIC_URL + "/"}><h2 className="text-white fs-2 text">Teamimit.re</h2></Link>
          </div>
          <div className="col-lg-7 col-xl-8 d-none d-lg-block">
            {/* navigation */}
            <Navigation />
          </div>
          <div className="col-lg-3 col-xl-2 col-6">
            {/* header buttons */}
            
            <HeaderBtn />
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <MobileMenu />
    </header>
  );
};

Header.propTypes = {
  theme: PropTypes.string
};

export default Header;
