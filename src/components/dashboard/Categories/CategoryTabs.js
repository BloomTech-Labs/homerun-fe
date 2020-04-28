import React, { useState, useLayoutEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import actions from "../../../actions/";
import { Menu } from "semantic-ui-react";

import Tab from "./Tab.js";

const CategoryTabs = () => {
  const [active, setActive] = useState("all");
  const [counts, setCounts] = useState({});
  const dispatch = useDispatch();
  const state = useSelector((state) => state.todos.todos);

  const handleClick = (e, { name }) => {
    e.preventDefault();
    // everytime we fetch the todos we filter them and make sure only the todos that are a part of the current category are displaying
    dispatch(actions.todo.updateCategory(name));
    dispatch(actions.todo.fetchTodos());
    setActive(name);
  };

  useLayoutEffect(() => {
    if (state) {
      setCounts({
        living_room: state.filter((todo) =>
          todo.categories.includes("living_room")
        ).length,
        bedroom: state.filter((todo) => todo.categories.includes("bedroom"))
          .length,
        kitchen: state.filter((todo) => todo.categories.includes("kitchen"))
          .length,
        bathroom: state.filter((todo) => todo.categories.includes("bathroom"))
          .length,
      });
    }
  }, [state]);

  return (
    <div className="category-tabs">
      <Menu pointing secondary>
        <Tab
          name="all"
          active={active === "all"}
          handleClick={handleClick}
          counts={0}
        />
        <Tab
          name="living_room"
          active={active === "living_room"}
          handleClick={handleClick}
          counts={counts.living_room}
        />
        <Tab
          name="bedroom"
          active={active === "bedroom"}
          handleClick={handleClick}
          counts={counts.bedroom}
        />
        <Tab
          name="kitchen"
          active={active === "kitchen"}
          handleClick={handleClick}
          counts={counts.kitchen}
        />
        <Tab
          name="bathroom"
          active={active === "bathroom"}
          handleClick={handleClick}
          counts={counts.bathroom}
        />
      </Menu>
    </div>
  );
};

export default CategoryTabs;
