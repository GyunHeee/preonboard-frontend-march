import { styled } from 'styled-components';
import TodoForm from '../Todo/TodoForm';
import TodoItem from '../Todo/TodoItem';
import { useSelector } from 'react-redux';
import { todo } from '../../model/todo';

export default function TodoList() {
  const todoList = useSelector((state) => state.todo.todoList);
  console.log(todoList);

  return (
    <Container>
      <TodoForm />
      <List>
        {todoList &&
          todoList.map((todoItem: todo) => {
            return <TodoItem todo={todoItem} />;
          })}
      </List>
    </Container>
  );
}

const Container = styled.section`
  margin: 5rem;
  height: 100%;
`;

const List = styled.ul`
  list-style: none;
  margin: 3rem;
  padding: 2rem;
`;
