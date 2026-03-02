import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Create.module.css";

export default function Create() {
  const [plants, setPlants] = useState(() => {
    const savedPlants = localStorage.getItem("myPlants");
    return savedPlants ? JSON.parse(savedPlants) : [];
  });

  const [commonName, setCommonName] = useState("");
  const [scientificName, setScientificName] = useState("");
  const [light, setLight] = useState("");
  const [watering, setWatering] = useState("");
  const [soil, setSoil] = useState("");
  const [level, setLevel] = useState("Beginner"); 

  let navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("myPlants", JSON.stringify(plants));
  }, [plants]);

  function createHandler(e) {
    e.preventDefault();
    const highestId = plants.length > 0 ? Math.max(...plants.map(plant => plant.id)) : -1
    const newPlant = {
      id: highestId + 1,
      commonName: commonName,
      scientificName: scientificName,
      light: light,
      watering: watering,  
      soil: soil,           
      level: level          
    };
    setPlants([...plants, newPlant]);
    navigate("/myplants");
  }

  return (
    <div className={styles.page}>
      <form onSubmit={createHandler} className={styles.form}>
        <h2 className={styles.heading}>Add new Plant</h2>

        <div className={styles.fieldGroup}>
          <label htmlFor="commonName" className={styles.label}>Common Name</label>
          <input type="text" id="commonName" value={commonName} required
            onChange={(e) => setCommonName(e.target.value)} className={styles.input} />
        </div>

        <div className={styles.fieldGroup}>
          <label htmlFor="scientificName" className={styles.label}>Scientific Name</label>
          <input type="text" id="scientificName" value={scientificName} required
            onChange={(e) => setScientificName(e.target.value)} className={styles.input} />
        </div>

        <div className={styles.fieldGroup}>
          <label htmlFor="light" className={styles.label}>Light</label>
          <input type="text" id="light" value={light} required
            onChange={(e) => setLight(e.target.value)} className={styles.input} />
        </div>

        <div className={styles.fieldGroup}>
          <label htmlFor="watering" className={styles.label}>Watering</label>
          <input type="text" id="watering" value={watering} required 
            onChange={(e) => setWatering(e.target.value)} className={styles.input} />
        </div>

        <div className={styles.fieldGroup}>
          <label htmlFor="soil" className={styles.label}>Soil</label>
          <input type="text" id="soil" value={soil} required
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

        <button type="submit" className={styles.button}>Add Plant</button>
      </form>
    </div>
  );
}