import "./Products.css"
import product1 from "./assets/product-1.png"
import product2 from "./assets/product-2.png"
import product3 from "./assets/product-3.png"
import product4 from "./assets/product-4.png"



export default function Products() {
    return(
        <>
        <div className="products">

             <div className="products-1" id="Products">
               <p>Affodable</p>
               <h2>PRICE</h2>
               <h3></h3>
               <h4></h4>               
             </div>


             <div className="products-2"> 

                <div className="products-22">
                    <div className="products-222">
                  <h2>Drones Basic</h2>
                  <p>20MP Camera</p>
                    </div>
                 
<div className="products-22-img">
                <img src={product1} alt="drone1" />

            </div>


                <div className="products-2222">
                 <h3>$199</h3>
                 <button>Buy Now</button>
                </div>
               
                </div>

  <div className="products-22">
                    <div className="products-222">
                  <h2>Drones Silver</h2>
                  <p>2 Extra Battery</p>
                    </div>
                 

<div className="products-22-img">
                <img src={product2} alt="drone2" />

            </div>

                <div className="products-2222">
                 <h3>$299</h3>
                 <button>Buy Now</button>
                </div>
               
                </div>

  <div className="products-22">
                    <div className="products-222">
                  <h2>Drone Gold</h2>
                  <p>Easy Controller</p>
                    </div>
                 

 <div className="products-22-img">
                <img src={product3} alt="drone3" />

            </div>

                <div className="products-2222">
                 <h3>$399</h3>
                 <button>Buy Now</button>
                </div>
               
                </div>


  <div className="products-22">
                    <div className="products-222">
                  <h2>Drones Platinum</h2>
                  <p>30MP Camera </p>
                    </div>
                 

            <div className="products-22-img">
                <img src={product4} alt="drone1" />

            </div>

                <div className="products-2222">
                 <h3>$499</h3>
                 <button>Buy Now</button>
                </div>
               
                </div>


             </div>
        </div>
        </>
    )
}