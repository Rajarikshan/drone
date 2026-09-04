import "./FAQs.css"
import { FaPlus, FaMinus } from "react-icons/fa";
import { useState } from "react";

export default function FAQs() {

    const [openIndex,setOpenIndex]=useState(null);

    const toggleFAQ=(index)=>{
        setOpenIndex(openIndex === index ? null :index)
    }

      const faqs = [
    {
      q: "Lorem ipsum dolor sit amet?",
      a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras felis nisi, sagittis quis arcu eu, luctus cursus ante. Nullam nec diam vitae dolor porta ullamcorper."
    },
    {
      q: "Maecenas libero magna accumsan quis?",
      a: "Maecenas libero magna, accumsan quis lorem at, posuere laoreet urna."
    },
    {
      q: "Vivamus condimentum pharetra odio at efficitur?",
      a: "Vivamus condimentum pharetra odio, at efficitur sapien viverra sed."
    },


      {
      q: "Vivamus condimentum pharetra odio at efficitur?",
      a: "Vivamus condimentum pharetra odio, at efficitur sapien viverra sed."
    }
  ];

    return(
        <>

        <div className="faqs" id="FAQs">
        <div className="faqs-1">
            <p>Quick</p>
            <h2>FAQS</h2>
            <h3></h3>
            <h4></h4>

        </div>


        <div className="faqs-2">
<div className="faqs-20">
 <h1>FREEQUENTLY ASKED QUESTIONS</h1>
 <p>Drones, or Unmanned Aerial Vehicles (UAVs), are flying robots controlled remotely or autonomously, using onboard sensors, GPS, and software for flight, revolutionizing many sectors beyond their military origins</p>
<p> These versatile machines can be remotely controlled by an operator on the ground or fly autonomously using pre-programmed flight plans and onboard sensors. Originally developed in the 19th century for high-risk military missions,</p>
</div>


<div className="faqs-21">
        {faqs.map((item, index) => (
            <div className="faq-box" key={index}>
              <div
                className="faqs-210"
                onClick={() => toggleFAQ(index)}
              >
                <p>{item.q}</p>
                {openIndex === index ? <FaMinus /> : <FaPlus />}
              </div>

              <div
                className={
                  openIndex === index
                    ? "faq-answer open"
                    : "faq-answer"
                }
              >
                <p>{item.a}</p>
              </div>
            </div>
          ))}
</div>
        </div>         
        </div>
        </>
    )
}