import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "semantic-ui-react";
import hero from "../../assets/images/hero.png";

// right now the button takes us to the email sign up but from the Home page the next step would actually be the initial sign in page where the user can choose to sign in with
// google or email - once those components are built out we can have the navlink take us to that route
const Home = () => {
  return (
    <>
      <section className="max-w-full px-20 desktop:flex desktop:px-64">
        <div className="max-w-2xl p-10 m-auto text-center shadow-lg desktop:px-20">
          <Icon name="list" size="massive" />
          <h2>Create Todos</h2>
        </div>
        <div className="max-w-2xl p-10 m-auto mt-20 text-center shadow-lg desktop:mt-0 desktop:px-16">
          <Icon name="add user" size="massive" />
          <h2>Assign Members</h2>
        </div>
        <div className="max-w-2xl p-10 m-auto mt-20 text-center shadow-lg desktop:mt-0 desktop:px-16">
          <Icon name="tasks" size="massive" />
          <h2>Complete Tasks</h2>
        </div>
      </section>
      <section className="flex justify-center px-20 mt-20 mb-24 desktop:m-40">
        <h2 className="max-w-2xl text-2xl text-center tablet:text-3xl desktop:max-w-full desktop:px-16">
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
