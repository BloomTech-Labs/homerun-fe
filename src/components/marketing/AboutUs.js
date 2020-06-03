import React from "react";
import Users from "../../utils/Users";
import Card from "./Card";
import ToolTip from "../../utils/ToolTip";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AboutUs = () => {
  return (
    <>
      <div className="flex">
        <h2 className="flex p-8 m-auto text-center">
          Our Team
          <span className="ml-2">
            <ToolTip />
          </span>
        </h2>
      </div>
      <div className="flex justify-center">
      <section className=" tablet:flex tablet:flex-wrap">
        {Users.map((user) => {
          return (
            <div className="py-6 tablet:px-6 tablet:m-auto">
            <article className="p-8 text-center bg-gray-200 border-4 border-gray-500 rounded shadow-xl cursor-pointer">
              <div className="">
                <img className="max-w-xs rounded" src={user.image} alt={user.name} />
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
        })}
      </section>
      </div>
    </>
  );
};

export default AboutUs;
