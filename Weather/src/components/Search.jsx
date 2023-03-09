import React, { useState ,useEffect} from 'react';
import Image from "../Assets/bg-image.png"
import { Button } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import { Link, useNavigation } from 'react-router-dom';
import { dblClick } from '@testing-library/user-event/dist/click';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
// 228907a639ad1c6c03cd1cd0d3ff9d11


const Search = (props) => {

  const [city,setCity]=useState('');
  const [weatherData,setWeatherData]=useState({});
  const [error,setError]=useState({});

  const navigate = useNavigate();

  // useEffect(() => {
  //   console.log(weatherData);
  // }, [weatherData]);

  const HandleSubmit = (event) => {
   
    // event.preventDefault();
    // console.log(city);
    // fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=228907a639ad1c6c03cd1cd0d3ff9d11`)
    // .then(response => response.json())
    // .then(data => {
    //   setWeatherData(data);
    //   console.log(data);
    //   // console.log(weatherData);
    // })
    // .catch(error => setError(error));
    event.preventDefault();
    console.log(city);
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=228907a639ad1c6c03cd1cd0d3ff9d11`)
    .then(response => {
      setWeatherData(response.data);
      console.log(response.data);
      if(city===''){
        navigate('/');
        setCity('')
      }
      else{
        navigate('/results', { state:  response.data  })
  
        setCity('')
      }
    })
    .catch(error => setError(error));
    console.log(weatherData);
    if(weatherData.code === '404'){
      console.log('error');
    }
    else{
      console.log('no error');
    }

  }
  

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
    }}
    >
     {/* <div style={{display:'flex',alignContent:'center',justifyContent:'center',marginTop:'20%'}}> */}
     <form /*onSubmit={handleSubmit}*/>
        <input
            type="text"
            id="header-search"
            placeholder="Enter City Name"
            name="s"
            value={city}
            onChange = {(e) => {
              setCity(e.target.value)}}
            style={{height:'50px',borderRadius:'5px',marginTop:'20%',marginLeft:'20%',marginRight:'20%',width:'60%',textAlign:'center',fontSize:'25px'}} 
        />
        <br />
        <h1>{weatherData.name}</h1>

        {/* <Link to="/results" state={weatherData}> */}
             <Button variant="contained" style={{marginLeft:'41%',marginRight:'41%',marginTop:'1%',width:'18%'}} onClick={HandleSubmit} type='submit' ><SearchIcon/>Search</Button>
        {/* </Link> */}
    </form>
     {/* </div> */}
  </div>
  )
}

export default Search


