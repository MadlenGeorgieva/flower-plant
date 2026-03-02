import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./Update.module.css";

export default function Update() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [plants, setPlants] = useState(() => {
    const savedPlants = localStorage.getItem("myPlants");  // ← fixed key
    return savedPlants ? JSON.parse(savedPlants) : [];
  });

  const plant = plants.find(plant => plant.id === Number(id));

  const [commonName, setCommonName] = useState("");
  const [scientificName, setScientificName] = useState("");
  const [light, setLight] = useState("");
  const [watering, setWatering] = useState("");
  const [soil, setSoil] = useState("");
  const [level, setLevel] = useState("Beginner");

  useEffect(() => {
    localStorage.setItem("myPlants", JSON.stringify(plants));
  }, [plants]);

  useEffect(() => {
    if (plant) {
      setCommonName(plant.commonName);
      setScientificName(plant.scientificName);
      setLight(plant.light);
      setWatering(plant.watering);
      setSoil(plant.soil);
      setLevel(plant.level);
    }
  }, [plant]);

  function updateHandler(e) {
    e.preventDefault();
    const updatedPlant = {
      id: Number(id),
      commonName,
      scientificName,
      light,
      watering,
      soil,
      level
    };
    setPlants(plants.map(plant => plant.id === Number(id) ? updatedPlant : plant));
    navigate("/myplants");
  }

  return (
    <div className={styles.page}>
      <form onSubmit={updateHandler} className={styles.form}> 
        <h2 className={styles.heading}>Update Plant</h2>

        <div className={styles.fieldGroup}>
          <label htmlFor="id" className={styles.label}>ID</label>
          <input type="number" id="id" value={id} readOnly className={styles.input} />
        </div>

        <div className={styles.fieldGroup}>
          <label htmlFor="commonName" className={styles.label}>Common Name</label>
          <input type="text" id="commonName" value={commonName}
            onChange={(e) => setCommonName(e.target.value)} className={styles.input} />
        </div>

        <div className={styles.fieldGroup}>
          <label htmlFor="scientificName" className={styles.label}>Scientific Name</label>
          <input type="text" id="scientificName" value={scientificName}
            onChange={(e) => setScientificName(e.target.value)} className={styles.input} />
        </div>

        <div className={styles.fieldGroup}>
          <label htmlFor="light" className={styles.label}>Light</label>
          <input type="text" id="light" value={light}
            onChange={(e) => setLight(e.target.value)} className={styles.input} />
        </div>

        <div className={styles.fieldGroup}>
          <label htmlFor="watering" className={styles.label}>Watering</label>
          <input type="text" id="watering" value={watering}
            onChange={(e) => setWatering(e.target.value)} className={styles.input} />
        </div>

        <div className={styles.fieldGroup}>
          <label htmlFor="soil" className={styles.label}>Soil</label>
          <input type="text" id="soil" value={soil}
            onChange={(e) => setSoil(e.target.value)} className={styles.input} />
        </div>

        <div className={styles.fieldGroup}>
          <label htmlFor="level" className={styles.label}>Level</label>
          <select id="level" value={level}
            onChange={(e) => setLevel(e.target.value)} className={styles.input}>
            <option>Beginner</option>
            <option>Intermediate</option>
            <option>Expert</option>
          </select>
        </div>

        <button type="submit" className={styles.button}>Update Plant</button>
      </form>
    </div>
  );
}