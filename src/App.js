import { useState } from 'react';
import './App.css';
import './components/Header/Header.js';
import Header from './components/Header/Header.js';
import Forms from './components/Forms/Forms';
import MiOrg from './components/MiOrg/MiOrg';
import Team from './components/Team';

function App() {

  const teamsArray = [
    {
      title: "Programacion",
      primaryColor: "#57C278",
      secondaryColor: "#D9F7E9"
    },
    {
      title: "Front End",
      primaryColor: "#82CFFA",
      secondaryColor: "#E8F8FF"
    },
    {
      title: "Data Science",
      primaryColor: "#A6D157",
      secondaryColor: "#F0F8E2"
    },
    {
      title: "Devops",
      primaryColor: "#E06B69",
      secondaryColor: "#FDE7E8"
    },
    {
      title: "UX y Diseño",
      primaryColor: "#DB6EBF",
      secondaryColor: "#FAE9F5"
    }
]
  const [displayForms, setDisplay]=useState(false);

  const switchDisplay = () => {
    setDisplay(!displayForms);
  }
  return (
    <div>
        <Header/>   
        {displayForms ? <Forms/> : <></> };

        <MiOrg switchDisplay={switchDisplay} />

        { teamsArray.map( (teams)=> <Team dat={teams} ></Team>) }             
        
    </div>
  );
}

export default App;
