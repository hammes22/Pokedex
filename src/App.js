import GlobalState from "./contexts/GlobalState";
import { GlobalStyled } from "./globalStyled/GlobalStyled";
import Router from "./routes/Router";


function App() {
  return (
    <div className="App">
      <GlobalState>
        <GlobalStyled />
        <Router />
      </GlobalState>
    </div>
  );
}

export default App;
