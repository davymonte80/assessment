import styled from "styled-components";

export const Navcontainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #fff;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
  gap: 20px;
  span {
    font-size: 1.5rem;
    font-weight: 600;
    color: #000;
    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;
