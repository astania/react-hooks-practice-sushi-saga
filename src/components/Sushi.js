import React, { useState } from "react";

function Sushi({ sushi, name, price, url, budget, setBudget, plates, setPlates }) {

  const [isEaten, setIsEaten] = useState(false)
  

  const handleIsEaten = () => {
    
    const difference = budget - price
    if (difference >= 0) {
      setIsEaten(true)
      const newBudget = budget - price
      const newPlate = 1
      setBudget(newBudget)
      setPlates([...plates, newPlate ])
    } else {
      alert("Not enough money!")
    }


  }
  console.log(budget)

  return (
    <div className="sushi">
      <div className="plate" onClick={handleIsEaten}>
        {null}
        {isEaten ? null : (
          <img
            src={url}
            alt={name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
