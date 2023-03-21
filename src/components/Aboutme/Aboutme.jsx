import React from "react";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core";
import "../css/aboutme.css";

const Aboutme = () => {
  return (
        <Box className="aboutme">
          <Typography style={{fontSize:"18px"}} className="aboutpara">A team player and an intellectual personality with optimistic perspective.</Typography>
          <Typography style={{fontSize:"18px"}} className="aboutpara">Quick Learner who works with utmost efficiency and innovative ideas.</Typography>
          <Typography style={{fontSize:"18px"}} className="aboutpara">Problem solving with logistical approach.</Typography>
          <Typography style={{fontSize:"18px"}} className="aboutpara">Passionate and curious about new technologies.</Typography>
        </Box>
      
      
      
      
  )
}
export default Aboutme;