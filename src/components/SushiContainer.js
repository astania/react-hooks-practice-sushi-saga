import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({ sushis, setSushi, API, budget, setBudget, plates, setPlates }) {
  return (
    <div className="belt">
      {sushis.map(sushi => <Sushi sushi={sushi} name={sushi["name"]} key={sushi.id} price={sushi["price"]} url={sushi["img_url"]} budget={budget} setBudget={setBudget} plates={plates} setPlates={setPlates}/>)} 
      <MoreButton API={API} setSushi={setSushi} sushis={sushis}/>
    </div>
  );
}

export default SushiContainer;
