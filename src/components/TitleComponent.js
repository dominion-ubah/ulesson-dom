import React from "react";
// import PropTypes from 'prop-types'

const TitleComponent = (props) => {
  let {name} =props;
  return <div className="head_txt1 my-5">{name},</div>;
};

TitleComponent.propTypes = {};

export default TitleComponent;
