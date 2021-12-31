import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header/header-component";
import Homepage from "./pages/homepage/home.component";
import About from "./pages/about-us/about.component";
import Team from "./pages/team/team.component";
import Contact from "./pages/contact-us/contact.component";
import Footer from "./components/footer/footer.component";
import { Switch, Route } from "react-router-dom";
import React from "react";
function App() {
	return (
		<div className="App">
			<Header />

			<Switch>
				<Route exact path="/" component={Homepage}></Route>
				<Route path="/about-us" component={About}></Route>
				<Route path="/team" component={Team}></Route>
				<Route path="/contact-us" component={Contact}></Route>
			</Switch>
			<Footer />
			<div className="sub-footer">
				<div className="inner-sub-footer">
					Created by <a className="link-test" href="https://advancedinnovativeindustries.com/#/"> Advanced Innovative Industries (PTY) LTD </a>
				</div>

			</div>
		</div>
	);
}

export default App;
