import { Link } from "react-router-dom";
import styles from './PlantItemUser.module.css';

export default function PlantItemUser({ plant, deleteHandler }) {
  return (
    <div className={styles.card}>
      <h2 className={styles.commonName}>{plant.commonName}</h2>
      <p className={styles.scientific}>{plant.scientificName}</p>

      <div className={styles.details}>
        <p><span>Level:</span> {plant.level}</p>
        <p><span>Light:</span> {plant.light}</p>
        <p><span>Watering:</span> {plant.watering}</p>
        <p><span>Soil:</span> {plant.soil}</p>
      </div>

      <div className={styles.actions}>
        <Link to={`/myplants/update/${plant.id}`} className={styles.editBtn}>
          Update Plant
        </Link>
        <button className={styles.deleteBtn} onClick={() => deleteHandler(plant.id)}>
          Delete Plant
        </button>
      </div>
    </div>
  );
}