import React from 'react';

import Box from '@mui/material/Box';

import { TodoItem } from './TodoItem/TodoItem';
import { EditTodoItem } from './EditTodoItem/EditTodoItem';

export const TodoList = ({
  todoList,
  removeTask,
  updateTaskCheck,
  editTask,
  editId,
  onChangeTodo,
}) => {
  return (
    <Box>
      {todoList.map(todo => {
        if (editId === todo.id) {
          return (
            <EditTodoItem
              key={todo.id}
              task={todo}
              onTaskUpdate={onChangeTodo}
            />
          );
        }
        return (
          <TodoItem
            key={todo.id}
            task={todo}
            removeTask={removeTask}
            updateTaskCheck={updateTaskCheck}
            editTask={editTask}
          />
        );
      })}
    </Box>
  );
};
