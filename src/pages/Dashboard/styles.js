import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  margin: 50px auto;

  header {
    display: flex;
    align-self: center;
    align-items: center;

    button {
      background: none;
      border: 0;
    }

    strong {
      color: #fff;
      font-size: 24px;
      margin: 0 15px;
    }
  }

  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 15px;
    margin-top: 30px;
  }
`;

export const Time = styled.li`
  background-color: #fff;
  padding: 20px;
  border-radius: 4px;
  opacity: ${props => (props.past ? 0.6 : 1)};

  strong {
    display: block;
    color: ${props => (props.available ? '#999' : '#7159c1')};
    font-size: 20px;
    font-weight: 400;
  }

  span {
    display: block;
    color: ${props => (props.available ? '#999' : '#555')};
    margin-top: 3px;
  }
`;
