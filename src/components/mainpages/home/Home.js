import React from 'react';
import './Home.css'
import Apple from '../../../img/apple.png'
import Me from '../../../img/selfPic.png'
function Home() {

    
    return (
        <section className="home-section">

           <div className='container-box'>
            <img className='merle-dog' alt='' src={Apple}/>
            <div className="centered-text"> Eduardo Ibarra </div>
            <div className="other"> Software Engineer </div>
           </div>

           <div className='about-me'>

                <div
                        className="about-img"
                        style={{ textAlign: "left"}}>
                        
                        <img id="me"
                        src={Me}
                            className="img-fluid rounded b-shadow-a"
                            alt=""
                        />
                </div>

                <div className="about-text">
                    <h1 className="abtme">About Me</h1>
                    <p className="abtmetxt">I have lived in Texas my whole life, I consider myself a great problem solver. I love everything Sports such as the Dallas Mavericks; Cowboys and Stars. I enjoy skateboarding in my free time.

                    I first started to code in my late teens, it was very interesting to me that I was able to bring some of my creative ideas to life. It started by building simple applications using C++, then going on to learn other languages. What first started as a hobby, has driven me to persue a full-time career.</p>

                </div>
    
           </div>

          
         
        </section>
    );
}

export default Home;