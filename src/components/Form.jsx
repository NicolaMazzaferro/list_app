import FormControl from '@mui/material/FormControl';
import FilledInput from '@mui/material/FilledInput';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import { useState } from 'react';
import ListTask from './ListTask';

function BasicFormControl({ addTask, deleteTask }) {

  //^ Stato del nuovo dato 
  const [newTask, setNewTask] = useState('')
  
  //^ Al Submit aggiorna i Dati con il nuovo Dato
  const formSubmitted = (event) => {
    event.preventDefault();
    addTask(newTask);
    setNewTask('')
  }

  //^ Bind dell'input
  const getContentTask = (event) => {
    setNewTask(event.currentTarget.value);
  }

  //^ Cancella Task
  const handleDeleteTask = (id) => {
    deleteTask(id);
  }
  
  
  return (
    <form onSubmit={formSubmitted}>
    <FormControl variant="filled">
      <InputLabel style={{color:'#1A67B1', left:'15px'}} htmlFor="component-filled">Aggiungi qui il tuo film</InputLabel>
      <FilledInput value={newTask} required onChange={getContentTask} style={{backgroundColor:'#262C32', color: 'white'}} id="component-filled"/>
      <Button type='submit' style={{marginTop:'15px'}} variant="contained">AGGIUNGI</Button>
    </FormControl>
    
    </form>

  );
}

export default BasicFormControl