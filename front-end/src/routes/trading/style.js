import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 30px;
  float: right;
  width: calc(100vw - 300px);
  height: 100%;

  h1 {
    margin-bottom: 15px;
  }

  h3 {
    margin-bottom: 15px;
  }

  .inv {
    display: flex;
    justify-content: space-around;
    align-items: center;

    form, .result {
      padding: 50px;
      width: 500px;
    }
  }
`;

export const Listing = styled.div`
  display: flex;
  padding: 20px;
  margin-bottom: 30px;

  img {
    width: 200px;
    margin-right: 30px;
    border-radius: 5px;
  }

  button {
    float: right;
  }
`;
export const Title = styled.h2`
  margin-bottom: 10px;
`;

export const Description = styled.p``;
