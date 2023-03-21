import React from "react";
import { makeStyles } from "@material-ui/core";
import { Box, Grid, Typography, Paper } from "@mui/material";
const useStyles = makeStyles({
  maindiv:{
    textAlign: "center",
    // maxWidth: "20rem",
    marginBottom: "3rem",
    padding: "2rem",
    borderRadius: "3px",
    boxShadow: "12px 12px 2px 1px rgba(0,0,255, 0.2)",
    marginLeft:"6%"
    
  },
  image:{
    borderRadius:"3%",
    margin: "0 auto 20px",
    display: "block",
    
  },
  card: {
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
    transition: "0.3s",
    width: "40%"
  }
})
export default function Card(props) {
  const classes = useStyles();
  return (
    <Box className={classes.maindiv} style={{color:"#fff", marginRight:"5%"}}>
      
        <dt>
          <span><img className={classes.image} style={{width:"300px",height:"165px"}} src={props.image} alt="Logo" /></span>
          <span><Typography style={{textAlign:"center",fontSize:"18px"}}>{props.name}</Typography></span>
        </dt>
        <dd>
          <Typography style={{textAlign:"center",width:"300px"}}>{props.detail}</Typography>
        </dd>
      
    </Box>
  )
};