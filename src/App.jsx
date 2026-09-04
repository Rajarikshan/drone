import { BrowserRouter} from "react-router-dom";
import './App.css'
import Navbar from './Navbar';
import Home from './Home';
import Features from './Features';
import Installation from './Installation';
import Products from './Products';
import Reviews from './Reviews';
import FAQs from './FAQs';
import Contact from './Contact';


function App() {

  return (
    <>
    <BrowserRouter>
     <Navbar/>
      <section id="Home" className="section"><Home/></section>
      <section id="Features" className="section"><Features/></section>
      <section id="Installation" className="section"><Installation/></section>
      <section id="Products" className="section"><Products/></section>
      <section id="Reviews" className="section"><Reviews/></section>       
       <section id="FAQs" className="section"><FAQs/></section>
      <section id="Contact" className="section"><Contact/></section>
 </BrowserRouter>
    </>
  )
}

export default App
