import React from "react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Card = ({ user }) => {
  return (
    <article className="overflow-hidden relative hexagon">
      <div className="hexagon-inner">
        <img src={user.image} alt={user.name} className="w-full" />
        <div className="absolute inset-0 z-2 bg-black bg-opacity-75 text-white flex flex-col justify-center items-center opacity-0 hover:opacity-100 transition transition-opacity duration-500 ease-in-out">
          <h2 className="text-white">{user.name} </h2>
          <button
            onClick={() => window.open(user.url, "_blank")}
            className="rounded p-2"
          >
            <FontAwesomeIcon icon={faGithub} />
            Github
          </button>
        </div>
      </div>
    </article>
  );
};

export default Card;
