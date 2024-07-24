import PlantCard from "./PlantCard";

//pass down callback functions as propertiess
// .map over plants 
function PlantList({ plants, updatePlant, updatePrice, deletePlant } ) {
  return (
    <ul className="cards">
      {plants.map(plant => (
        <PlantCard 
        key={plant.id} 
        plants={plant} 
        updatePlant={updatePlant}
        updatePrice={updatePrice}
        deletePlant={deletePlant}
         />
      ))
      
    }</ul>
  );
}

export default PlantList;