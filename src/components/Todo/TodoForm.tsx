import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { styled } from 'styled-components';
import { addTodo } from '../../store/todo';

export default function TodoForm() {
  const dispatch = useDispatch();
  const [todoText, setTodoText] = useState('');

  const handleAdd = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(addTodo(todoText));
    setTodoText('');
  };

  return (
    <Form>
      <TextInput
        type="text"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
      <AddBtn onClick={(e) => handleAdd(e)}>Add</AddBtn>
    </Form>
  );
}

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
`;

const TextInput = styled.input`
  border-radius: 3rem;
  margin: 2rem 1rem;
  padding: 0.3rem 0.7rem;
  border: solid 2px #3455eb;
`;

const AddBtn = styled.button`
  border-radius: 3rem;
  margin: 2rem 1rem;
  padding: 0.3rem 0.7rem;
  border: solid 2px #3455eb;
  background: white;
  cursor: pointer;
`;
