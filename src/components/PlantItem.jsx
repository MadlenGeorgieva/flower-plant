import styles from './PlantItem.module.css';

export default function PlantItem({ plant }) {
  return (
    <div className={styles.card}>
      <img
        className={styles.image}
        src={plant.image}
        alt={plant.commonName}
        />
      <div className={styles.info}>
        <h2 className={styles.commonName}>{plant.commonName}</h2>
        <p className={styles.scientific}>{plant.scientificName}</p>
        <div className={styles.details}>
            <p><span>Level:</span> {plant.level}</p>
            <p><span>Light:</span> {plant.light}</p>
            <p><span>Watering:</span> {plant.watering}</p>
            <p><span>Soil:</span> {plant.soil}</p>
        </div>
      </div>
    </div>
  );
}