import React from "react";
import Users from "../../utils/Users";
import Card from "./Card"

const AboutUs = () => {

	return (
		<>
			<div className="hex-grid">
				<h2>Our Team</h2>
				{Users.map((user) => {
					return (
						<Card user={user} key={user.key} />
					);
				})}
			</div>
		</>
	);
};

export default AboutUs;
