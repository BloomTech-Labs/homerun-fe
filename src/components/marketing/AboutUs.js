import React from 'react';
import Users from '../../utils/Users';
import ToolTip from '../../utils/ToolTip';
import Card from './Card';

const AboutUs = () => {
  return (
    <div className="flex flex-col m-auto contain">
      <div className="flex">
        <h2 className="flex p-8 m-auto text-center" data-testid="header-test">
          Our Team
          <span className="ml-2" data-testid="span-test">
            <ToolTip />
          </span>
        </h2>
      </div>
      <div className="flex items-center justify-around px-8 tablet:px-14 desktop:px-18">
        <section className="tablet:flex tablet:flex-wrap">
          {Users.map((user) => {
            return (
              <div
                key={user.id}
                className="py-6 tablet:px-6 tablet:mx-auto desktop:px-10"
              >
                <Card user={user} />
              </div>
            );
          })}
        </section>
      </div>
    </div>
  );
};
export default AboutUs;
