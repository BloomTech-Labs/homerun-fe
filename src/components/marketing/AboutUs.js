import React from "react";
import Users from "../../utils/Users";
import Card from "./Card";

import "../../scss/hexagon.scss";

const AboutUs = () => {
  return (
    <>
      <div className="flex-col" data-testid="about-page">
        <h2 className="text-center p-8">Our Team</h2>
        <section className="hex-grid">
          {Users.map((user) => {
            return <Card user={user} key={user.id} />;
          })}
        </section>
      </div>
    </>
  );
};

export default AboutUs;
