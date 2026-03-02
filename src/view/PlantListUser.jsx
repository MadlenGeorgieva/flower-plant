import PlantItemUser from './PlantItemUser';
import styles from './PlantListUser.module.css';
export default function PlantListUser({ plants, setPlants }) {

    function deleteHandler(id){
        const isConfirmed = window.confirm("Are you sure you want to kill (delete) this plant?");
        if(isConfirmed){
            setPlants(plants.filter(plant => plant.id !== id));
        }
    }
    
  return (
    <div className={styles.list}>
          {plants.map(plant => (
            <PlantItemUser key={plant.id} plant={plant} deleteHandler={deleteHandler}/>
          ))}
        </div>
  );
}