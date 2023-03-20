import { Box, Typography } from "@mui/material";
import React from "react";
import Aboutme from "./Aboutme/Aboutme";
import { makeStyles } from "@material-ui/core";
import { useState } from "react";
import Education from "./Aboutme/education";
import shubham from "./images/shubham-modified.png"
import Skills from "./Aboutme/skills";
const useStyles = makeStyles({
  Aboutdiv: {
    padding: "10% 4% 0 0",
    textAlign: "center",
  },
  image:{
    width:"15%",
    paddingTop:"3%",
    paddingLeft:"4%"
  },
  AboutHeading: {
    color: "#EA5455",
  },
  subheading: {
    color: "#fff",
    paddingTop: "2%",
    paddingRight: "2%",
    cursor: "pointer",
    textDecoration:"underline",
    textDecorationColor:"#EA5455",
    textDecorationThickness:"0.25rem"
  },
});

const About = () => {
  const classes = useStyles();
  const [click, setClick] = useState("");
  const handleClick = (e) => {
    setClick(e.target.getAttribute("name"));
  };
  return (
    <Box id="aboutme">
    <Box className={classes.Aboutdiv}  >
      <Typography className={classes.AboutHeading} variant="h3">
        ABOUT ME
      </Typography>
      <Box style={{ display: "flex" }}>
        <Typography
          name="about_me"
          className={classes.subheading}
          style={{ fontSize: "22px", paddingLeft: "24%" }}
          onClick={(e)=> handleClick(e)}
        >
          About Me
        </Typography>
        <Typography
          name="education"
          className={classes.subheading}
          style={{ fontSize: "22px" }}
          onClick={(e)=> handleClick(e)}
        >
          Education
        </Typography>
        <Typography
          name="skills"
          className={classes.subheading}
          style={{ fontSize: "22px" }}
          onClick={(e)=> handleClick(e)}
        >
          Skills
        </Typography>
      </Box>
      <Box style={{display:"flex"}}>
        <img src={shubham} className={classes.image} alt="Logo" />
        {click==="education" ? <Education/> :click==="skills"? <Skills/> : <Aboutme/>}
      </Box>
      
      </Box>
    </Box>
  );
};
export default About;
