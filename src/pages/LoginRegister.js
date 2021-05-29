import React, { Fragment, useContext, useState } from "react";
import MetaTags from "react-meta-tags";
import { Link } from "react-router-dom";
import LayoutTwo from "../layouts/LayoutTwo";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import Breadcrumb from "../components/breadcrumbs/Breadcrumb";
import AuthContext from "../contexts/AuthContext";
import AuthActions from "../services/AuthActions";

const LoginRegister = () => {

  const { setIsAuthenticated } = useContext(AuthContext);
  const [credentials, setCredentials] = useState({username: '', password: ''});
  const [error, setError] = useState("");

  const handleChange = ({currentTarget}) => {
      setCredentials({...credentials, [currentTarget.name]: currentTarget.value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    AuthActions.authenticate(credentials)
               .then(response => {
                   setError("");
                   setIsAuthenticated(true);
                   window.location.replace('/');
                })
               .catch(error => {
                   console.log(error);
                   setError("Paramètres de connexion invalides")
                });
  }

  return (
    <Fragment>
      <MetaTags>
        <title>Howard | Login</title>
        <meta
          name="description"
          content="Login page of React JS Crypto Currency Template."
        />
      </MetaTags>
      <LayoutTwo theme="white">
        {/* breadcrumb */}
        <Breadcrumb title="LOGIN - REGISTER" />
        {/* login register content */}
        <div className="dg__account section-padding--xl">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <Tab.Container defaultActiveKey="login">
                  <Nav
                    variant="pills"
                    className="acount__nav justify-content-center"
                  >
                    <Nav.Item>
                      <Nav.Link eventKey="login">Login</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="register">Register</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content>
                    <Tab.Pane eventKey="login">
                      <div className="single__account">
                        <div className="input__box">
                          <span>Email Address</span>
                          <input type="text" onChange={ handleChange } value={ credentials.username }/>
                        </div>
                        <div className="input__box">
                          <span>Password</span>
                          <input type="password" onChange={ handleChange } value={ credentials.password } />
                        </div>
                        <Link
                          className="forget__pass"
                          href={process.env.PUBLIC_URL + "/"}
                        >
                          Lost your password?
                        </Link>
                        <button className="account__btn" onClick={ handleSubmit }>Login</button>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="register">
                      <div className="single__account">
                        <div className="input__box">
                          <span>First Name</span>
                          <input type="text" />
                        </div>
                        <div className="input__box">
                          <span>Last Name</span>
                          <input type="text" />
                        </div>
                        <div className="input__box">
                          <span>Email address</span>
                          <input type="email" />
                        </div>
                        <div className="input__box">
                          <span>Password</span>
                          <input type="password" />
                        </div>
                        <button className="account__btn">Register</button>
                      </div>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>
            </div>
          </div>
        </div>
      </LayoutTwo>
    </Fragment>
  );
};

export default LoginRegister;
