import React from 'react'
import Header from "../components/header";
import Res from "../components/Res";
import { useLocation, Link } from "react-router-dom";



const Results = (props) => {

  const location = useLocation();
  const state = location.state;
  console.log(state);

  return (
    <div >
        <Header/>
        <Res loc={location} state={state}/>
    </div>
  )
}

export default Results