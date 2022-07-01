import List from "./components/List/List";
import { Routes, Route } from "react-router-dom";
import ExchangeRates from "./components/ExchangeRates/ExchangeRates";

function App() {

  // const from = "";
  // const to = "";
  return (
    <div className="App">
      <Routes>
        <Route path="/list" element={<List/>}/>
        <Route path="/rate" element={<ExchangeRates from={"USA"} to={"KGS"}/>}/>
        
      </Routes>

      <ExchangeRates from="EUR" to="USA"/>
    </div>
  );
}

export default App;
