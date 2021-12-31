import React from "react";
import "./about.styles.scss";

import valencia from "../../images/P1860389.jpg";
import child from "../../images/P1860073.jpg";


const About = () => (
    <div className="general-container">
        <div className="about-us-heading" style={{backgroundImage:`url(${child})`,  width: "100%",
            height: "300px",  backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'}}>
            <div className="about-us-text">About Us</div>
        </div>
        <div className="creative-div">


            <div className="creative-text-p1">
                I am not your average GP!
            </div>
        </div>

        <div className="creative-div-para">
            <div className="creative-text-para">
                <div className="creative-text">
                    Beyond my regular scope I value community, family and healing in all aspects to help you achieve
                    your optimal state of health and well being. Personalised care is of utmost importance to me.
                </div>
                <div className="creative-text">

                    I obtained my medical degree(MBChB) at University of Kwa-Zulu Natal, Nelson R Mandela School of
                    Medicine in 2013.
                    I am currently specialising in Sports and Exercise Medicine via the University of Cape Town.

                </div>
                <div className="creative-text">

                    I have over two years of experience in Orthopaedic Surgery and my special interests include all
                    things muscle/bone/joint! In addition, I'm great with kids, highly aware and considerate of the
                    LGBTQIA+ spectrum, and an advocate of medical and sexual health.
                </div>
            </div>
        </div>
        <div className="about-us-p1">
            <img src={valencia} alt="business" className="about-main-image" />
        </div>

    </div>
);

export default About;
