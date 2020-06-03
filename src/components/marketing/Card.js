import React, { useState } from "react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Card = ({ user }) => {
  const [isToggled, setToggled] = useState(false);

  function toggleExpand() {
    setToggled(!isToggled);
    const div = document.getElementById(`card-info${user.id}`);
    const button = document.getElementById(`info-btn${user.id}`);
    if (isToggled === false) {
      div.classList.remove("hidden");
      button.classList.add("flip");
    } else {
      div.classList.add("hidden");
      button.classList.remove("flip");
    }
  }
  
  return (
    <article className="p-8 pb-4 text-center bg-gray-300 border-4 border-gray-500 rounded shadow-xl">
      <div>
        <img className="max-w-full rounded" src={user.image} alt={user.name} />
      </div>
      <div>
        <h2 className="pt-6 text-3xl text-gray-700">{user.name} </h2>
        <div id={`card-info${user.id}`} className="hidden">
          <h3 className="pt-4">{user.title}</h3>
          <button
            onClick={() => window.open(user.url, "_blank")}
            className="px-2 mt-4 text-xl text-white bg-gray-600 rounded shadow-xl"
          >
            <i className="mr-2 text-2xl text-white">
              <FontAwesomeIcon icon={faGithub} />
            </i>
            Github
          </button>
        </div>
      </div>
      <button
        id={`info-btn${user.id}`}
        onClick={toggleExpand}
        className="pt-2 m-auto text-3xl text-gray-700"
      >
        <i>
          <FontAwesomeIcon icon={faChevronDown} />
        </i>
      </button>
    </article>
  );
};

export default Card;
