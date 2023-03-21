import { Box, Typography } from "@mui/material";
import React from "react";
import Aboutme from "./Aboutme/Aboutme";
import { makeStyles } from "@material-ui/core";
import { useState } from "react";
import Education from "./Aboutme/education";
import shubham from "./images/shubham-modified.png"
import "./css/aboutme.css"
import Skills from "./Aboutme/skills";

const About = () => {
  // const classes = useStyles();
  const [click, setClick] = useState("");
  const handleClick = (e) => {
    setClick(e.target.getAttribute("name"));
  };
  return (
    <Box id="aboutme">
    <Box className="Aboutdiv"  >
      <Typography className="AboutHeading" variant="h3">
        ABOUT ME
      </Typography>
      <Box className="flexbox" style={{ display: "flex",paddingLeft:"24%" }}>
        <Typography
          name="about_me"
          className="subheading"
          onClick={(e)=> handleClick(e)}
        >
          About Me
        </Typography>
        <Typography
          name="education"
          className="subheading"
          onClick={(e)=> handleClick(e)}
        >
          Education
        </Typography>
        <Typography
          name="skills"
          className="subheading"
          onClick={(e)=> handleClick(e)}
        >
          Skills
        </Typography>
      </Box>
      <Box className="flexbox" style={{display:"flex"}}>
        <img src={shubham} className="aboutmeimage" alt="Logo" />
        {click==="education" ? <Education className="textinaboutme"/> :click==="skills"? <Skills className="textinaboutme"/> : <Aboutme className="textinaboutme"/>}
      </Box>
      
      </Box>
    </Box>
  );
};
export default About;
