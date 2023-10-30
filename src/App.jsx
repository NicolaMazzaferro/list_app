import Form from './components/Form'
import Grid from '@mui/material/Unstable_Grid2';
import ListTask from './components/ListTask';
import { useState } from 'react';

function App() {
  //^ Stato dei dati
  const [tasks, setTasks] = useState([]);

  //! Metodo dettagliato
  // const addTask = (newTask) => {
  //   setTasks((prev) => {
  //     const tasksCopy = prev.slice();
  //     tasksCopy.push({
  //       id: 3,
  //       content: newTask,
  //       done: false
  //     })
  //     return tasksCopy;
  //   })
  // }

  //* Metodo Ridotto
    //^ SETTA IL TASK RISPETTO ALLO STATO PRECEDENTE
      //^  RITORNA TUTTO QUELLO PRESENTE NELLO STATO
        //^ IN PIU' L'OGGETTO
  const addTask = (newTask) => {
    setTasks((prev) => [
      ...prev,
      {
        content: newTask,
        done: false
      }
    ])
  }

  //^ Convalida Task
  const doneTask = (id) => {
    setTasks((prev) => {
      return prev.map((task, index) => {
        if (index === id) {
          return { ...task, done: !task.done };
        }
        return task;
      });
    });
  }

  //^ Elimina Task
  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task, index) => index !== id));
  } 
  

  return (
    <Grid container display="flex" flexDirection={'column'} alignItems="center">
        <div className='container'>
        <Grid>
          <h1 style={{color:'#1A67B1', textAlign:'center', marginBottom:'20px', marginTop:0}}>List App</h1>
        </Grid>
        <Grid>
          <Form addTask={addTask} deleteTask={deleteTask} />
        </Grid>
        <Grid>
          <ListTask tasks={tasks} doneTask={doneTask} deleteTask={deleteTask} />
        </Grid>
    </div>
      </Grid>
  )
  
}

export default App
