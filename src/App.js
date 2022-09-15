import './App.style.css';

import { createContext, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Topbar from './components/Topbar';

// creating context to store and use one common project data in whole application
export const DataContext = createContext();

function App() {

  // key
  // *tags: tech tag set by  selection
  // *title: title of project
  // *sDate: starting date of project
  // fDate: finish date of project
  // *status: done || halt || working
  // *abstract: abstract of project
  // description: description of project
  // phase: list of phases => each phase contains-
  //    phTitle = title of phase,
  //    phFlag = flag of phase : waiting || done,
  //    phNote = short note phase,
  //    phDoneDate = finish date of perticular phase
  // link: Link to the project website or github

  // obj data structure
  // const tmpData = [
  //   {
  //     key:0,
  //     tags: "#html#css#javascript",
  //     title: "project_title",
  //     sDate: "24-07-2022",
  //     fDate: "",
  //     status: "cont",
  //     abstract: "project abstract",
  //     description: "project description",
  //     phase: [{ phTitle: "phase title", phFlag: "waiting", phDoneDate: "-" }],
  //     link: ""
  //   }
  // ];

  const [projData, setProjData] = useState([{
    key: 1,
    tags: "#html#css#javascript",
    title: "project_title",
    sDate: "24-07-2022",
    fDate: "",
    status: "cont",
    abstract: "project abstract",
    description: "project description",
    phase: [{ phTitle: "phase title", phFlag: "waiting", phDoneDate: "-" }],
    link: ""
  }]);
  
  // function for adding new project data
  const addNewProject = (projData) => {
    setProjData(projData);
  }

  return (
    <DataContext.Provider value={projData}>
      <div className="App">
        <Topbar />
        <Outlet />
      </div>
    </DataContext.Provider>
  );
}

export default App;