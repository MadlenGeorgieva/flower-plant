import styles from './PlantList.module.css';
import PlantItem from './PlantItem';

export default function PlantList({ plants }) {
  return (
    <div className={styles.list}>
      {plants.map(plant => (
        <PlantItem key={plant.id} plant={plant} />
      ))}
    </div>
  );
}