import React from "react";

const Card = ({user}) => {
	return (
		<div className=" hexagon">
		<img className="" src={user.image} />
		<div className="">
			<h2>{user.name}</h2>
			<button
				className=""
				onClick={() => window.open(user.url, "_blank")}
			>
				<i className="" />
				Github
			</button>
		</div>
	</div>)
}

export default Card;
