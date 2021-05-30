import React from "react";
import ParserHtml from "html-react-parser";
import data from "../../data/service/service.json"
import SectionTitleFour from "../ui/section-titles/SectionTitleFour";

const ServiceContent = () => {
  return (
    <div className="about__dgtaka about--2 pt--140 pb--130">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7 col-md-12 col-sm-12 col-12">
            <div className="dg__secure__inner">
              {/* section title */}
              <SectionTitleFour title="Nout Kapital i rest Lokal" />
              <p>
               { ParserHtml(data.mainText) } 
              </p>
            </div>
          </div>
          <div className="col-lg-5 col-md-12 col-sm-12 col-12 sm__mt--40 md__mt--40">
            <div className="dg__secure__thumb">
              <img
                src={process.env.PUBLIC_URL + "/images/about/contact.png"}
                alt="secure images"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceContent;
