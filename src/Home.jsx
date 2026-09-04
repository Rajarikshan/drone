import drone from "./assets/drone_1.png"
import "./Home.css"
// import Features from "./Features"

export default function Home() {
    return(
        <>
        <div className="home" id="Home">
            <div className="home-1">
            <h1>View The World With DRONES</h1>
            <p>Drone imagery has advanced significantly in 2026, with consumer and industrial models frequently utilizing 8K resolution </p>
              <button>Buy Now</button>
            </div>



            <div className="home-2">
                <img src={drone} alt="drone" />

            </div>
</div>







        </>
    )
}