import React from "react";
// import PropTypes from 'prop-types'

const SubTitleComponent = (props) => {
  let {name} =props;
  return <div><h5 className="head_txt3">{name}</h5></div>;
};

SubTitleComponent.propTypes = {};

export default SubTitleComponent;
