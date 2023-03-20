import { Box, Button, Grid, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core";
import React from "react";
import shubham from "./images/shubham1.png"
const resume = "http://localhost:3000/resume.pdf";
const useStyles = makeStyles({
  image:{
    marginTop:"5%",
    paddingLeft:"20%",
    height:"600px"
  },
  aboutme:{
    padding:"10% 0 0 4%"
  },
  button:{
    backgroundColor:"#EA5455"
  }
})
const Home = () =>{
  const classes = useStyles();
  const downloadFile = (url) => {
    const fileName = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download",fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  }
  return (
    <Grid  md={4} sm={2} id="home"  style={{display:"flex"}}>
      <Box className={classes.aboutme}>
      
        <Box style={{display:"flex",padding:"12% 0 0"}}>
          <Typography variant="h3"style={{fontWeight:"bold",color:"#fff"}}>Hi, I'm &nbsp;</Typography>
          <Typography variant="h3" style={{fontWeight:"bold",color:"#EA5455"}}>Shubham</Typography>
        </Box>
        <Box style={{display:"flex",marginBottom:"10%"}}>
          <Typography style={{fontWeight:"bold",color:"#fff",fontSize:"20px"}}>and iam a web</Typography>
          <Typography style={{fontWeight:"bold",color:"#EA5455",fontSize:"20px"}}>Developer</Typography>
        </Box>
        <Button onClick={() =>{downloadFile(resume);}} style={{backgroundColor:"#EA5455",height:"9%"}} variant="contained">Download CV</Button>
      </Box>
      <img src={shubham} className={classes.image} alt="Logo" />
          
      
    </Grid>
  )
}
export default Home;