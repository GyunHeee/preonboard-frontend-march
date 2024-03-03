import { styled } from 'styled-components';

export default function TodoItem({ todo }) {
  console.log(todo);

  return (
    <Section>
      <Text key={todo.id}>{todo.todoText}</Text>
      <DeleteBtn>Delete</DeleteBtn>
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
