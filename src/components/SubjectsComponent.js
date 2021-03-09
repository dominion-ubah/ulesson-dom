import { Link } from "@reach/router";
import React from "react";
import SubjectsThumbComponent from "./SubjectsThumbComponent";
// import PropTypes from 'prop-types'

const SubjectsComponent = (props) => {
  let {data} = props.data;
  return (
  <div className="d-flex  ">
    {/* {console.log("as",data.subjects)} */}
    {data?data.subjects.map((el, i) => (
      <Link to={"/chapters/"+el.name}>
      <SubjectsThumbComponent key={i} subject={el} classNm={el.name}/>
      </Link>
    )):""}
  </div>
  );
};

SubjectsComponent.propTypes = {};

export default SubjectsComponent;
