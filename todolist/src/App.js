import React, {useState} from 'react';
import styles from "./App.module.css";
import {Input, Button, Checkbox} from "antd";
function App() {
    const [todos, setTodos] = useState([{id :1, value:"buy milk", resolved:false, edit: false},
        {id :2, value:"buy milk2", resolved:false, edit:false}]);//на его основе изменене элементов
    const [input, setInput] = useState('');
    //controlled component - задаем alue, слушаем ихмененения и меняеи value
    //const [currentTodo, setCurrentTodo] = useState(initialFormState);
    const [isChecked, setChecked] = useState(false);

    console.log('Our input: ', input);
  return (
    <div className={styles.container}>
        <div className={styles.content}>

            <div className={styles.inputContainer}>
                <div>
            <Input value={input} onChange={(event)=>(setInput(event.target.value))}/>
                        <Checkbox checked={isChecked} onClick={() => filterTodo()}> only done</Checkbox>

            <Button type="primary" className={styles.actionButton}
                    onClick={addTodo}> Add </Button>
                        </div>
            </div>
            { (isChecked ?
                (todos.filter(item => item.resolved===true)):(todos.filter(item=>item)))
                    .map((todo) => (<ToDoItem key={todo.id}
                                                  id={todo.id}
                                                  value={todo.value}
                                                  edit = {todo.edit}
                                                  resolved={todo.resolved}
                                                  toggleTodo={toggleTodo}
                                                  deleteTodo={deleteTodo}
                                              editTodo = {editTodo}
                                              addTodo={addTodo}
                                              updateTodo={updateTodo}
                                              setInput={setInput}
                />))
            }
        </div>
    </div>
  );

    function filterTodo() {
        setChecked(!isChecked);
    }
  function addTodo() {
      const todo = input;
      const lastid = todos.length === 0 ? 0: todos[todos.length-1].id + 1;
      const myItems = [...todos, {value:todo, resolved:false, id:lastid, edit:false}];
      setTodos(myItems);
      setInput();
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

    function deleteTodo(id){
        const idx = todos.findIndex(todo => todo.id === id);
        const newTodos = [...todos];
        newTodos.splice(idx, 1);
        setTodos(newTodos);
    }

    function editTodo(id) {
        const idx = todos.findIndex(todo => todo.id === id);
        const newTodos = [...todos];
        let todo = todos[idx];
        setInput(todo.value);
        todo = {...todo, edit: !todo.edit};
        newTodos[idx] = todo;
        setTodos(newTodos);
    }
    function updateTodo(id) {
        const idx = todos.findIndex(todo => todo.id === id);
        const newTodos = [...todos];
        let todo = todos[idx];
        todo={...todo, value:input, edit: !todo.edit};
        newTodos[idx]=todo;
        setInput();
        setTodos(newTodos);
    }
}

function ToDoItem(props) {
    const {id, value, edit, toggleTodo, resolved, deleteTodo, editTodo, updateTodo} = props;

    return (<div className={styles.listContainer} >
        <div className={styles.listItem} >
            <Checkbox checked={resolved} onClick={() => toggleTodo(id)} ></Checkbox>
            { edit ? ( <div>
                <Button type="primary" className={styles.actionButton}
                        onClick={()=>updateTodo(id)}> Update </Button></div>
            ) : (<h3 className={styles.todoTitle}> {value}
            </h3>)
            }
        </div>
        <div>

            <Button type="ghost" onClick={()=>editTodo(id)}> Edit </Button>
            <Button type="danger" className={styles.deleteButton}
                     onClick={() => deleteTodo(id)}> Delete </Button>
        </div>
    </div>);
}
export default App;
