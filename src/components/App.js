import React, {useState, useEffect} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushis, setSushi] = useState([])
  const [budget, setBudget] = useState(100)
  const [plates, setPlates] = useState([])

  useEffect(() => {
    fetch(API)
    .then(r => r.json())
    .then(sushiData => {
      const fourSushi = sushiData.filter(sushi => sushi.id <= 4)
      setSushi(fourSushi)
    })
  }, [])



  return (
    <div className="app">
      <SushiContainer sushis={sushis} setSushi={setSushi} API={API} budget={budget} setBudget={setBudget} plates={plates} setPlates={setPlates}/>
      <Table budget={budget} setBudget={setBudget} plates={plates} setPlates={setPlates}/>
    </div>
  );
}

export default App;
