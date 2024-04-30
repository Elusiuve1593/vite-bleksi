import { Route, Routes } from "react-router-dom";
import { Container, Main, Wrapper } from "../styles/App.styled";
import { CardWithRadix } from "./pages/cards/card-with-radix/CardWithRadix";
import { CardWithShadcn } from "./pages/cards/card-with-shadcn/CardWithShadcn";
import { MainPage } from "./pages/MainPage";
import { Theme } from "@radix-ui/themes";

export const App = (): JSX.Element => {
  return (
    <Wrapper>
      <Main>
        <Container>
          <Routes>
            <Route path="/" element={<MainPage />}></Route>
            <Route
              path="/radix-card"
              element={
                <Theme>
                  <CardWithRadix />
                </Theme>
              }
            ></Route>
            <Route path="/shadcn-card" element={<CardWithShadcn />}></Route>
          </Routes>
        </Container>
      </Main>
    </Wrapper>
  );
};
