import styled from 'styled-components';

export const Container = styled.div`
  background-color: #fff;
  padding: 0 30px;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 900px;
  height: 64px;
  margin: 0 auto;

  nav {
    display: flex;
    align-items: center;

    img {
      padding-right: 20px;
      margin-right: 20px;
      border-right: 1px solid #eee;
    }

    a {
      color: #7159c1;
      font-weight: 700;
    }
  }

  aside {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  display: flex;
  padding-left: 20px;
  margin-left: 20px;
  border-left: 1px solid #eee;

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #333;
    }

    a {
      display: block;
      color: #999;
      font-size: 12px;
      margin-top: 2px;
    }
  }

  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }
`;
