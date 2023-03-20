import React from "react";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles({

  aboutpara:{
    color:"#fff",
    textAlign:"left",
    paddingBottom:"1%",
    paddingLeft:"8%"
  }
})
const Aboutme = () => {
  const classes = useStyles();
  return (
    <Box>
    <Box className={classes.Aboutdiv}>
      
      
        
        <Box style={{width:"1000px"}}>
          <Typography style={{paddingTop:"10%",fontSize:"18px"}} className={classes.aboutpara}>A team player and an intellectual personality with optimistic perspective.</Typography>
          <Typography style={{fontSize:"18px"}} className={classes.aboutpara}>Quick Learner who works with utmost efficiency and innovative ideas.</Typography>
          <Typography style={{fontSize:"18px"}} className={classes.aboutpara}>Problem solving with logistical approach.</Typography>
          <Typography style={{fontSize:"18px"}} className={classes.aboutpara}>Passionate and curious about new technologies.</Typography>
        </Box>
      </Box>
      
      
      
    </Box>
  )
}
export default Aboutme;