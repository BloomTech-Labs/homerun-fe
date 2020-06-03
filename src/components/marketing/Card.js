import React from "react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Card = ({ user }) => {
  return (
    <div className="py-6 max-w-1/2">
      <article className="p-8 text-center bg-gray-200 border-4 border-gray-500 rounded shadow-xl cursor-pointer hexagon">
        <div className="">
          <img className="rounded" src={user.image} alt={user.name} />
        </div>
        <div>
          <h2 className="pt-6 text-3xl text-gray-700">{user.name} </h2>
          <button
            onClick={() => window.open(user.url, "_blank")}
            className="p-2 text-xl text-gray-700 rounded"
          >
            <i className="mr-2 text-2xl text-gray-700">
              <FontAwesomeIcon icon={faGithub} />
            </i>
            Github
          </button>
        </div>
        <div className="pt-6 m-auto text-3xl text-gray-700">
          <i>
            <FontAwesomeIcon icon={faChevronDown} />
          </i>
        </div>
      </article>
    </div>
  );
};

// {
//   /* <div className="absolute inset-0 flex flex-col items-center justify-center text-white transition transition-opacity duration-500 ease-in-out bg-black bg-opacity-75 opacity-0 z-2 hover:opacity-100 active:opacity-100">
// <h2 className="text-white">{user.name} </h2>
// <button
//   onClick={() => window.open(user.url, "_blank")}
//   className="p-2 rounded"
// >
//   <i className="mr-2">
//     <FontAwesomeIcon icon={faGithub} />
//   </i>
//   Github
// </button>
// </div> */
// }

export default Card;
