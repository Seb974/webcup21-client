import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutTwo from "../layouts/LayoutTwo";
import Breadcrumb from "../components/breadcrumbs/Breadcrumb";
import ServiceContent from "../components/service-contents/ServiceContent";
import ServiceList from "../containers/service-contents/ServiceList";
import ServiceContentTwo from "../components/service-contents/ServiceContentTwo";

const Service = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>Howard | Service</title>
        <meta
          name="description"
          content="Service page of React JS Crypto Currency Template."
        />
      </MetaTags>
      <LayoutTwo theme="white">
        {/* breadcrumb */}
        <Breadcrumb title="Le service que nous proposons" />
        {/* service content */}
        <ServiceContent />
        {/* <ServiceContentTwo /> */}
        {/* service list */}
        <ServiceList />
      </LayoutTwo>
    </Fragment>
  );
};

export default Service;
