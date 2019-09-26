import React from 'react';
import styles from "./App.module.css";
import {Input, Button, Checkbox} from "antd";

function App() {
    const toDos = [1,2,3,4,5,6,7,8,9,10]
  return (
    <div className={styles.container}>
        <div className={styles.content}>

            <div className={styles.inputContainer}>
            <Input/>
            <Button type="primary" className={styles.actionButton}> Add </Button>
            </div>
            {toDos.map(()=> <ToDoItem/>)}
        </div>
    </div>
  );
}

function ToDoItem() {
    return (<div className={styles.listContainer}>
        <div className={styles.listItem}>
            <Checkbox></Checkbox>
            <h3 className={styles.todoTitle}> Buy cheese </h3>
        </div>
    </div>);
}
export default App;
