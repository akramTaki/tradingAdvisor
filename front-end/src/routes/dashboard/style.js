import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 30px;
  float: right;
  width: calc(100vw - 300px);
  height: 100%;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  align-content: flex-start;

  h1,
  hr {
    flex: 0 0 100%;
  }

  hr {
    margin-bottom: 30px;
  }

  button {

    float: right;
  } 
`;

export const DashboardItem = styled.div`
  width: 400px;
  padding: 20px;
  margin-bottom: 50px;
  box-shadow: none;
  .main-svg {
    background: transparent !important;
  }
`;
