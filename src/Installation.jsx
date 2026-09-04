import "./Installation.css"
import drone_3 from "./assets/drone_3.png"
import { FaPlug } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { FaSlidersH } from "react-icons/fa";
import poster from "./assets/poster.jpg"
import play from "./assets/play.png"
import { useState } from "react";
import drone_video from "./assets/drone_video.mp4"

export default function Installation() {
const [playvideo  ,setPlayVideo]=useState(false)


    return(
        <>


        <div className="installation" >
        <div className="installation-1">
                <img src={drone_3} alt="drone_3" className="installation-1-img" />


                <div className="installation-11 box">
                <h1>FLY WITH DRONES</h1>
                <p></p>
                <div className="installation-111">
                     <input type="text" placeholder="Email here"/>
                <button>Submit</button>
                </div>
               
                </div>
        </div>

          <div className="installation-2" id="Installation">
             <div className="installation-22">
               <p>How To</p>
               <h1>INSTALL</h1>
               <h2></h2>
               <h3></h3>
             </div>


             <div className="installation-222">

              <div className="installation-2220">
              <FaPlug className="installation-2220-FaPlug "/>
              <h2>CONNECT</h2>
              <p>Based on Newton's third law, each of these can be achieved using the quadcopter's four propellers.</p>
              </div>
              <FaArrowRight className="installation-222-FaArrowRight" />


    <div className="installation-2220">
              <FaSlidersH  className="installation-2220-FaPlug "/>
              <h2>CONFIGURE</h2>
              <p>the engine is turned on, it starts up, and the propellers rotate to enable flight.</p>
              </div>
              <FaArrowRight className="installation-222-FaArrowRight" />

 <div className="installation-2220">
              <FaCheck  className="installation-2220-FaPlug "/>
              <h2>ENJOY!!!</h2>
              <p>a key safety guideline requiring the drone's horizontal distance from uninvolved people to be at least equal to its flight altitude; </p>
              </div>
             </div>
          </div>
        </div>

        <div className="installation-demo">

        <div
    className={`installation-demo-wrapper ${playvideo ? "playing" : ""}`}
  >


   {!playvideo ? (
      <>
            <img 
             src={poster}  
             alt="poster" 
             className="installation-demo-wrapper-poster" 
             onClick={()=>setPlayVideo(true)}
             />
  
            <img 
            src={play} 
             alt="play"
              className="installation-demo-wrapper-play"
              />

      </>
    ) :(
      <video src={drone_video}
      controls
      autoPlay
       className="installation-demo-video"
       />
    )}
          </div>
        </div>









   <div className="installation-1">
                <img 
                src={drone_3}
                 alt="drone_3"
                 className="installation-1-img1"
                  />


                <div className="installation-11">
                <h1>CALL TO ACTION </h1>
                <p></p>
                <div className="installation-111">
                <button>Click Here To Call</button>
                </div>
               
                </div>
        </div> 


        </>
    )
}