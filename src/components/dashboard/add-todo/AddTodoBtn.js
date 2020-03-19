import React from "react";
import TodoForm from "../todo-form/TodoForm";
import AssignTime from "../add-todo/AssignTime";

import {Button, Modal, input, Form, Icon, Dropdown as SemanticDropDown} from "semantic-ui-react";

import styled from "styled-components";

const options = [
  { key: '1', text: 'Mom', value: 'Mom' },
  { key: '2', text: 'Dad', value: 'Dad' },
  { key: '3', text: 'Daughter', value: 'Daughter' },
  { key: '4', text: 'Son', value: 'Son' },
]

const ModalButton = () => {
    return (
      <Button className="ui primary">
          <Icon aria-hidden="true" className="add" />
  
        </Button>
    )
  }


  // addItem(e){
  //   e.preventDefault();
  //   const {completed} = this.state;
  //   const newItem = this.newItem.value;

  //   this.setState({
  //     completed: [...this.state.completed, newItem]
  //   })
  // }

  // onSubmit={(e)=> {this.addItem(e)}}

  const AddTodoBtn = ({todo, toggleCompleted, completed, deleteTodo}) => (
    <Modal trigger={ModalButton()}>
      <Modal.Header> Add a new task below! </Modal.Header>
      <Form className="form-inline">
        <Form.Group widths='equal'>
        <Form.Input type="text" placeholder="Task" /> <br></br>
        
      </Form.Group>
      <h3> Pick Date/Time below</h3>
      <AssignTime></AssignTime> <br></br>
    <Form.Select options={options} placeholder='Household Member' error /> <br></br>
    <Form.Checkbox label='This member is a Child' error /><br></br>
    <Button> Add </Button>
    
  </Form>
       
        </Modal>
        

  )


  export default AddTodoBtn;





//   const Task = styled.div`
//    display: flex;
//    justify-content: space-between;
//    align-items: center;
//    width: 60%;
//    margin: 20px auto;
//    padding: 10px;
//    background-color: #fff;
//    cursor: pointer;
//    div {
//        display: flex
//        align-items: baseline; 
//        .circle.icon {
//            margin-right: 20px;
//        }
//        p {
//            font-size: 1.5rem;
//        }
//    }
//    .ui.button {
//     background-color: #bb1333;
//     color: #fff;
// }
// `;

// const Todo = ( { todo, toggleCompleted, completed, deleteTodo } ) => {
//     return (
//         <Task onClick={() => toggleCompleted(todo.id)}>
//             <div>
//                 <Icon color={completed ? 'green' : 'red'} name='circle' />
//                 <p>{todo.task}</p>
//             </div>
//             <Button onClick={(e) => deleteTodo(e, todo.id)}>Delete</Button>
//         </Task>
//     );
// }

// export default Todo;

