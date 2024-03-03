import { styled } from 'styled-components';
import TodoForm from '../Todo/TodoForm';
import TodoItem from '../Todo/TodoItem';

export default function TodoList() {
  return (
    <Container>
      <TodoForm />
      <ul>
        <TodoItem />
      </ul>
    </Container>
  );
}

const Container = styled.section`
  margin-top: 5rem;
`;
