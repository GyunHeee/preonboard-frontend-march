import { useDispatch } from 'react-redux';
import { styled } from 'styled-components';
import { deleteTodo } from '../../store/todo';
import { todo } from '../../model/todo';

interface TodoItemProps {
  todo: todo;
}

export default function TodoItem({ todo }: TodoItemProps) {
  console.log(todo);
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
  };

  return (
    <Section>
      <Text key={todo.id}>{todo.todoText}</Text>
      <DeleteBtn onClick={handleDelete}>Delete</DeleteBtn>
    </Section>
  );
}

const Section = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  margin: 1.5rem;
  border: solid 2px #3455eb;
`;

const Text = styled.li`
  border-radius: 3rem;
  padding: 0.3rem 0.7rem;
  border: solid 2px #3455eb;
`;

const DeleteBtn = styled.button`
  border-radius: 3rem;
  padding: 0.3rem 0.7rem;
  border: solid 2px #3455eb;
  background: white;
  cursor: pointer;
`;
