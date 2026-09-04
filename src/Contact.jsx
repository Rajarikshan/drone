import './Contact.css'
import contact_bg from './assets/contact-bg.jpg';
import { FaMapMarker } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa"; 
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";


export default function Contact() {
    return(
        <>

         <div className='contact' id='Contact'>
            <div className='contact-1'>
                <img src={contact_bg} alt="contact_bg" />
            </div>

            <div className='contact-2'>
              <h1>GET IN TOUCH</h1>
              <span></span>
              <p> their growth is accompanied by rigorous regulations from agencies like the Federal Aviation Administration (FAA) in the U.S. and the Civil Aviation Authority (CAA) in the U.K. to address safety, privacy, and airspace security concerns</p>
                 
                 <div className='contact-20'>
                    <FaMapMarker />
                    <p>123 Drones Tower, Los Angels, CA, USA</p>
                 </div>

          <div className='contact-20'>
                    <MdEmail />
                    <p>rajarikshan2143@gmail.com</p>
                 </div>

                   <div className='contact-20'>
                    <FaPhone />
                    <p>+91 9677065598</p>
                 </div>

                 <button className='contact-btn'>Contact Us</button>

                 <div className='contact-21'>
                    <button><FaTwitter /></button>
                   <button><FaFacebookF /></button>
                   <button><FaLinkedinIn /></button>
                   <button><FaInstagram /></button>
                   <button><FaYoutube /></button>
                 </div>

            </div>
         </div>
        </>
    )
}