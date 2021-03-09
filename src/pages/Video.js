import React from 'react';
import { navigate } from '@reach/router';
import Poster from "../assets/Group 475.png";
function Video(props) {
  let {data} =props.data;
  return (
    <div className="vid">
    <div className="container text-center">
    <div className="title_container mt-5">
          <div onClick={() => navigate(-1)} className="arrow"></div>
        </div>
        <div>
          <div className="video_container d-flex justify-content-center">
            <video controls height="550px" muted poster={Poster} width="90%" src={data?data.subjects[0].chapters[0].lessons[0].media_url:""}></video>
          </div>
          
            <h4 className="mt-5 txt5">The number line representation</h4>
            <h4 className="txt6 mb-4 mt-3">Rational numbers</h4>
            <div className="next_vid mx-auto">Next</div>
        </div>
    </div>
    </div>

  );
}

export default Video;
