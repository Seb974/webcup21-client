import PropTypes from "prop-types";
import React from "react";

const SectionTitleThree = ({ title, text, theme }) => {
  return (
    <div className="section__title--3 text-center">
      <h2 className={theme ?  theme + " with__line" : " with_line" }>{title}</h2>
      <p className={theme && theme}>{text}</p>
    </div>
  );
};

SectionTitleThree.propTypes = {
  text: PropTypes.string,
  title: PropTypes.string
};

export default SectionTitleThree;
