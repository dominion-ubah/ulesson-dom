import React from "react";
// import PropTypes from 'prop-types'

const SubjectsThumbComponent = (props) => {
  let { classNm, subject } = props;
  return (
    <div className={classNm + " thumb_class flex-grow-1 px-3 mx-2"}>
      {/* <div><img src={subject.icon} alt={subject.name} /></div> */}
      <div className="txt1">{subject.name}</div>
    </div>
  );
};

SubjectsThumbComponent.propTypes = {};

export default SubjectsThumbComponent;
