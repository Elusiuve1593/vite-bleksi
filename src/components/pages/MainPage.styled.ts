import styled from "styled-components";
import { Link } from "react-router-dom";

interface ButtonProps {
  isShadcn?: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
`;

export const Button = styled(Link)<ButtonProps>`
  margin: 10px;
  padding: 15px;
  max-width: 400px;
  display: inline-block;
  background-color: ${({ isShadcn }) => (isShadcn ? "#212121" : "#bc352d")};
  color: #ffffff;
  border: none;
  border-radius: 17px;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s, border-color 0.3s,
    transform 0.3s;

  &:hover {
    background-color: ${({ isShadcn }) => (isShadcn ? "#000" : "#d91d16")};
    border-color: ${({ isShadcn }) => (isShadcn ? "#0056b3" : "#0056b3")};
    transform: translateY(-2px);
    cursor: pointer;
  }

  &:active {
    transform: translateY(0);
  }
`;
