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
const Education = ()=>{
  const classes = useStyles();
  return (
    <Box className={classes.educationheading}>
      <Typography style={{color:"#EA5455",paddingTop:"8%"}}>2017</Typography>
      <Typography>I completed my 10th in 2017 from St. Francis School Jasidih.</Typography>
      <Typography style={{paddingBottom:"2%"}}>Secured 93% in boards.</Typography>
      <Typography style={{color:"#EA5455"}}>2020</Typography>
      <Typography>I completed my 12th in 2020 from Mother's International Academy.</Typography>
      <Typography style={{paddingBottom:"2%"}}>Secured 84% in boards.</Typography>
      <Typography style={{color:"#EA5455"}}>2024</Typography>
      <Typography>Currently persuing BTech in computer science and engineering </Typography>
      <Typography>from Heritage Institute of Technology Kolkata.</Typography>
      <Typography>YGPA till date: 8.49</Typography>
    </Box>
  )
}
export default Education;