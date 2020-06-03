import React from "react";
import Users from "../../utils/Users";
import ToolTip from "../../utils/ToolTip";
import Card from "./Card";

import "../../scss/CardInfo.scss";

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
      <div className="flex items-center justify-center px-8 tablet:px-14 desktop:px-1/12">
        <section className=" tablet:flex tablet:flex-wrap">
          {Users.map((user) => {
            return (
              <div key={user.id}
                className="max-w-sm py-6 tablet:px-6 tablet:m-auto"
              >
                <Card user={user} />
              </div>
            );
          })}
        </section>
      </div>
    </>
  );
};

export default AboutUs;
