import React from "react";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core";
const useStyles=makeStyles({
  educationheading:{
    color:"#fff",
    textAlign:"left",
    paddingBottom:"1%",
    paddingLeft:"5%"
  }

})
const Skills = ()=>{
  const classes = useStyles();
  return (
    <Box className={classes.educationheading}>
      <Typography style={{color:"#EA5455",paddingTop:"13%"}}>Web Developer</Typography>
      <Typography style={{paddingBottom:"2%"}}>A Full Stack MERN Developer.</Typography>

      <Typography style={{color:"#EA5455"}}>Languages</Typography>
      <Typography style={{paddingBottom:"2%"}}>C/C++, Javascript</Typography>

      <Typography style={{color:"#EA5455"}}>Databases</Typography>
      <Typography style={{paddingBottom:"2%"}}>MongoDB</Typography>

      <Typography style={{color:"#EA5455"}}>Web Development</Typography>
      <Typography style={{paddingBottom:"2%"}}>HTML,CSS,Bootstrap,React,Matrial UI</Typography>

      <Typography style={{color:"#EA5455"}}>Problem Solving</Typography>
      <Typography>Data Structures and Algorithms.</Typography>
    </Box>
  )
}
export default Skills;