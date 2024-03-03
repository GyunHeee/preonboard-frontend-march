import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { styled } from 'styled-components';
import { addTodo } from '../../store/todo';

export default function TodoForm() {
  const dispatch = useDispatch();
  const [todoText, setTodoText] = useState('');

  const handleAdd = (e) => {
    e.preventDefault();
    console.log(todoText);
    dispatch(addTodo(todoText));
    setTodoText('');
  };

  return (
    <Form>
      <input type="text" onChange={(e) => setTodoText(e.target.value)} />
      <button onClick={(e) => handleAdd(e)}>Add</button>
    </Form>
  );
}

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
`;
