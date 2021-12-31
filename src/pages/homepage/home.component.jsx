import React from "react";
import "./home.styles.scss";
import MainLogo from "../../images/vLogo.jpeg";
import uptodate from "../../images/update.jpg";
import child from "../../images/P1860073.jpg";
import chronic from "../../images/chronic.jpg";
import sport from "../../images/sport.jpg";
import surgery from "../../images/surgery.jpg";
import fracture from "../../images/P1860319.jpg";
import LGBTQIA from "../../images/LGBTQIA+.jpg";
import mental from "../../images/mental.jpg";


import CustomButton from "../../components/custom-button/custom-button.component";

const Homepage = () => (
	<div >
		<div className="homepgae-main">
			<div className="home-image-container">
				<img src={MainLogo} alt="business" className="homepage-main-image" />
			</div>
		</div>
		<div className="homepage-belief">
			<div className="believe-services">
				Our Services
			</div>
		</div>
		<div>
		<div className="section-2">
			<div className="half-left">
				<div className="text-div-home">

					<p className="para-services">
						Management of medical conditions including chronic illnesses.
					</p>

				</div>
			</div>
			<div className="half-right">
				<img
					src={chronic}
					alt="business"
					className="homepage-main-image2"
				/>
			</div>
		</div>
		<div className="section-2">



			<div className="half-left">
				<img
					src={fracture}
					alt="business"
					className="homepage-main-image2"
				/>
			</div>

			<div className="half-right">
				<div className="text-div-home">

					<p className="para-services">
						Assessment, Diagnosis, Mx and appropriate referral of sports injuries and pathologies.
					</p>

				</div>
			</div>
		</div>
		<div className="section-2">
			<div className="half-left">
				<div className="text-div-home">

					<p className="para-services">
						Minor surgical procedures and biopsies.
					</p>

				</div>
			</div>
			<div className="half-right">
				<img
					src={surgery}
					alt="business"
					className="homepage-main-image2"
				/>
			</div>
		</div>
		<div className="section-2">
			<div className="half-left">
				<img
					src={sport}
					alt="business"
					className="homepage-main-image2"
				/>
			</div>
			<div className="half-right">
				<div className="text-div-home">

					<p className="para-services">
						Fracture care.
					</p>

				</div>
			</div>
		</div>
		<div className="section-2">
			<div className="half-left">
				<div className="text-div-home">

					<p className="para-services">
						Child Friendly.
					</p>

				</div>
			</div>
			<div className="half-right">
				<img
					src={child}
					alt="business"
					className="homepage-main-image2"
				/>
			</div>
		</div>
		<div className="section-2">
			<div className="half-left">
				<img
					src={LGBTQIA}
					alt="business"
					className="homepage-main-image2"
				/>
			</div>
			<div className="half-right">
				<div className="text-div-home">

					<p className="para-services">
						LGBTQIA+ friendly service.
					</p>

				</div>
			</div>
		</div>
		<div className="section-2">
			<div className="half-left">
				<div className="text-div-home">
					<p className="para-services">
						Mental and Sexual Health Advocacy.
					</p>
				</div>
			</div>
			<div className="half-right">
				<img
					src={mental}
					alt="business"
					className="homepage-main-image2"
				/>
			</div>
		</div>
		<div className="section-2">
			<div className="half-left">
				<img
					src={uptodate}
					alt="business"
					className="homepage-main-image2"
				/>
			</div>
			<div className="half-right">
				<div className="text-div-home">

					<p className="para-services">
						Up-to-date with the latest evidence and natural medicine.
					</p>

				</div>
			</div>
		</div>
	</div>
		<div className="homepage-patient">
			<div className="believe">Patient-specific health screening</div>
			<div className="believe1">
				Pap smears
			</div>
			<div className="believe1">
				PSA
			</div>
			<div className="believe1">
				Sexually transmitted infections including HIV
			</div>
		</div>
	</div>
);

export default Homepage;
