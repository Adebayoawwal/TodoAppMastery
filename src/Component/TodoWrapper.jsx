import { memo, useState } from 'react';
import TodoForm from './TodoForm';
import {v4 as uuidv4} from "uuid";

const TodoWrapper = () => {
 const [todos,setTodos]= useState([]);
 
 const AddTodo= todo => {
    setTodos([...todos,{id: uuidv4(),task: todo ,
        completed: false,IsEditing:false}])

 }
  return (
    <div className='TodoWrapper'>
        <TodoForm AddTodo={AddTodo}/>
    </div>
  );
};
export default memo(TodoWrapper);