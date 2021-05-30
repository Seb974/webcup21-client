import React from "react";
import SectionTitleSix from "../../components/ui/section-titles/SectionTitleSix";
import serviceData from "../../data/service-lists/service-list-one.json";
import ServiceListSingle from "../../components/service-contents/ServiceListSingle";

const ServiceList = () => {
  return (
    <section className="dg__service__area pb--140">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {/* section title */}
            <SectionTitleSix
              title="Nos services"
              text="Notre service est assurée par une équipe de consultants confirmés, spécialisés dans la production de cryptomonnaie."
            />
          </div>
        </div>
      </div>
      <div className="space__dec">
        <div className="custom__service__width">
          {serviceData &&
            serviceData.map((single, key) => {
              return <ServiceListSingle data={single} key={key} />;
            })}
        </div>
      </div>
    </section>
  );
};

export default ServiceList;
