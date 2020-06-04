import React from "react";
import Users from "../../utils/Users";
import Card from "./Card";
import ToolTip from "../../utils/ToolTip";

import "../../scss/hexagon.scss";

const AboutUs = () => {
  return (
    <>
      <div className="absolute inset-x-0">
        <h2
          className="flex justify-center pt-10 pb-8 tablet:pb-5"
          data-testid="header-test"
        >
          Our Team{" "}
          <span className="ml-2">
            <ToolTip />
          </span>
        </h2>
      </div>
      <section className="items-center h-full max-w-md py-12 m-auto mt-24 tablet:mt-16 tablet:max-w-3xl hex-grid desktop:max-w-full desktop:px-20 desktop:mt-0">
        <section className="hidden desktop:block">
          <div className="desktop:w-11/12 desktop:m-auto desktop:block">
            {Users.map((user) => {
              if (user.id == 3) return <Card user={user} key={user.id} />;
            })}
          </div>
        </section>
        <section>
          <div className="w-full desktop:w-11/12 desktop:m-auto">
            {Users.map((user) => {
              if (user.id == 1) return <Card user={user} key={user.id} />;
            })}
          </div>
          <div className="mt-10 desktop:mt-20 desktop:w-11/12 desktop:m-auto">
            {Users.map((user) => {
              if (user.id == 2) return <Card user={user} key={user.id} />;
            })}
          </div>
        </section>
        <section>
          <div className="mt-10 desktop:hidden tablet:mt-10">
            {Users.map((user) => {
              if (user.id == 3) return <Card user={user} key={user.id} />;
            })}
          </div>
          <div className="mt-10 desktop:w-11/12 desktop:m-auto">
            {Users.map((user) => {
              if (user.id == 4) return <Card user={user} key={user.id} />;
            })}
          </div>
          <div className="mt-10 desktop:hidden">
            {Users.map((user) => {
              if (user.id == 5) return <Card user={user} key={user.id} />;
            })}
          </div>
        </section>
        <section>
          <div className="mt-10 desktop:w-11/12 desktop:m-auto tablet:mt-0">
            {Users.map((user) => {
              if (user.id == 6) return <Card user={user} key={user.id} />;
            })}
          </div>
          <div className="mt-10 mb-10 desktop:mt-20 desktop:w-11/12 desktop:m-auto tablet:mb-0">
            {Users.map((user) => {
              if (user.id == 7) return <Card user={user} key={user.id} />;
            })}
          </div>
        </section>
        <section className="hidden desktop:block">
          <div className="desktop:w-11/12 desktop:m-auto desktop:block">
            {Users.map((user) => {
              if (user.id == 5) return <Card user={user} key={user.id} />;
            })}
          </div>
        </section>
      </section>
    </>
  );
};

export default AboutUs;
