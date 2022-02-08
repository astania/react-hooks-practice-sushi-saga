import React, {useState} from "react";

function MoreButton({API, setSushi, sushis}) {
  const [lowerLimit, setLowerLimit] = useState(4)
  const [upperLimit, setUpperLimit] = useState(8)

  const getFourMoreSushi = () => {
    fetch(API)
    .then(r => r.json())
    .then(sushiData => {
      const fourSushi = sushiData.filter(sushi => sushi.id <= upperLimit && sushi.id > lowerLimit)
      
      setLowerLimit(() => lowerLimit + 4)
      setUpperLimit(() => upperLimit + 4)

      console.log(upperLimit)
      console.log(lowerLimit)
      setSushi(fourSushi)
    })
  }
  return <button onClick={getFourMoreSushi}>More sushi!</button>;
}

export default MoreButton;
