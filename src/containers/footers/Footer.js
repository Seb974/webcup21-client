import React, { useState, useEffect } from "react";
import { animateScroll } from "react-scroll";
import {
  FaFacebookSquare,
  FaLinkedin,
  FaTwitterSquare,
  FaVimeoSquare,
  FaTumblrSquare
} from "react-icons/fa";
import { MdExpandLess } from "react-icons/md";

const Footer = ({ theme }) => {
  const [scroll, setScroll] = useState(0);
  const [top, setTop] = useState(0);

  useEffect(() => {
    setTop(100);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    animateScroll.scrollToTop();
  };

  const handleScroll = () => {
    setScroll(window.scrollY);
  };
  return (
    <footer
      className={`footer-area ${theme === "white" ? "footer--2" : "footer--1"}`}
    >
      {/* <div
        className={`dg__footer__container pt-0 ${
          theme === "white" ? "bg--white" : "bg__color--2"
        }`}
      >
        
      </div> */}
      <div
        className={`copyright ${
          theme === "white" ? "bg__color--1" : "bg--black"
        }`}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-sm-6 col-12">
              <div className="copyright__inner">
                <p>Copyright © All Right Reserved by teamimit</p>
              </div>
            </div>
            {/* <div className="col-lg-6 col-sm-6 col-12">
              <ul className="footer__right social__icon">
                <li>
                  <a
                    href="//facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebookSquare />
                  </a>
                </li>
                <li>
                  <a
                    href="//linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin />
                  </a>
                </li>
                <li>
                  <a
                    href="//twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaTwitterSquare />
                  </a>
                </li>
                <li>
                  <a
                    href="//vimeo.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaVimeoSquare />
                  </a>
                </li>
                <li>
                  <a
                    href="//tumblr.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaTumblrSquare />
                  </a>
                </li>
              </ul>
            </div> */}
          </div>
        </div>
      </div>
      <button
        className={`scroll-top ${scroll > top ? "show" : ""}`}
        onClick={() => scrollToTop()}
      >
        <MdExpandLess />
      </button>
    </footer>
  );
};

export default Footer;
