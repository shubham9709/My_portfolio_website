import { Box, Button, Grid, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core";
import React from "react";
import shubham from "./images/shubham1.png"
import "./css/home.css";
const resume = "https://myportfolio9709.netlify.app/resume.pdf";

const Home = () =>{
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
    <Grid className="home" container id="home"  style={{display:"flex"}}>
      <Grid item className="abtme">
      
        <Box style={{display:"flex",padding:"12% 0 0"}}>
          <Typography variant="h3"style={{fontWeight:"bold",color:"#fff"}}>Hi, I'm &nbsp;</Typography>
          <Typography variant="h3" style={{fontWeight:"bold",color:"#EA5455"}}>Shubham</Typography>
        </Box>
        <Box style={{display:"flex",marginBottom:"10%"}}>
          <Typography style={{fontWeight:"bold",color:"#fff",fontSize:"20px"}}>and iam a web</Typography>
          <Typography style={{fontWeight:"bold",color:"#EA5455",fontSize:"20px"}}>Developer</Typography>
        </Box>
        <Button onClick={() =>{downloadFile(resume);}} style={{backgroundColor:"#EA5455",height:"9%"}} variant="contained">Download CV</Button>
      </Grid>
      <Grid item>
        <img src={shubham} className="homeimage" alt="Logo" />
      </Grid>
          
      
    </Grid>
  )
}
export default Home;