import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Card from "./card.jsx";
import Navbar from "./navbar.jsx";
import Jumbo from "./jumbo.jsx";
import Footer from "./footer.jsx";
//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Navbar/>
			<Jumbo/>
			<Card/>
			<Footer/>
			
		</div>
	);
};

export default Home;
