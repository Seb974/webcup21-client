import React from "react";

const ServiceContentTwo = () => {
  return (
    <div className="dg__secure__transaction--2 secure--2 section-padding--xl">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7 col-md-12 col-sm-12 col-12">
            <div className="dg__secure__inner">
              <h2 className="title__with__border">
                Une devise plus sûr, La crypto-monnaie est géniale pour
                les transactions sécurisées.
              </h2>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore.
              </p>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit,
              </p>
            </div>
          </div>
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
        </div>
      </div>
    </div>
  );
};

export default ServiceContentTwo;
