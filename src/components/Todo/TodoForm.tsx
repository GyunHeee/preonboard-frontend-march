import { styled } from 'styled-components';

export default function TodoForm() {
  return (
    <Section>
      <input type="text" />
      <button>Add</button>
    </Section>
  );
}

const Section = styled.section`
  display: flex;
  justify-contents: center;
  align-items: center;
  margin: auto;
`;
