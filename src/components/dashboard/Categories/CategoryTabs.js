import React, { useState, useLayoutEffect } from "react";

import { Menu, Segment } from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";
import actions from "../../../actions/";

import { Badge } from "antd";

const CategoryTabs = () => {
  const category = useSelector((state) => state.todos.currentCategory);
  const [active, setActive] = useState(category);
  const [counts, setCounts] = useState({});
  const dispatch = useDispatch();
  const state = useSelector((state) => state.todos);
  // living room, bedroom, kitchen, bathroom

  const handleClick = (e, { name }) => {
    e.preventDefault();
    // everytime we fetch the todos we filter them and make sure only the todos that are a part of the current category are displaying
    dispatch(actions.todo.updateCategory(name));
    dispatch(actions.todo.fetchTodos());
    setActive(name);
  };

  useLayoutEffect(() => {
    if (state.todos.todos) {
      setCounts({
        living_room: state.allTodos.filter((todo) =>
          todo.categories.includes("living_room")
        ).length,
        bedroom: state.allTodos.filter((todo) =>
          todo.categories.includes("bedroom")
        ).length,
        kitchen: state.allTodos.filter((todo) =>
          todo.categories.includes("kitchen")
        ).length,
        bathroom: state.allTodos.filter((todo) =>
          todo.categories.includes("bathroom")
        ).length,
      });
    }
  }, [state.todos.todos]);
  return (
    <div className="category-tabs">
      <Menu pointing secondary>
        <Menu.Item name="all" active={active === "all"} onClick={handleClick} />
        <Menu.Item
          name="living_room"
          active={active === "living_room"}
          onClick={handleClick}
        >
          <Badge offset={[10, 0]} count={counts.living_room}>
            Living Room
          </Badge>
        </Menu.Item>
        <Menu.Item
          name="bedroom"
          active={active === "bedroom"}
          onClick={handleClick}
        >
          <Badge offset={[10, 0]} count={counts.bedroom}>
            Bedroom
          </Badge>
        </Menu.Item>

        <Menu.Item
          name="kitchen"
          active={active === "kitchen"}
          onClick={handleClick}
        >
          <Badge offset={[10, 0]} count={counts.kitchen}>
            Kitchen
          </Badge>
        </Menu.Item>
        <Menu.Item
          name="bathroom"
          active={active === "bathroom"}
          onClick={handleClick}
        >
          <Badge offset={[10, 0]} count={counts.bathroom}>
            Bathroom
          </Badge>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default CategoryTabs;
