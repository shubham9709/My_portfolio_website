import { Box, Typography, Paper } from "@mui/material";
import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import detail from "./Detail";
import Card from "./Card";
const useStyles = makeStyles({
  mainDiv:{
    padding: "3% 5% 0 0",
    color:"#EA5455",

  },
  card:{
    display: "flex",
    flexWrap: "wrap",
    flexDirection:"row",
    justifyContent: "center",
    alignItems:"center",
    textAlign: "center",
    maxWidth: "20rem",
    marginBottom: "3rem",
    marginRight:"1rem",
    borderRadius: "3px",
  }
})
function createCard(detail){
  return(
    <Card
      image={detail.image}
      name={detail.name}
      detail={detail.detail}
    />
  );
};
function Portfolio() {
  const classes = useStyles();
  return (
    <Box id="portfolio" className={classes.mainDiv}>
    <Typography variant="h3" style={{textAlign:"center",paddingBottom:"2%"}}>PORTFOLIO</Typography>
      <Box className={classes.card}>         
          {detail.map(createCard)} 
       </Box>
    </Box>
    
  );
}


export default Portfolio;

// export default function BasicGrid() {
//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       
//     </Box>
//   );
// }