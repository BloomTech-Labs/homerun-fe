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
        <div className="flex justify-center">
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

      <section className="flex justify-center flex-wrap m-auto px-20">
		<div className="">
        <div className="text-center shadow p-10 w-full">
          <Icon className="" name="list" size="massive" />
          <h2 className="">Create Todos</h2>
        </div>
        <div className="text-center mt-20 shadow p-10 w-full">
          <Icon name="add user" size="massive" />
          <h2 className="">Assign Members</h2>
        </div>
        <div className="text-center mt-20 shadow p-10 w-full">
          <Icon name="tasks" size="massive" />
          <h2 className="">Complete Tasks</h2>
        </div>
		</div>
      </section>
      <section className="flex justify-center mt-20 mb-24 px-20">
        <h2 className="text-center max-w-2xl">
          These are the main features that TidyHive has to offer. Keep your
          household organized and everyone on the same page by creating tasks
          and assigning members to those tasks. Often times a majority of the
          work will fall on a single member of a household - delegating work
          within a household is so important. This includes keeping children on
          track with their chores and schoolwork or extra-curricular activities!
          There are limitations to a child account. Their account can only be
          accessed as an extension from the main account holder.
        </h2>
      </section>
      <Footer />
    </>
  );
};

export default Home;
