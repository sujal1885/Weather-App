import React from 'react'
import { AppBar, Toolbar ,Typography , makeStyles} from "@mui/material";


const header = () => {

  return (
     <div >
       <AppBar
       style = {{
         position:'fixed',
         width:"100%",
         backgroundColor:"#3CB0A9",
         height:"auto",
         display: 'flex',
         justifyContent: 'center',
         alignItems: 'center',
         border:"1px solid #000000",
       }}
       >
        <Typography
         style = {{
           color:"#803A3A",
           fontFamily:"K2D",
           fontSize:"48px",
           paddingTop:"2px",
           paddingBottom:"2px",
         }}
        >
          WeatherApp
        </Typography>
       </AppBar>
    </div>
  )
}

export default header