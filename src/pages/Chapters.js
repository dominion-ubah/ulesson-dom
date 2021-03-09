import React from "react";
import { Link, navigate } from "@reach/router";
import TitleComponent from "../components/TitleComponent";

const dummyTxt2 = [
  "1. Rational numbers",
  "2. Linear Equations",
  "3. Rational numbers",
];
const dummyTxt3 = [
  "Living and Non-living...",
  "Characteristics of Living Things",
  "Numbers and its properties",
  "Differences Between Plants...",
  "Organisation of Life",
];
function Chapters(props) {
  let { name } = props;
  return (
    <div className="chap">
      <div className="container">
        <div className="title_container">
          <div onClick={() =>navigate(-1)} className="arrow"></div>
          <TitleComponent name={name} />
        </div>
        <div className="txt4 mb-4">{dummyTxt2[0]}</div>
        <div className="d-flex justify-content-between">
          {dummyTxt3.map((el, i) => (
            <div key={i}className="c_card">
               <Link to={"/video"} >
              <div className={"img one v" + i}></div>
              <div className="txt w-90 mx-auto">{el}</div>
              <div className="proc"></div>
            </Link>
            </div>
          ))}
        </div>
        <div className="txt4 my-5">{dummyTxt2[1]}</div>
        <div className="d-flex justify-content-between">
          {dummyTxt3.map((el, i) => (
            <div key={i} className="c_card">
               <Link to={"/video"} >
              <div className={"img one v" + i}></div>
              <div className="txt w-90 mx-auto">{el}</div>
              <div className="proc"></div>
            </Link>
            </div>
          ))}
        </div>
        <div className="txt4 my-5">{dummyTxt2[2]}</div>
        <div className="d-flex justify-content-between">
          {dummyTxt3.map((el, i) => (
            <div key={i} className="c_card">
               <Link to={"/video"} >
              <div className={"img one v" + i}></div>
              <div className="txt w-90 mx-auto">{el}</div>
              <div className="proc"></div>
            </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Chapters;
