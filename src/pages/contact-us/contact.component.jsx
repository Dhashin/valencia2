import React from "react";
import "./contact.styles.scss";
import FormInput from "../../components/form-input/form-input.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import location from "../../images/location.png";
import call from "../../images/phone-call.png";
import email from "../../images/email.png";
import hours from "../../images/minute.png";
import valencia from "../../images/P1860108.jpg";
import MainLogo from "../../images/vLogo.jpeg";


const Contact = () => (
	<div className="general-container">
		<div className="contact-us-heading " style={{backgroundImage:`url(${valencia})`,  width: "100%",
			height: "300px",  backgroundPosition: 'center',
			backgroundSize: 'cover',
			backgroundRepeat: 'no-repeat'}}>
			<div className="contact-us-text">Contact Us</div>
		</div>

		<div align="center" className="contact-us center-div">
			<FormInput
				type="text"
				id="firstname"
				name="firstname"
				placeholder="First Name"
				required
			></FormInput>
			<FormInput
				type="text"
				id="lastname"
				name="lastname"
				placeholder="Last Name"
				required
			></FormInput>
			<FormInput
				type="tel"
				id="phone"
				name="phone"
				placeholder="Phone Number"
				required
			></FormInput>
			<FormInput
				type="email"
				id="email"
				name="email"
				placeholder="Email"
				required
			></FormInput>
			<FormInput
				type="textarea"
				id="message"
				name="message"
				placeholder="Message"
				required
			></FormInput>
			<CustomButton centerButton inverted>
				Submit
			</CustomButton>
		</div>
		<div>
			<p>
				<br></br>
			</p>
		</div>
		<div align="center" className="us">

			<p>
                <div className="map-iframe">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3304.570632801621!2d18.45397721521583!3d-34.080519380598226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc418bf6fd66ad%3A0xe8b2ae3f4aebd77f!2sDr.Craig%20P%20Raubenheimer!5e0!3m2!1sen!2sza!4v1630939965189!5m2!1sen!2sza"
                    width="300" height="450" style={{border:0}} allowFullScreen="" loading="lazy"></iframe>


                </div>
				<div className="home-image-container">
					<img src={hours} alt="business" className="contact-image" />
				</div>
				<label className="hours">Mon – Fri</label>
				<br />
				<label className="hours">9:00 – 17:00</label>
				<br />
				<div className="home-image-container">
					<img src={call} alt="business" className="contact-image" />
				</div>
				<label className="others">071 577 9434</label>
				<br />
				<div className="home-image-container">
					<img src={email} alt="business" className="contact-image" />
				</div>
				<label className="others">
					info@doctorvalencianaidoo.co.za
				</label>
				<br />
			</p>
		</div>
	</div>
);

export default Contact;
