
import { Box } from '@mui/material';
import './App.css';
import About from './components/aboutme';
import Contactme from './components/ContactMe/contactme';
import Footer from './components/Footer';
import Header from './components/header';
import Home from './components/Home';
import Portfolio from './components/Portfolio/Portfolio';

function App() {
  return (
    <div className="App">
      <Header/>
      <Box style={{backgroundColor:"#1B2430"}}>
        <Home/>
        <About/>
        <Portfolio/>
        
        <Footer/>
      </Box>
      
    </div>
  );
}

export default App;
