import React from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm.js';

import '../../SASS/Dashboard.scss'


const Dashboard = () => {

    return (
        <>
        <h1>Dashboard</h1>
        <TodoList />
        <TodoForm /> 
        </>
    )
}

export default Dashboard;

