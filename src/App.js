import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from "./helpers/ScrollToTop";
import HomeOne from "./pages/MimitHome";
import HomeTwo from "./pages/HomeTwo";
import HomeThree from "./pages/HomeThree";
import HomeFour from "./pages/HomeFour";
import About from "./pages/About";
import Blog from "./pages/Blog";
import BlogRightSidebar from "./pages/BlogRightSidebar";
import BlogPost from "./pages/BlogPost";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import ServiceDetails from "./pages/ServiceDetails";
import Merchants from "./pages/Merchants";
import Team from "./pages/Team";
import Wallet from "./pages/Wallet";
import LoginRegister from "./pages/LoginRegister";
import NotFound from "./pages/NotFound";
import AboutBitcoin from "./pages/AboutBitcoin";
import DataProvider from "./data/dataProvider/dataProvider";

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe("pk_test_51I4RT9KtG62ZyJyqGD3WG0rqQCXyzZirW9GhFVE4Moq8HsMcMcV8y42fTbYihbTUTfMugi6FzdBHuz1uOyr4G7If008xMpch8a");

function App() {
  return (
    <Elements stripe={ stripePromise }>
      <DataProvider>
      <Router>
        <ScrollToTop>
          <Switch>
            <Route
              exact
              path={`${process.env.PUBLIC_URL + "/"}`}
              component={HomeFour}
            />
            {/* <Route
              path={`${process.env.PUBLIC_URL + "/home-one"}`}
              component={HomeOne}
            />
            <Route
              path={`${process.env.PUBLIC_URL + "/home-two"}`}
              component={HomeTwo}
            />
            <Route
              path={`${process.env.PUBLIC_URL + "/home-three"}`}
              component={HomeThree}
            />
            <Route
              path={`${process.env.PUBLIC_URL + "/home-four"}`}
              component={HomeFour}
            /> */}
            <Route
              path={`${process.env.PUBLIC_URL + "/about"}`}
              component={About}
            />
            <Route
              path={`${process.env.PUBLIC_URL + "/about-bitcoin"}`}
              component={AboutBitcoin}
            />
            <Route
              path={`${process.env.PUBLIC_URL + "/blog"}`}
              component={Blog}
            />
            <Route
              path={`${process.env.PUBLIC_URL + "/blog-right-sidebar"}`}
              component={BlogRightSidebar}
            />
            <Route
              path={`${process.env.PUBLIC_URL + "/blog-post"}`}
              component={BlogPost}
            />
            <Route
              path={`${process.env.PUBLIC_URL + "/contact"}`}
              component={Contact}
            />
            <Route
              path={`${process.env.PUBLIC_URL + "/service"}`}
              component={Service}
            />
            <Route
              path={`${process.env.PUBLIC_URL + "/service-details"}`}
              component={ServiceDetails}
            />
            <Route
              path={`${process.env.PUBLIC_URL + "/merchants"}`}
              component={Merchants}
            />
            <Route
              path={`${process.env.PUBLIC_URL + "/team"}`}
              component={Team}
            />
            <Route
              path={`${process.env.PUBLIC_URL + "/wallet"}`}
              component={Wallet}
            />
            <Route
              path={`${process.env.PUBLIC_URL + "/login-register"}`}
              component={LoginRegister}
            />
            <Route
              path={`${process.env.PUBLIC_URL + "/not-found"}`}
              component={NotFound}
            />
            <Route exact component={NotFound} />
          </Switch>
        </ScrollToTop>
      </Router>
      </DataProvider>
    </Elements>
  );
}

export default App;
