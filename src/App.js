import GlobalStyle from "./globalStyled/GlobalStyled";
import Router from "./routes/Router";
import { AppContainer } from "./styled";

function App() {
  return (
    <AppContainer className="App">
      <GlobalStyle />
      <Router />
    </AppContainer>
  );
}

export default App;
