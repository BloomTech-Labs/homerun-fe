import React from "react";
import { Link } from "react-router-dom";
import { Button, Icon } from "semantic-ui-react";
import hero from "../../Logos/hero.png";
import Navigation from "../marketing/Navigation";
import Footer from "../marketing/Footer";
import { Row, Col } from "antd";

// right now the button takes us to the email sign up but from the Home page the next step would actually be the initial sign in page where the user can choose to sign in with
// google or email - once those components are built out we can have the navlink take us to that route
const Home = () => {
  return (
    <>
      <Navigation />
      <main className="px-20 py-24">
        <div className="flex justify-center mx-auto">
          <img
            className=""
            src={hero}
            alt="icon of desktop, tablet and cellphone"
          />
        </div>
        <div className="flex justify-center mt-20">
          <h1 className="text-center w-full max-w-2xl">
            TidyHive is a home organizational tool where members of a household
            can create, assign, and complete tasks. Turn your todos into todones
            with TidyHive today!
          </h1>
        </div>
        <div className="flex justify-center mt-20">
          <button className="bg-hive font-bold h-20 w-full max-w-2xl py-4 px-10 border rounded">
            <Link to="/signup" className="text-2xl text-white">
              Signup for free <Icon name="arrow right" />
            </Link>
          </button>
        </div>
      </main>
      <Row justify="center" align="middle">
        <Col span={24}>
          <div className="mission-statement">
            <Icon name="home" size="huge" />
            <h2>Manage | Organize | Collaborate</h2>
          </div>
        </Col>
      </Row>
      <Row justify="center" align="middle" className="features">
        <Col xs={7} sm={7} md={7} lg={6}>
          <div className="create">
            <Icon name="list" size="massive" />
            <h3>Create Todos</h3>
          </div>
        </Col>
        <Col xs={7} sm={7} md={7} lg={6} offset={1}>
          <div className="assign">
            <Icon name="add user" size="massive" />
            <h3>Assign Members</h3>
          </div>
        </Col>
        <Col xs={7} sm={7} md={7} lg={6} offset={1}>
          <div className="complete">
            <Icon name="tasks" size="massive" />
            <h3>Complete Tasks</h3>
          </div>
        </Col>
        <Col xs={22} sm={20} md={19} lg={16}>
          <p className="feature-description">
            These are the main features that TidyHive has to offer. Keep your
            household organized and everyone on the same page by creating tasks
            and assigning members to those tasks. Often times a majority of the
            work will fall on a single member of a household - delegating work
            within a household is so important. This includes keeping children
            on track with their chores and schoolwork or extra-curricular
            activities! There are limitations to a child account. Their account
            can only be accessed as an extension from the main account holder.
          </p>
        </Col>
      </Row>
      <Footer />
    </>
  );
};

export default Home;
