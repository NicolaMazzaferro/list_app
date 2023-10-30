import Checkbox from '@mui/material/Checkbox';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from '@mui/material';

function ListTask({ tasks, doneTask, deleteTask }) {
    const handleDeleteTask = (id) => {
        deleteTask(id);
      }
    return (
        <div>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
                {tasks.map((task, id) => (
                    <li
                        key={id}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            marginBottom: '8px',
                        }}
                    >
                        <Checkbox
                            checked={task.done}
                            onChange={() => doneTask(id, !task.done)}
                            sx={{
                                '& .MuiSvgIcon-root': {
                                    color: (theme) => theme.palette.success.main,
                                },
                                '&.Mui-checked': {
                                    '& .MuiSvgIcon-root': {
                                        color: (theme) => theme.palette.success.main,
                                    },
                                },
                                '&.Mui-disabled': {
                                    '& .MuiSvgIcon-root': {
                                        color: (theme) => theme.palette.text.disabled,
                                    },
                                },
                            }}
                        />

                        <Button className='wrapTrahIcon' onClick={() => handleDeleteTask(id)}>
                            <DeleteIcon className='trashIcon' />
                        </Button>

                        <div
                            style={{
                                textDecoration: task.done ? 'line-through' : 'none',
                            }}
                        >
                            {task.content}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ListTask;
