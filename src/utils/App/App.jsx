import { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material';
import Box from '@mui/material/Box';

import { Header, Panel, TodoList } from 'Components';

import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from 'routes';
import { AuthContextProvider } from 'context/AuthContext';

export const App = () => {
  const [editId, setEditId] = useState(null);
  const [todoList, setTodoList] = useState([
    { id: 1, name: 'Task1', description: 'Test', checked: false },
    {
      id: 2,
      name: 'Task2',
      description: 'adssadsadsadsadasdsadsadasdasdsadasd',
      checked: false,
    },
    {
      id: 3,
      name: 'Task3',
      description: 'Teasdsadsadsadsadst',
      checked: true,
    },
    {
      id: 4,
      name: 'Task4',
      description: 'Teasdsadsadsadsadst',
      checked: false,
    },
  ]);

  const createTask = ({ name, description }) => {
    setTodoList([
      ...todoList,
      {
        id: todoList[todoList.length - 1] + 1,
        name,
        description,
        checked: false,
      },
    ]);
  };

  const editTask = id => setEditId(id);

  const removeTask = id => {
    setTodoList(todoList.filter(todo => todo.id !== id));
  };

  const updateTaskCheck = id => {
    setTodoList(
      todoList.map(todo => {
        if (todo.id === id) {
          return { ...todo, checked: !todo.checked };
        }
        return todo;
      }),
    );
  };

  const onChangeTodo = ({ name, description }) => {
    setTodoList(
      todoList.map(todo => {
        if (todo.id === editId) {
          return { ...todo, name, description };
        }
        return todo;
      }),
    );
    setEditId(null);
  };

  const theme = createTheme({
    palette: {
      // primary: {
      // 	main: '#fff',
      // },
      // secondary: {
      // 	main: '#000',
      // },
    },
    typography: {
      fontFamily: 'Roboto, Arial, sans-serif',
    },
  });

  return (
    <AuthContextProvider>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <AppRoutes />
        </ThemeProvider>
      </BrowserRouter>
    </AuthContextProvider>
  );
};

{
  /* <Box display='flex' flexDirection='column' width='400px'>
				<Header />
				<Panel createTask={createTask} />
				<TodoList
					todoList={todoList}
					removeTask={removeTask}
					updateTaskCheck={updateTaskCheck}
					editTask={editTask}
					editId={editId}
					onChangeTodo={onChangeTodo}
				/>
			</Box> */
}
