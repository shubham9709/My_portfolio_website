import { Box, Button, Link, Typography } from "@mui/material";
import React from "react";
import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/fontawesome-free-solid';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles({
  icons:{
    padding:"1% 1% 0 1%",
    color:"#BBD6B8"
  }
})
const Footer = () =>{
  const classes = useStyles();
  return (
    <Box style={{textAlign:"center"}}>
    <Typography style={{paddingBottom:"1%",color:"#BBD6B8"}}>Copyright @Shubham</Typography>
      <Box style={{paddingBottom:"2%"}}>
        <a className={classes.icons} href="https://www.instagram.com/shubham_kumar9781/"><FontAwesomeIcon icon={faInstagram} size="lg"/></a>
        <a className={classes.icons} href="https://www.linkedin.com/in/shubham-kumar-6a42101bb/"><FontAwesomeIcon icon={faLinkedin} size="lg" /></a>
        <a className={classes.icons} href="https://github.com/shubham9709"><FontAwesomeIcon icon={faGithub} size="lg" /></a>
      </Box>
    </Box>
  )
}
export default Footer;