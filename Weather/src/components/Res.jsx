import React from 'react'
import Image from "../Assets/R.gif"
import { useLocation, Link } from "react-router-dom";


const Res = (props) => {


  return (
    <div
    style={{ backgroundImage:`url(${Image})` ,
      position:'fixed',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      width: '100vw',
      height: '100vh',
      left:'0px'
    }}>

    <div
    style={{
      position:'absolute',
      height:'45%',
      width:'40%',
      marginLeft:'30%',
      marginRight:'30%',
      backgroundColor:'#639088',
      marginTop: window.innerWidth < 1002 ? '25%' : '16%',
      border:'4px solid #700A0A',
      borderRadius:'22px',
      color:'white',
      textAlign:'center',
      fontSize:'20px',
      paddingTop:'20px',
    }}
    >

      <p>City : {props.state.name}</p>
      <p>Temperature : {(props.state.main.temp-273).toFixed(2)} °C</p>
      <p>Pressure : {props.state.main.pressure}</p>
      <p>Visibility : {props.state.visibility}</p> 

    </div>

    </div>
  )
}

export default Res