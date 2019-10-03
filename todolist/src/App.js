import React, {useRef, useState} from 'react';
import styles from "./App.module.css";
import {Input, Button, Checkbox} from "antd";

function App() {
    //const toDos = [1,2,3,4,5,6,7,8,9,10]
    const [todos, setTodos] = useState([{id :1, value:"buy milk", resolved:false},
        {id :2, value:"buy milk2", resolved:false}]);//на его основе изменене элементов
    //const input = useRef(null); //{current: 'OUR REF FROM INPUT'}
    const [input, setInput] = useState('');
    //controlled component - задаем alue, слушаем ихмененения и меняеи value
    console.log('Our input: ', input);

  return (
    <div className={styles.container}>
        <div className={styles.content}>

            <div className={styles.inputContainer}>
            <Input value={input} onChange={(event)=>(setInput(event.target.value))}/>

            <Button type="primary" className={styles.actionButton}
                    onClick={addTodo}> Add </Button>
            </div>
            {todos.map((todo)=> (<ToDoItem key={todo.id}
                                           id={todo.id}
                                           value={todo.value}
                                           resolved={todo.resolved}
                                           toggleTodo={toggleTodo}/>))
            }
        </div>
    </div>
  );

  function addTodo() {
      const todo = input;
      const lastid = todos.length == 0 ? 0: todos[todos.length-1].id + 1;
      const myItems = [...todos, {value:todo, resolved:false, id:lastid}];
      setTodos(myItems);
      console.log(myItems);
  }

    function toggleTodo(id) {
      const idx = todos.findIndex(todo => todo.id === id);
      let todo = todos[idx];
      todo = {...todo, resolved: !todo.resolved};
      const newTodos = [...todos];
      newTodos[idx] = todo;
      setTodos(newTodos);
    }
}



function ToDoItem(props) {
    const {id, value, toggleTodo, resolved} = props
    return (<div className={styles.listContainer} onClick={() => toggleTodo(id)}>
        <div className={styles.listItem}>
            <Checkbox checked={resolved}></Checkbox>
            <h3 className={styles.todoTitle}> {value} </h3>
        </div>
    </div>);
}
export default App;
