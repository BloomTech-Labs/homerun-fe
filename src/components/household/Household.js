import React, { useEffect, useState } from 'react';
import List from './List';
import CategoryList from '../dashboard/Categories/CategoryList';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import actions from '../../actions';

const Household = () => {
  const dispatch = useDispatch();
  const categoryState = useSelector((state) => state.categories.categories);
  const [editEditing, setEditEditing] = useState(false);
  const [addEditing, setAddEditing] = useState(false);

  useEffect(() => {
    dispatch(actions.categories.fetchCategories());
  }, []);
  return (
    <>
      <div className="household members-container">
        <List />
      </div>
      <div>
        <CategoryList
          categoryState={categoryState}
          dispatch={dispatch}
          editEditing={editEditing}
          setEditEditing={setEditEditing}
          addEditing={addEditing}
          setAddEditing={setAddEditing}
        />
      </div>
    </>
  );
};

export default Household;
