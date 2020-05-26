import React from "react";
import styled from "styled-components";
import SidebarMarketing from "../marketing/Sidebar-Marketing.js";
import Navigation from "../layout/Navigation";
import Footer from "../layout/Footer";

const AboutUsDraft = () => {
  const users = [
    {
      name: "Vinni Hoke",
      image: "https://avatars1.githubusercontent.com/u/34225237?s=460&v=4",
      url: "https://github.com/vinnihoke",
    },
    {
      name: "Micah Jank",
      image: "https://avatars3.githubusercontent.com/u/40408940?s=460&v=4",
      url: "https://github.com/MicahJank",
    },
    {
      name: "Zach Taylor",
      image: "https://avatars0.githubusercontent.com/u/37271885?s=460&v=4",
      url: "https://github.com/zbtaylor",
    },
    {
      name: "Katrina Roaix",
      image: "https://avatars3.githubusercontent.com/u/5169760?s=460&v=4",
      url: "https://github.com/kroaix",
    },
    {
      name: "Heather Ridgill",
      image: "https://avatars3.githubusercontent.com/u/49896861?s=460&v=4",
      url: "https://github.com/heather-ridgill",
    },
    {
      name: "Yankho Trumble",
      image: "https://avatars2.githubusercontent.com/u/33339750?s=460&v=4",
      url: "https://github.com/Mayankho",
    },
  ];

  return (
    <>
      <CardContainer>
        <h2>Our Team</h2>
        {users.map((user) => {
          return (
            <div className="ui card">
              <img className="ui image" src={user.image} />
              <div className="content">
                <h2>{user.name}</h2>
                <button
                  className="ui button black"
                  onClick={() => window.open(user.url, "_blank")}
                >
                  <i className="ui icon github large"></i>
                  Github
                </button>
              </div>
            </div>
          );
        })}
      </CardContainer>
    </>
  );
};

export default AboutUsDraft;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 90%;
  margin: 0 auto 50px;
`;

const DevCard = styled.div`
  display: flex;
  padding: 25px;
  flex-direction: column;
  align-items: center;
  transition: box-shadow 0.3s;
  width: 300px;
  border-radius: 3px;
  box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
  margin: 20px;
  &:hover {
    box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.3);
  }
`;

const DevImage = styled.img`
  width: 75%;
  height: auto;
  border-radius: 50%;
`;

const DevInfo = styled.div`
  width: 75%;
  height: 60px;
  margin-top: 15px;
`;

const DevInfoTitle = styled.h2`
  text-align: center;
  font-weight: 600;
  font-size: 2rem;
  color: #636578;
`;

const DevInfoDesc = styled.h2`
  text-align: center;
  margin-top: 10px;
  font-size: 1.6rem;
  font-weight: 300;
`;

const SocialButtons = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin: 20px 0 0;
`;

const SocialButton = styled.button`
  font-size: 1.6rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 30px;
  width: 100px;
  color: #fff;
  background: #636578;
  border: 1px solid #636578;
  border-radius: 3px;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    color: #636578;
    background: #fff;
  }
`;

const H2 = styled.h2`
  text-align: center;
  font-size: 3rem;
  color: #636578;
  margin: 20px 0;
`;
