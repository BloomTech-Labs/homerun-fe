import React from 'react';
import TodoList from './todos/TodoList.js';

import CategoryTabs from './Categories/CategoryTabs.js';

const Dashboard = (props) => {
  return (
    <section data-testid="container-section" className="ui container">
      <CategoryTabs />
      <TodoList />
    </section>
  );
};

export default Dashboard;
