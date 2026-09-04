import { useState, useEffect } from "react";
import "./Review.css";
import t1 from "./assets/testimonial-1.jpg";
import t2 from "./assets/testimonial-2.jpg";
import t3 from "./assets/testimonial-3.jpg";
import t4 from "./assets/testimonial-4.jpg";

const images = [t1, t2, t3, t4];

export default function Reviews() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="review" id="Reviews">
      <div className="review-1">
        <p>Customer</p>
        <h1>REVIEW</h1>
        <h2></h2>
        <h3></h3>
      </div>

      <div className="review-2">
        <div className="review-22">
          <div
            className="review-220 slider"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {images.map((img, i) => (
              <div className={`slide ${i===index ? "active" : 'blur'}`} key={i}>
                <img src={img} alt={`testimonial-${i}`} />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium veniam nemo similique provident inventore quod amet! Facilis ipsa accusamus ad commodi molestias neque soluta exercitationem aperiam quod, vero in non.</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}










