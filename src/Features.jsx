import "./Features.css"
import { FaCamera } from "react-icons/fa";
import { CiBatteryFull } from "react-icons/ci";
import { IoSpeedometer } from "react-icons/io5";
import { IoLogoGameControllerA } from "react-icons/io";
import { FaVideo } from "react-icons/fa";
import drone_2 from "./assets/drone_2.png"
import { FaHelicopter } from "react-icons/fa";
import { FaPlug } from "react-icons/fa";

export default function Features() {
    return(
        <>
 <div className="features" id="Features">
  

  <div className="features-1">
    
   <div className="features-2">
    <FaCamera  className="features-2-FaCamera "/>
    <h2>Camera</h2>
    <p>30MP Camera</p>
   </div>

    <div className="features-2">
    <CiBatteryFull className="features-2-FaCamera "/>
      <h2>Battery</h2>
    <p>2 Extra Battery</p>
   </div>

    <div className="features-2">
    < IoSpeedometer className="features-2-FaCamera "/>
    <h2>Speed</h2>
    <p>High Speed</p>
   </div>

    <div className="features-2">
    <IoLogoGameControllerA  className="features-2-FaCamera "/>
    <h2>Control</h2>
    <p>Easy Controller</p>
   </div>

  </div>


<div className="features-3">
       <div className="features-33">
        <p className="features-33-unique">Unique</p>
        <h1>FEATURES</h1>
        <p className="features-33-top"></p>
        <p className="features-33-bottom"></p>
       </div>


<div className="features-333">
         <div className="features-3333">
         <div className="features-33330 box">
          <div className="features-333301">
<h1>Easy to operate</h1>
          <p>GPS Module: It enables the drone to pinpoint its location and follow programmed routes</p>
        
          </div>
            <div className="features-333302">
            <IoLogoGameControllerA />
          </div>
         </div>


           <div className="features-33330 box">
          <div className="features-333301">
<h1>stable video output</h1>
          <p>Camera: Most drones now come with a built-in camera.</p>
        
          </div>
            <div className="features-333302">
            <FaVideo />
          </div>
         </div>
         </div>

          <div className="features-3333-0">
            <img src={drone_2} alt="drone_2" />

         </div>

          <div className="features-3333">
            


   <div className="features-33330" >
      <div className="features-333302">
            <FaPlug />
          </div>
          <div className="features-333301">
<h1>faster connection</h1>
          <p>GPS Module: It enables the drone to pinpoint its location and follow programmed routes</p>
        
          </div>
          
         </div>


           <div className="features-33330">
            <div className="features-333302">
            <FaHelicopter />
          </div>
          <div className="features-333301">
<h1>coordinated flight</h1>
        <p>  Shaped like traditional airplanes, using wings for lift</p>
        
          </div>
            
         </div>


         </div>
</div>

</div>


</div> 
        </>
    )
}