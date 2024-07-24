import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

//function for plantPage
//pass down callback functions as properties
function PlantPage({ plants, addPlant, updatePlant, searchPlant, updatePrice, deletePlant }) {

  //pass down callbacks
  return (
    <main>
      <NewPlantForm addPlant={addPlant} />
      <Search searchPlant={searchPlant} />
      <PlantList 
      plants={plants}
      updatePlant={updatePlant}  
      updatePrice={updatePrice}
      deletePlant={deletePlant}
       />
    </main>
  );
}

export default PlantPage;