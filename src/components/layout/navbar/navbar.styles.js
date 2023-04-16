import styled from "styled-components";

export const NavWrapper = styled.div`
  height: 56px;
  background: red;
  position: fixed;
  width: 100%;
  top: 0px;
  background-color: #27262c;
  border-bottom: 1px solid #383241;
  transition: top 0.3s;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
`;

export const NavLinks = styled.div`
  display: flex;
  width: 40%;
  justify-content: space-between;
  margin-left: 30px;
  align-items: center;
`;

export const NavButtonWrapper = styled.div`
  width: 380px;
`;

export const ButtonStyles = styled.button`
  font-size: 16px;
  font-weight: 400;
  opacity: 1;
  pointer-events: inherit;
  padding: 0px 16px;
  height: 48px;
  color: #b8add2;
  background: transparent;
  border: none;
  cursor: pointer;
  font-weight: 500;
  &:hover {
    background: #353547;
    border-radius: 16px;
  }
`;
