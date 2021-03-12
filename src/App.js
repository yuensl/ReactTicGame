import "./styles.css";
/*
import Greet from "./components/Greet.js";
import Toggle from "./components/Toggle.js";
import CounterApp from "./components/CounterApp.js";
import Stylesheet from "./components/Stylesheet";
import InlineStyle from "./components/inlineStyle";
import CSSModule from "./components/CSSModule";
*/

import Game from "./game/Tic.js";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      {/*
      <Greet name="John" code="001" />
      <Greet name="Justin" code="002" />
      <Greet name="Joy" code="003" />
      

      <Toggle />
      <CounterApp />
      <Stylesheet />
      <InlineStyle />
      <CSSModule />
  */}

      <Game />
    </div>
  );
}
