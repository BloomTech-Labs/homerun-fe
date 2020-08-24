import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';
import hero from '../../assets/images/hero.png';

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
            <h1
              className="w-full max-w-2xl text-3xl text-center phone: tablet:text-4xl desktop:text-5x desktop:text-left desktop:max-w-xl"
              data-testid="header-test"
            >
              <span className="text-hive">TidyHive</span> is a group
              organizational tool where members of a team can create, assign,
              and complete tasks. Turn your todos into todones with TidyHive
              today!
            </h1>
          </div>
          <div className="flex justify-center mt-20 desktop:justify-start desktop:pl-10 desktop:mt-10">
            <button className="w-full h-20 max-w-2xl py-4 font-bold border rounded shadow-lg tablet:px-6 bg-hive desktop:max-w-xs hover:bg-orange-500">
              <Link
                to="/signup"
                className="text-2xl text-white hover:text-white"
                data-testid="signup-button"
              >
                Signup for free <Icon name="arrow right" />
              </Link>
            </button>
          </div>
        </div>
      </section>
      <section className="max-w-full px-20 desktop:flex desktop:px-64">
        <div className="max-w-2xl p-10 m-auto text-center shadow-lg desktop:px-20">
          <Icon name="list" size="massive" />
          <h2 data-testid="todos-test">Create Todos</h2>
        </div>
        <div className="max-w-2xl p-10 m-auto mt-20 text-center shadow-lg desktop:mt-0 desktop:px-16">
          <Icon name="add user" size="massive" />
          <h2 data-testid="members-test">Assign Members</h2>
        </div>
        <div className="max-w-2xl p-10 m-auto mt-20 text-center shadow-lg desktop:mt-0 desktop:px-16">
          <Icon name="tasks" size="massive" />
          <h2 data-testid="task-test">Complete Tasks</h2>
        </div>
      </section>
      <section className="flex justify-center px-20 mt-20 mb-24 desktop:m-40">
        {/* TODO: rephrase more generally */}
        <h2
          className="max-w-2xl text-2xl text-center tablet:text-3xl desktop:max-w-full desktop:px-16"
          data-testid="content-test"
        >
          Delegating work within a group is so important and Tidyhive makes it
          easy. It offers a variety of features that will help keep your team
          organized and everyone on the same page. Assign participants different levels of permissions, keeping members on track with their tasks and giving assistants more responsibility over the team. Allocate tasks by categories, mantaining the list of todos organized. Customizable categories make it possible to mold the app in a way that works best for you and your team. Analyzing your group's progress has never been easier!  
        </h2>
      </section>
    </>
  );
};

export default Home;
