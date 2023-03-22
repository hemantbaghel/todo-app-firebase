import React from 'react'
import {List} from '@mui/material';
import {ListItem,  ListItemAvatar,  ListItemText } from '@material-ui/core';
import './Todo.css';


function Todo(props) {
  return (
    <List className='todo_list'>
    <ListItem>
    <ListItemAvatar>

    </ListItemAvatar>
       <ListItemText primary ={props.item} secondary ="todo" />
</ListItem>
   
    </List>
  )
}

export default Todo
