import React, { useEffect } from 'react';
import TodoList from './todos/TodoList.js';
import CategoryTabs from './Categories/CategoryTabs.js';

const Dashboard = (props) => {
  return (
    <section data-testid="container-section" className="container ui">
      <CategoryTabs />
      <TodoList />
    </section>
  );
};

export default Dashboard;
