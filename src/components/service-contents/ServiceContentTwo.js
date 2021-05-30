import React from "react";
import SectionTitleFour from "../ui/section-titles/SectionTitleFour";
const ServiceContentTwo = () => {
  return (
    <div className="dg__secure__transaction--2 secure--2 section-padding--xl">
      <div className="container">
        <div className="row align-items-center">
        <div className="col-lg-5 col-md-12 col-sm-12 col-12 sm__mt--40 md__mt--40">
            <div className="dg__secure__thumb">
              <img
                src={process.env.PUBLIC_URL + "/images/service/md-img/1.png"}
                alt="secure images"
              />
              <div className="shape-2">
                <img
                  src={process.env.PUBLIC_URL + "/images/service/md-img/2.png"}
                  alt="service images"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-7 col-md-12 col-sm-12 col-12">
            <div className="dg__secure__inner ">
            <SectionTitleFour title="Une devise plus sûre, La crypto-monnaie est géniale pour
                les transactions sécurisées." />
              <p className="title__with__border text-right ">
                Une devise plus sûre, La crypto-monnaie est géniale pour
                les transactions sécurisées.
              </p>
              <p>
                
              </p>
              <p className="text-right mr-0 ">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit,
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default ServiceContentTwo;
