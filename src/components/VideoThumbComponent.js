import React from "react";
// import PropTypes from 'prop-types'

const VideoThumbComponent = (props) => {
  let { classNm, subject, sub } = props;
  return (
    <div className={classNm + "v px-0 mx-auto mx-0 "}>
      <div className={"img_thumb"}></div>
      <div className="text_color txt2 my-2">{subject.name}</div>
      <div className="txt3 w-90">{sub}</div>
    </div>
  );
};

VideoThumbComponent.propTypes = {};

export default VideoThumbComponent;
