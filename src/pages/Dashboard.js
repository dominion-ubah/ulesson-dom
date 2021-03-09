import React from 'react';
import SubjectsComponent from '../components/SubjectsComponent';
import TitleComponent from '../components/TitleComponent';
import TopicsComponent from '../components/TopicsComponent';

function Dashboard(props) {
  let {name, data} =props
  return (
    <div className="dash">
    <div className="container dash">
      <TitleComponent name={"Hello "+name} />
      <SubjectsComponent data={data}/>
      <TopicsComponent data={data} title={"Recently watched topics"} />
      <TopicsComponent data={data} title={"Recommended videos"} />
    </div>
    </div>

  );
}

export default Dashboard;
