// react hook for useState 
import React, { useState } from "react";

// PlantCard function
//pass down cb functions as props
function PlantCard({ plants, updatePlant, updatePrice, deletePlant }) {
  const [newPrice, setNewPrice] = useState(plants.price);

  // Handle stock update
  // PATCH request for plant stock 
  function handleStock() {
    const updatedPlant = { ...plants, inStock: !plants.inStock };

    fetch(`http://localhost:6001/plants/${plants.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ inStock: updatedPlant.inStock })
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Patch request failed");
        }
      })
      .then(data => {
        updatePlant(data);
      })
      .catch(err => {
        console.error("Could not reach server:", err);
      });
  }

  // Handle price update
  function handlePriceChange(e) {
    setNewPrice(e.target.value);
  }

  // Patch request for plant price 
  function handleUpdatePrice() {
    const updatedPlant = { ...plants, price: parseFloat(newPrice) };

    fetch(`http://localhost:6001/plants/${plants.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ price: updatedPlant.price })
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Patch request failed");
        }
      })
      .then(data => {
        updatePrice(data.id, parseFloat(newPrice));
      })
      .catch(err => {
        console.error("Could not reach server:", err);
      });
  }

 // DELETE request for plants
  function handleDelete() {
    fetch(`http://localhost:6001/plants/${plants.id}`, {
      method: "DELETE"
    })
    .then(res => {
      if (res.ok) {
        deletePlant(plants.id);
      } else {
        throw Error('Delete request failed');
      }
    })
    .catch(err => {
      console.error('Could not reach server:', err);
    });
  }


 // add data
 // add onCLick for handleStock, handleUpdatePrice, handleDelete to button 
 // create input and add key value pairs
  return (
    <li className="card" data-testid="plant-item">
      <img src={plants.image} alt={plants.name} />
      <h4>{plants.name}</h4>
      <p>Price: ${plants.price}</p>
      <input
        type="number"
        value={newPrice}
        onChange={handlePriceChange}
        step="0.01"
      />
      <button onClick={handleUpdatePrice}>Update Price</button>
      {plants.inStock ? (
        <button className="primary" onClick={handleStock}>In Stock</button>
      ) : (
        <button onClick={handleStock}>Out of Stock</button>
      )}
      <button onClick={handleDelete}>Delete</button>
    
    </li>
  );
}

export default PlantCard;