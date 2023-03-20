import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Dialog, Typography, Box, TextField, Button } from "@mui/material";
import { makeStyles } from "@material-ui/core";
import "font-awesome/css/font-awesome.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const useStyles = makeStyles({
  container: {
    height: "60vh",
    width: "70vh",
    backgroundColor: "#1B2430",
    borderRadius: "4px",
    overflow: "hidden",
  },
  heading: {
    color: "#F7C04A",
    paddingBottom: "3%",
    textAlign: "center",
    paddingTop: "1%",
  },
  subheading: {
    color: "#BBD6B8",
    padding: "5% 0 1% 0",
    fontWeight: "15px",
  },
  button: {
    width: "20%",
    boxShadow: "0 2px 4px 0 rgb(0 0 0/ 20%)",
    backgroundColor:"#EA5455",
    position:"relative",
    left:"39%",
    borderRadius:"3px",
    margin:"0.8rem 0 0 0",
    color:"#fff",
    cursor:"pointer",
    outline:"none"
  },
  text: {
    width: "100%",
    border: "solid green",
    borderWidth: "0 0 2% 0",
    backgroundColor: "#1B2430",
    color: "#fff",
    outline: "none",
  },
  icons: {
    padding: "1% 2% 0 2%",
    color: "#BBD6B8",
  },
});
const Contactme = ({ open, setOpen }) => {
  const classes = useStyles();
  const handleClose = () => {
    setOpen(false);
  };
  const Notify = () =>{
    setOpen(false);
    toast.success('Message sent successfully', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
  }
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hdohbgl",
        "template_lgkjp6k",
        form.current,
        "7iZVk6iPtPbADboRT"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <Box>
      <Dialog
      onClose={handleClose}
      open={open}
      maxWidth="md"
      PaperProps={{ sx: { maxWidth: "unset" } }}
    >
      <Box className={classes.container}>
        <Box style={{ display: "flex", flexDirection: "column" }}>
          <Typography className={classes.heading} variant="h5">
            Send me a message 👇
          </Typography>

          <form style={{ padding: "2%" }} ref={form} onSubmit={sendEmail}>
            <Typography className={classes.subheading}>
              Enter your name
            </Typography>
            <input
              sx={{ focus: { boxShadow: "0 0 0 rgb(255, 255, 255)" } }}
              style={{ height: "2rem", borderWidth: "0 0 2px 0" }}
              className={classes.text}
              type="text"
              name="user_name"
            />

            <Typography className={classes.subheading}>
              Enter your email
            </Typography>
            <input
              style={{ height: "2rem", borderWidth: "0 0 2px 0" }}
              className={classes.text}
              type="email"
              name="user_email"
            />

            <Typography className={classes.subheading}>
              Enter your message
            </Typography>
            <textarea
              style={{ height: "4rem", borderWidth: "0 0 2px 0" }}
              className={classes.text}
              rows={4}
              name="message"
            />
            <input onClick={Notify} style={{height:"2.5rem"}} className={classes.button} type="submit" value="Send" />
          </form>
          
        </Box>
        <Typography
          style={{
            color: "#BBD6B8",
            padding: "1% 3% 0 0",
            textAlign: "center",
          }}
          variant="h6"
        >
          OR
        </Typography>
        <Box
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <a
            className={classes.icons}
            href="https://www.instagram.com/shubham_kumar9781/"
          >
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </a>
          <a
            className={classes.icons}
            href="https://www.linkedin.com/in/shubham-kumar-6a42101bb/"
          >
            <FontAwesomeIcon icon={faLinkedin} size="lg" />
          </a>
          <a className={classes.icons} href="https://github.com/shubham9709">
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </a>
        </Box>
      </Box>
      
    </Dialog>
    <ToastContainer/>
    </Box>
  );
};
export default Contactme;
