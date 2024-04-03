import React from 'react'
import Hero from '../components/Hero'
import hero from '../hero-bg.jpg'
import '../style.css'

function Home() {
    return (
        <div>
            <Hero />
            <div id="hero" className="hero route bg-image" style={{ backgroundImage: `url(${hero})` }}>
                {/* <img src={hero}></img> */}
                <div class="overlay-itro"></div>
                <div class="hero-content display-table">
                    <div class="table-cell">
                        <div class="container">
                            <h1 class="hero-title mb-4">I am Akshay Rathod</h1>
                            <p class="hero-subtitle"><span class="typed" data-typed-items="DevOps Developer"></span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home