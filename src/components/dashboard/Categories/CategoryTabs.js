import React, { useState, useLayoutEffect, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import actions from '../../../actions/';
import { Menu } from 'semantic-ui-react';

import Tab from './Tab.js';

const CategoryTabs = () => {
  const [active, setActive] = useState('all');
  const dispatch = useDispatch();
  const categoryState = useSelector((state) => state.categories.categories);

  const handleClick = (e, { name }) => {
    e.preventDefault();
    // everytime we fetch the todos we filter them and make sure only the todos that are a part of the current category are displaying
    dispatch(actions.todo.updateCategory(name));
    dispatch(actions.todo.fetchTodos());
    setActive(name);
  };

  useEffect(() => {
    dispatch(actions.categories.fetchCategories());
  }, []);

  return (
    <div className="category-tabs">
      <Menu pointing secondary>
        <Tab name="all" active={active === 'all'} handleClick={handleClick} />
        {categoryState.map((cat) => {
          return (
            <Tab
              key={cat.id}
              name={cat.category_name}
              active={active === cat.category_name}
              handleClick={handleClick}
            />
          );
        })}
      </Menu>
    </div>
  );
};

export default CategoryTabs;
