import React, { useState ,useEffect} from 'react';
import Image from "../Assets/bg-image.png"
import { Button } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';


const Search = () => {


  let [responseObj, setResponseObj] = useState({});
  let [city, setCity] = useState('');
  const uriEncodedCity = encodeURIComponent(city);


  function GetData(e) {
    e.preventDefault();
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'e2ca7523a4mshcfa7bab7f8a51ddp140304jsnaaeadd5ac973',
        'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
      }
    };
    
    fetch(`https://open-weather13.p.rapidapi.com/city/${uriEncodedCity}`, options)
      .then(response => response.json())
      .then(response => {
        setResponseObj(response)
      })      
    .catch(err => console.error(err));
 }
 useEffect(() => console.log(responseObj), [responseObj]);
// console.log(responseObj)


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
     <form onSubmit={GetData}>
        <input
            type="text"
            id="header-search"
            placeholder="Enter City Name"
            name="s"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            style={{height:'50px',borderRadius:'5px',marginTop:'20%',marginLeft:'20%',marginRight:'20%',width:'60%',textAlign:'center',fontSize:'25px'}} 
        />
        <br />

        <Link to="/results">
             <Button variant="contained" style={{marginLeft:'41%',marginRight:'41%',marginTop:'1%',width:'18%'}} type='submit'><SearchIcon/>Search</Button>
        </Link>
    </form>
     {/* </div> */}
  </div>
  )
}

export default Search