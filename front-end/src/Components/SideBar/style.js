import styled from "styled-components";

export const Wrapper = styled.div`
  width: 200px;
  height: 100%;
  float: left;
  padding: 20px;
`;


export const Logo = styled.img`
  display: block;
  margin: auto;
`

export const MenuItems = styled.div`
  a {
    display: block;
    text-decoration: none;
    color: #444;
    margin: 20px auto;
    padding: 10px;
    border-radius: 3px;
    box-shadow: none;

    &:hover {
      color: #000;
      background: rgba(255,255,255, 1)
    }
  }
`