import React, { useState, useEffect } from "react";
import "./App.css";
import { Router } from "@reach/router"
import NavComponent from "./components/NavComponent";
import { api } from "./env";
import Dashboard from "./pages/Dashboard";
import Chapters from "./pages/Chapters";
import Video from "./pages/Video";

function App() {
  let [name] = useState("Hassan");
  let [data, setData] = useState("Hassan");

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    fetch(api.API_URL_ENDPOINT)
      .then((d) => d.json())
      .then((d) => {
        console.log("data", d);
        setData(d);
      });
  };
  return (
    <>
      <NavComponent name={name} />
        <Router>
          <Dashboard path="/" name={name} data={data}/>
          <Chapters path="chapters/:name" name={name} data={data}/>
          <Video path="video" data={data}/>
        </Router>
    </>
  );
}

export default App;
