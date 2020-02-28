import React from "react";

const HouseholdForm = () => {

    return (
        <form>
            <h1> Setup Household </h1>
            <input
            name="name"
            type="text"
            placeholder="Member"
            />
            <button>Add</button>
            <button>Delete</button>
        </form>
    )
}

export default HouseholdForm;