import React, { useState, useLayoutEffect, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import actions from '../../../actions/';
import { Menu } from 'semantic-ui-react';

import Tab from './Tab.js';

const CategoryTabs = () => {
  const [active, setActive] = useState('all');
  const [counts, setCounts] = useState({});
  const dispatch = useDispatch();
  const state = useSelector((state) => state.todos.todos);
  const categoryState = useSelector((state) => state.categories.categories);
  console.log('This is the cat state', categoryState);

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

  // useLayoutEffect(() => {
  //   if (state) {
  //     console.log(categoryState);
  //     // let layoutObj = {};
  //     // categoryState.forEach((cat, idx) => {
  //     //   layoutObj.cat[idx].category_name = state.filter((todo) => {
  //     //     todo.categories.includes(cat[idx].category_name);
  //     //   });
  //     // });
  //     setCounts({
  //       [categoryState[0].category_name]: state.filter((todo) =>
  //         todo.categories.includes('living_room')
  //       ).length,
  //       bedroom: state.filter((todo) => todo.categories.includes('bedroom'))
  //         .length,
  //       kitchen: state.filter((todo) => todo.categories.includes('kitchen'))
  //         .length,
  //       bathroom: state.filter((todo) => todo.categories.includes('bathroom'))
  //         .length,
  //     });
  //   }
  // }, [state]);

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
