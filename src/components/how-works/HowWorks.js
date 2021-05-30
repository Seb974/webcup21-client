import React from "react";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";

const HowWorks = () => {
  return (
    <div className="dg__work__area how__work">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12 col-12">
            <div className="thumb">
              <ReactPlayer url="https://www.youtube.com/watch?v=AiQSONadLxY" />
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 col-12 sm__mt--40 md__mt--40">
            <div className="">
              <h2>C'est le moment d'investir </h2>
              <h6>
                Participez à l'économie locale en investissant dans la
                cryptomonnaie.
              </h6>
              <p>
                Par le biais de ferme de minage, la réunion trouve un second
                souffle. Teamimit vous propose d'investir dans le mimit'coin et
                en percevoir des bénéfices dans le temps.
              </p>
              <Link
                className="slide__btn dg__btn"
                to={process.env.PUBLIC_URL + "/blog-post"}
              >
                PARTICIPER
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWorks;
