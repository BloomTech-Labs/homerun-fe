import React, { useState } from "react";
import Users from "../../utils/Users";
import ToolTip from "../../utils/ToolTip";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../../scss/CardInfo.scss";
import { set } from "react-ga";

const AboutUs = () => {
  const [isToggled, setToggled] = useState(false);

  function toggleExpand() {
    setToggled(!isToggled);
    const div = document.getElementById("card-info");
    if (isToggled === true) {
      div.classList.add("hidden");
    } else {
      div.classList.remove("hidden")
    }
  }

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
      <div className="flex items-center justify-center px-8 tablet:px-14 desktop:px-1/12">
        <section className=" tablet:flex tablet:flex-wrap">
          {Users.map((user) => {
            return (
              <div
                key={user.id}
                className="max-w-sm py-6 tablet:px-6 tablet:m-auto"
              >
                <article className="p-8 pb-4 text-center bg-gray-300 border-4 border-gray-500 rounded shadow-xl">
                  <div className="">
                    <img
                      className="max-w-full rounded"
                      src={user.image}
                      alt={user.name}
                    />
                  </div>
                  <div>
                    <h2 className="pt-6 text-3xl text-gray-700">
                      {user.name}{" "}
                    </h2>
                    <div id="card-info" className="hidden">
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
                    id="info-btn"
                    onClick={toggleExpand}
                    className="pt-2 m-auto text-3xl text-gray-700"
                  >
                    <i>
                      <FontAwesomeIcon icon={faChevronDown} />
                    </i>
                  </button>
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
