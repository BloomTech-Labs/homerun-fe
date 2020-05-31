import React from "react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Card = ({ user }) => {
  return (
    <article className="relative overflow-hidden hexagon">
      <div className="hexagon-inner">
        <img src={user.image} alt={user.name} className="w-full" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white transition transition-opacity duration-500 ease-in-out bg-black bg-opacity-75 opacity-0 z-2 hover:opacity-100">
          <h2 className="text-white">{user.name} </h2>
          <button
            onClick={() => window.open(user.url, "_blank")}
            className="p-2 rounded"
          >
            <i className="mr-2">
              <FontAwesomeIcon icon={faGithub} />
            </i>
            Github
          </button>
        </div>
      </div>
    </article>
  );
};

export default Card;
