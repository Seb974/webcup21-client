import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";
import AuthContext from "../../contexts/AuthContext";
import AuthActions from "../../services/AuthActions";

const HeaderBtn = () => {
  const { isAuthenticated, setIsAuthenticated, setCurrentUser } = useContext(AuthContext);

  const triggerMobileMenu = () => {
    const offcanvasMobileMenu = document.querySelector(
      "#offcanvas-mobile-menu"
    );
    offcanvasMobileMenu.classList.add("active");
  };

  const handleLogout = () => {
    AuthActions.logout()
               .then(response => {
                   setIsAuthenticated(false);
                   setCurrentUser(AuthActions.getCurrentUser());
               });
  }

  return isAuthenticated ? 
    <div className="header-btn-wrapper">
      <ul className="accounts d-none d-lg-flex">
        <li>
          <a className="active" href="#" onClick={ handleLogout }>Log out</a>
        </li>
      </ul>
    </div>
  :
    <div className="header-btn-wrapper">
      <ul className="accounts d-none d-lg-flex">
        <li>
          <Link to={process.env.PUBLIC_URL + "/login-register"}>Log in</Link>
        </li>
        <li className="active">
          <Link to={process.env.PUBLIC_URL + "/login-register"}>Sign up</Link>
        </li>
      </ul>
      <div className="mobile-button-wrapper d-block d-lg-none text-right">
        <button
          className="mobile-aside-button"
          onClick={() => triggerMobileMenu()}
        >
          <IoIosMenu />
        </button>
      </div>
    </div>
};

export default HeaderBtn;
