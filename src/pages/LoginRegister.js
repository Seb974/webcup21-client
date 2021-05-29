import React, { Fragment, useContext, useState } from "react";
import MetaTags from "react-meta-tags";
import { Link } from "react-router-dom";
import LayoutTwo from "../layouts/LayoutTwo";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import Breadcrumb from "../components/breadcrumbs/Breadcrumb";
import AuthContext from "../contexts/AuthContext";
import AuthActions from "../services/AuthActions";
import UserActions from "../services/UserActions";

const LoginRegister = () => {

  const { setIsAuthenticated } = useContext(AuthContext);
  const [credentials, setCredentials] = useState({username: '', password: ''});
  const defaultError = {name:"", email: "", password: "", confirmPassword: ""}
  const [user, setUser] = useState({name:"", email: "", password: "", confirmPassword: ""});
  const [errors, setErrors] = useState(defaultError);

  const handleChange = ({currentTarget}) => {
      setCredentials({...credentials, [currentTarget.name]: currentTarget.value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    AuthActions.authenticate(credentials)
               .then(response => {
                  setErrors(defaultError);
                   setIsAuthenticated(true);
                   window.location.replace('/');
                })
               .catch(error => {
                   console.log(error);
                   setErrors({...errors, name: "Paramètres de connexion invalides"})
                });
  }

    const handleChangeRegister = ({ currentTarget }) => {
        setUser({...user, [currentTarget.name]: currentTarget.value});
    };

    const handleSubmitRegister = async e => {
        e.preventDefault();
        const apiErrors = {};
        if (user.password !== user.confirmPassword) {
            apiErrors.confirmPassword = "Les mots de passe saisis ne correspondent pas";
            setErrors(apiErrors);
            return ;
        }
        try {
            UserActions.register(user)
                      .then(response => window.location.replace('/'));
            setErrors(defaultError);
        } catch ( e ) {
            if (e.response !== undefined) {
                const { violations } = e.response.data;
                if (violations) {
                    violations.forEach(({propertyPath, message}) => {
                        apiErrors[propertyPath] = message;
                    });
                    setErrors(apiErrors);
                }
            } else {
                console.log(e);
            }
            //TODO : Flash notification d'erreur
        }
    }


  return (
    <Fragment>
      <MetaTags>
        <title>Login</title>
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
                          <input type="text" name="username" onChange={ handleChange } value={ credentials.username }/>
                        </div>
                        <div className="input__box">
                          <span>Password</span>
                          <input type="password" name="password" onChange={ handleChange } value={ credentials.password } />
                        </div>
                        <button className="account__btn" onClick={ handleSubmit }>Login</button>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="register">
                      <div className="single__account">
                        <div className="input__box">
                          <span>First Name</span>
                          <input type="text" name="name" onChange={ handleChangeRegister } value={ user.name }/>
                        </div>
                        <div className="input__box">
                          <span>Email address</span>
                          <input type="email" name="email" onChange={ handleChangeRegister } value={ user.email }/>
                        </div>
                        <div className="input__box">
                          <span>Password</span>
                          <input type="password" name="password" onChange={ handleChangeRegister } value={ user.password }/>
                        </div>
                        <div className="input__box">
                          <span>Confirm password</span>
                          <input type="password" name="confirmPassword" onChange={ handleChangeRegister } value={ user.confirmPassword }/>
                        </div>
                        <button className="account__btn" onClick={ handleSubmitRegister }>Register</button>
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
