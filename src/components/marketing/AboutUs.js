import React from "react";
import Users from "../../utils/Users";
import Card from "./Card";

import "../../scss/hexagon.scss";

const AboutUs = () => {
  return (
    <>
      
        <div>
          <h2 className="pt-10 pb-5 text-center desktop:absolute desktop:inset-x-0 desktop:py-24">
            Our Team
          </h2>
        </div>
        <section className="items-center max-w-md m-auto tablet:max-w-3xl hex-grid desktop:max-w-full desktop:px-20 desktop:py-10 desktop:h-full">
          <section className="hidden desktop:block">
            <div className="desktop:w-11/12 desktop:m-auto desktop:block">
              {Users.map((user) => {
                if (user.id == 1) return <Card user={user} key={user.id} />;
              })}
            </div>
          </section>
          <section className="">
            <div className="w-full mt-10 desktop:w-11/12 desktop:m-auto tablet:mt-0">
              {Users.map((user) => {
                if (user.id == 4) return <Card user={user} key={user.id} />;
              })}
            </div>
            <div className="mt-10 desktop:mt-20 desktop:w-11/12 desktop:m-auto">
              {Users.map((user) => {
                if (user.id == 5) return <Card user={user} key={user.id} />;
              })}
            </div>
          </section>
          <section className="">
            <div className="mt-10 mb-10 desktop:hidden tablet:mt-0">
              {Users.map((user) => {
                if (user.id == 1) return <Card user={user} key={user.id} />;
              })}
            </div>
            <div className="desktop:w-11/12 desktop:m-auto">
              {Users.map((user) => {
                if (user.id == 2) return <Card user={user} key={user.id} />;
              })}
            </div>
            <div className="mt-10 desktop:hidden">
              {Users.map((user) => {
                if (user.id == 3) return <Card user={user} key={user.id} />;
              })}
            </div>
          </section>
          <section className="">
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
                if (user.id == 3) return <Card user={user} key={user.id} />;
              })}
            </div>
          </section>
        </section>
    
    </>
  );
};

export default AboutUs;
