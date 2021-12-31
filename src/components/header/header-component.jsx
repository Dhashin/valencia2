import React from "react";
import "./header.styles.scss";
import {withRouter} from "react-router-dom";

import CustomButton from "../custom-button/custom-button.component";
import menu from "../../images/menu.png";
import MainLogo from "../../images/vLogo.jpeg";

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showMobileMenu: false,
            showPhoneMenu: false,
            readNewsletter: false
        };
    }

    componentDidMount() {
    }

    showMenu = () =>{
        this.setState({showMobileMenu: !this.state.showMobileMenu});
    }

    goHome = () =>{
        this.props.history.push('/');
        this.setState({showMobileMenu: !this.state.showMobileMenu});
    }
    goContact = ()=>{
        this.props.history.push('/contact-us');
        this.setState({showMobileMenu: !this.state.showMobileMenu});
    }
    goAbout = ()=>{
        this.props.history.push('/about-us');
        this.setState({showMobileMenu: !this.state.showMobileMenu});
    }


    // setImageSize = () => {
    //     if (window.innerWidth < 800) {
    //         this.setState({showMobileMenu: true});
    //     } else {
    //         this.setState({showMobileMenu: false});
    //     }
    // };

    render() {
        const {history, currentUser, hidden, location} = this.props;

        return (
            <div>
                <div className="header-div10">
                    <div className="left-div-header" onClick={() => history.push("/")}>

                    </div>
                    <div className="center-div-header">
                        <CustomButton centerButton onClick={() => history.push("/")}>
                            Home
                        </CustomButton>
                        <CustomButton centerButton onClick={() => history.push("/about-us")}>
                            About
                        </CustomButton>

                        <CustomButton
                            centerButton
                            onClick={() => history.push("/contact-us")}
                        >
                            Contact
                        </CustomButton>
                    </div>
                    <div className="right-div-header">
                        <img src={menu} alt="menu" className="menu-image" onClick={this.showMenu}/>
                    </div>
                </div>

                {this.state.showMobileMenu ? <div className="dynamic-menu-div">
                    <CustomButton inverted maxWidth onClick={this.goHome} >Home</CustomButton>
                    <CustomButton inverted maxWidth onClick={this.goAbout}>About</CustomButton>
                    <CustomButton inverted maxWidth onClick={this.goContact}>Contact</CustomButton>
                </div> : null}


            </div>
        );
    }
}

export default withRouter(Header);
