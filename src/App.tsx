import "./App.css";
import { MainPage } from "./components/pages/MainPage";
import { Container, Main, Wrapper } from "./styles/App.styled";
import { Route, Routes } from "react-router-dom";
import { Theme } from "@radix-ui/themes";
import { CardWithRadix } from "./components/pages/cards/card-with-radix/CardWithRadix";
import { CardWithShadcn } from "./components/pages/cards/card-with-shadcn/CardWithShadcn";

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
