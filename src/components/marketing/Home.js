import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "semantic-ui-react";
import hero from "../../assets/images/hero.png";

// right now the button takes us to the email sign up but from the Home page the next step would actually be the initial sign in page where the user can choose to sign in with
// google or email - once those components are built out we can have the navlink take us to that route
const Home = () => {
  return (
    <>
      <section className="px-20 py-24 desktop:flex desktop:px-28 desktop:py-48">
        <div className="flex justify-center desktop:w-1/2 desktop:justify-end desktop:pr-10">
          <img src={hero} alt="icon of desktop, tablet and cellphone" />
        </div>
        <div className="desktop:w-1/2">
          <div className="flex justify-center mt-20 desktop:justify-start desktop:pl-10 desktop:mt-5">
            <h1 className="text-center w-full max-w-2xl phone: text-3xl tablet:text-4xl desktop:text-5x desktop:text-left desktop:max-w-xl">
              <span className="text-hive">TidyHive</span> is a home
              organizational tool where members of a household can create,
              assign, and complete tasks. Turn your todos into todones with
              TidyHive today!
            </h1>
          </div>
          <div className="flex justify-center mt-20 desktop:justify-start desktop:pl-10 desktop:mt-10">
            <button className="bg-hive shadow-lg font-bold h-20 w-full max-w-2xl py-4 px-6 border rounded desktop:w-2/5">
              <Link to="/signup" className="text-2xl text-white">
                Signup for free <Icon name="arrow right" />
              </Link>
            </button>
          </div>
        </div>
      </section>
      <section className="px-20 max-w-full desktop:flex desktop:px-64">
        <div className="text-center m-auto shadow-lg p-10 max-w-2xl desktop:px-20">
          <Icon name="list" size="massive" />
          <h2>Create Todos</h2>
        </div>
        <div className="text-center m-auto mt-20 shadow-lg p-10  max-w-2xl desktop:mt-0 desktop:px-16">
          <Icon name="add user" size="massive" />
          <h2>Assign Members</h2>
        </div>
        <div className="text-center m-auto mt-20 shadow-lg p-10 max-w-2xl desktop:mt-0 desktop:px-16">
          <Icon name="tasks" size="massive" />
          <h2>Complete Tasks</h2>
        </div>
      </section>
      <section className="flex justify-center mt-20 mb-24 px-20 desktop:m-40">
        <h2 className="text-center max-w-2xl text-2xl tablet:text-3xl desktop:max-w-full desktop:px-16">
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
    </>
  );
};

export default Home;
