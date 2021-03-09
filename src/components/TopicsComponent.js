import React from "react";
import SubTitleComponent from "./SubTitleComponent";
import VideoThumbComponent from "./VideoThumbComponent";
// import PropTypes from 'prop-types'

const dummyTxt1 = [
  "Understanding motion ",
  "Light ",
  "Polution of water ",
  "Microorganism ",

]
const TopicsComponent = (props) => {
  let { title } = props;
  let { data, } = props.data;
  return (
    <>
    <div className="d-flex mx-3 mt-5 py-4">
      <div className="flex-grow-1"> 
      <SubTitleComponent name={title} />
      </div>
      <div>
        <div className="btn_sm">See All</div>
      </div>
    </div>
      <div className="d-flex justify-content-between">
        {data
          ? data.subjects.slice(0, 4).map((el, i) => (
              <>
                <VideoThumbComponent key={i} subject={el} sub={dummyTxt1[i]} classNm={el.name} />
              </>
            ))
          : ""}
      </div>
    </>
  );
};

TopicsComponent.propTypes = {};

export default TopicsComponent;
