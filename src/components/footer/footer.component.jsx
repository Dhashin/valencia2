import React from "react";
import "./footer.styles.scss";

import facebook from "../../images/fb.png";
import insta from "../../images/i.png";
import twitter from "../../images/t.png";

class Footer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showMobileMenu: false,
			showPhoneMenu: false,
			readNewsletter: false
		};
	}
	componentDidMount() {}

	render() {
		return (
			<div className="final-div">
				<span className="spans2">Lets connect...</span>
				<div className="social-icons-div">
					<a href="https://www.facebook.com/">
						<img src={facebook} alt="social-icons" className="social-icons" />
					</a>
					<a href="https://www.instagram.com/">
						<img src={insta} alt="social-icons" className="social-icons" />
					</a>
					<a href="https://twitter.com/">
						<img src={twitter} alt="social-icons" className="social-icons" />
					</a>
				</div>

			</div>
		);
	}
}

export default Footer;
