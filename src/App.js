import Data from "./meusComponentes/Data.js";
import DataV2 from "./meusComponentes/DataV2.jsx"
import Contador from "./meusComponentes/ContadorV2.jsx"
import ContadorV2 from "./meusComponentes/ContadorV2.jsx";

function App() {
  return (
    <div className="App">
      <Data texto="Data e hora no Brasil: " timeZone="-3.00" />
      <Data texto="Data e hora em Londres: " timeZone="+1.00" />
      <Data texto="Data e hora em Nova York: " timeZone="-4.00" />
      <DataV2 texto="Data JSX: " timeZone={-3.00} />
      <Contador />
      <ContadorV2 />
    </div>
  );
}

export default App;
