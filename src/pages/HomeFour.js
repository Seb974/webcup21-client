import React, { Fragment, useContext, useState } from "react";
import MetaTags from "react-meta-tags";
import LayoutTwo from "../layouts/LayoutTwo";
import BlogGridTwo from "../containers/blog-grids/BlogGridTwo";
import SoftwareDownloadTwo from "../components/software-downloads/SoftwareDownloadTwo";
import CounterUp from "../containers/counter-ups/CounterUp";
import WorkProcess from "../containers/work-processes/WorkProcess";
import LiveChartTwo from "../components/live-chart/LiveChartTwo";
import HowWorks from "../components/how-works/HowWorks";
import CurrencyCalculationTwo from "../components/currency-calculations/CurrencyCalculationTwo";
import HeroSliderFour from "../containers/hero-sliders/HeroSliderFour";
import Map from "../components/map/Map";
import FarmContext from "../contexts/FarmContext";
import PaymentForm from "../components/payment/PaymentForm";
import PopUp from "../components/modal/PopUp";

const HomeFour = () => {
  const { farms } = useContext(FarmContext);
    console.log(farms);
  return (
    <Fragment>
      <MetaTags>
        <title>Accueil</title>
        <meta
          name="description"
          content="Bienvenue sur teamimit.re. votre site de cryptomonnaie"
        />
      </MetaTags>
      <LayoutTwo theme="white">
        {/* hero slider */}
        <HeroSliderFour />
        {(farms && farms.length > 0 ) && (
          <PopUp data={farms[Math.floor(Math.random()* farms.length)]}/>
        )}
        
        {/* how works */}
        <HowWorks />
        {/* live chart */}
        {/* <LiveChartTwo /> */}
        {/* work process */}
        <WorkProcess />
        {/* counter up */}
        {/* <Map displayedRelaypoints={farms} /> */}
        {/* <PaymentForm amount={149} name={"Investir"} available={true} /> */}
        <CounterUp backgroundImage="/images/bg/4.jpg" />
        {/* currency calculation */}
        {/* <CurrencyCalculationTwo /> */}
        {/* software download */}
        {/* <SoftwareDownloadTwo /> */}
        {/* blog grid */}
        {/* <BlogGridTwo /> */}
        <Map displayedRelaypoints={farms} />
      </LayoutTwo>
    </Fragment>
  );
};

export default HomeFour;
