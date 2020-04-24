import React from "react";
import AccountSettings from "./AccountSettings.js";
import HouseholdSettings from "./HouseholdSettings.js";

const Settings = ({ active }) => {
  return (
    <>
      {active === "account" && <AccountSettings />}
      {active === "household" && <HouseholdSettings />}
    </>
  );
};

export default Settings;
