import { styled } from 'styled-components';

export default function TodoItem() {
  return (
    <Section>
      <li>List1</li>
      <button>Delete</button>
    </Section>
  );
}

const Section = styled.section`
  display: flex;
  justify-content: space-between;
`;
