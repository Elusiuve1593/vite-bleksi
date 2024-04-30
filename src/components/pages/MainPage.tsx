import React from 'react';
import { Button, Container } from "./MainPage.styled";

export const MainPage = () => {
  return (
    <Container>
      <Button to="/radix-card">Go to Radix card</Button>
      <Button to="/shadcn-card" isShadcn>Go to Shadcn card</Button>
    </Container>
  );
};
