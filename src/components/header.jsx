import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import { AppBar, Button, makeStyles } from "@material-ui/core";
import Contactme from "./ContactMe/contactme";
import './css/header.css'
const useStyles = makeStyles({
  root: {
    backgroundColor: "#1D1D1D",
    height: "6rem",
    display: "flex",
  },
  options: {
    color: "#fff",

  },
  white:{
    display:"flex",
    paddingLeft: "28%"
  }

});
const Header = () => {
  const classes = useStyles();
  const [open,setOpen] = useState(false);
  const openDialog=() =>{
    setOpen(true);
  }
  return (
    <div className="header">
      <div className="navbar">
        <div className="logo">My Portfolio</div>
        <div className="nav-links">
          <ul>
            <a href="#home" style={{color:"#EA5455"}}><li>Home</li></a>
            <a href="#aboutme"><li>About Me</li></a>
            <a href="#portfolio"><li>Portfolio</li></a>
            <a onClick={()=>openDialog()} style={{color:"#EA5455"}}><li style={{marginRight:"20px"}}>Contact Me</li></a>
          </ul>
        </div>
      </div>
      <Contactme open={open} setOpen={setOpen} />
    </div>
    // <Box className={classes.root}>
      
    //     <Typography
    //       variant="h4"
    //       style={{ color: "#F7C04A", fontWeight: "bold", margin: "0 10% 7% 1%" }}
    //     >
    //       My Portfolio
    //     </Typography>
    //   <Box className={classes.white} style={{width:"50%"}}>
    //     <a className={classes.options} style={{
    //           fontWeight: "bold",
    //           fontSize: "18px",
    //           marginRight:"17%",
    //           paddingTop:"15px",
    //           color: "#EA5455",
    //           cursor:"pointer",
    //           textDecoration:"none",
    //           scrollBehavior:"smooth"
              
    //     }}
    //     href="#home">
    //       HOME
    //     </a>
    //     <a className={classes.options}
    //     style={{
    //           fontWeight: "bold",
    //           fontSize: "18px",
    //           marginRight:"17%",
    //           paddingTop:"15px",
    //           cursor:"pointer",
    //           textDecoration:"none",
    //           scrollBehavior:"smooth"
    //     }}
    //     href="#aboutme">
    //       ABOUT ME
    //     </a>
    //     <a className={classes.options}
    //     style={{
    //           fontWeight: "bold",
    //           fontSize: "18px",
    //           marginRight:"17%",
    //           paddingTop:"15px",
    //           cursor:"pointer",
    //           textDecoration:"none",
    //           scrollBehavior:"smooth"        }}
    //     href="#portfolio">
    //       PORTFOLIO
    //     </a>
    //     <Typography className={classes.options}
    //     onClick={()=>openDialog()}
    //     style={{
    //           fontWeight: "bold",
    //           fontSize: "18px",
    //           width: "100px",
    //           paddingTop:"15px",
    //           color: "#EA5455",
    //           textAlign:"center",
    //           cursor:"pointer"
    //     }}>
    //       Contact Me
    //     </Typography>
        
    //   </Box>
    //   <Contactme open={open} setOpen={setOpen} />
    // </Box>
  );
};
export default Header;
