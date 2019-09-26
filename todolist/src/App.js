import React from 'react';
import styles from "./App.module.css";
import {Input, Button} from "antd";

function App() {
  return (
    <div className={styles.container}>
        <div className={styles.content}>

            <div className={styles.inputContainer}>
            <Input/>
            <Button type="primary" className={styles.actionButton}> Add </Button>
            </div>

        </div>
    </div>
  );
}

export default App;
