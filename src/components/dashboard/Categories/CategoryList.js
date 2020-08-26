import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import actions from '../../../actions';
import CategoryEditModal from './CategoryEditModal';
import CategoryAddModal from './CategoryAddModal';
import { Dimmer, Loader } from 'semantic-ui-react';

const CategoryList = (props) => {
  const [category, setCategory] = useState({});
  const loading = useSelector((state) => state.categories.loading);
  const permission = useSelector((state) => state.user.permission_level);

  const handleDelete = (id) => {
    props.dispatch(actions.categories.deleteCategory(id));
    console.log(loading);
  };

  return (
    <div>
      {loading ? (
        <Dimmer active inverted>
          <Loader size="large">Loading</Loader>
        </Dimmer>
      ) : (
        <div className="category-list">
          <h3 className="ui header" id="header-cat">
            Todo Categories
          </h3>
          <div className="household-categories">
            {props.categoryState.map((cat) => {
              return (
                <div className="category-item" key={cat.id}>
                  <h3 className="category-name">{cat.category_name}</h3>

                  {permission >= 3 && (
                    <>
                      <i
                        className="ui icon edit large blue todo-icon edit-icon"
                        onClick={() => {
                          setCategory(cat);
                          props.setEditEditing(true);
                        }}
                      />
                      <i
                        className="ui icon delete large blue todo-icon"
                        onClick={() => handleDelete(cat.id)}
                      />
                    </>
                  )}
                </div>
              );
            })}
          </div>
          {permission >= 3 && (
            <div className="add-btn-center">
              <button
                className="rounded-md add-category-btn"
                onClick={() => {
                  props.setAddEditing(true);
                }}
              >
                Add Category
              </button>
            </div>
          )}
          <CategoryEditModal
            category={category}
            open={props.editEditing}
            setOpened={props.setEditEditing}
          />
          <CategoryAddModal
            category={category}
            open={props.addEditing}
            setOpened={props.setAddEditing}
          />
        </div>
      )}
    </div>
  );
};

export default CategoryList;
