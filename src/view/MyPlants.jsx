import { useEffect, useState } from 'react'
import Searchfield from '../components/Searchfield';
import PlantListUser from './PlantListUser';
import Introduction from '../components/Introduction';
import { Link } from "react-router-dom";
import styles from './MyPlants.module.css';

export default function MyPlants() {
  //Initialize state with data from locale storage or an empty array
  const[plants, setPlants] = useState(()=>{
    const savedPlants = localStorage.getItem("myPlants");
    return savedPlants ? JSON.parse(savedPlants) : [];
  })

  //load saved filter text from localeStorage on initial reader
  const [filterText, setFilterText] = useState(() => localStorage.getItem('filterTextInStorage') || '');
    const [filterField, setFilterField] = useState('all'); // NEW
  
    //Save filterText to localeStorage whenever it changes
    useEffect(() => {
      localStorage.setItem('filterTextInStorage', filterText);
    }, [filterText]);

    //Read the plants stored in webstorage/locale storage
    useEffect(() => {
      localStorage.setItem("myPlants", JSON.stringify(plants));
    }, [plants]);
  
    //Sort the plants based in alphabetical order
    const sortedPlants = plants.toSorted((a, b) =>
      a.commonName.localeCompare(b.commonName, "en", { sensitivity: "base" })
    );
  
    //Filter the plants based on the input text
    const filteredPlants = sortedPlants.filter(plant => {
    const text = filterText.toLowerCase();
    // If a specific field is selected, only search that field
    if (filterField === 'all') {
      return (
        plant.commonName.toLowerCase().includes(text) ||
        plant.scientificName.toLowerCase().includes(text) ||
        plant.light.toLowerCase().includes(text) ||
        plant.watering.toLowerCase().includes(text) ||
        plant.soil.toLowerCase().includes(text) ||
        plant.level.toLowerCase().includes(text)
      );
    }
    return plant[filterField].toLowerCase().includes(text);
  });

    const handleInputChange = (plant) => {
      setFilterText(plant.target.value);
    }
  
   return (
  <div className={styles.container}>
    <Searchfield handleInputChange={handleInputChange} filter={filterText}/>
    <Link to="/myplants/create" className={styles.button}>Create Plant</Link>

    {filteredPlants.length > 0 ? (
      <PlantListUser plants={filteredPlants} setPlants={setPlants}/>
    ) : (
      <p className={styles.empty}>No plants yet. Click "Create Plant" to get started!</p>
    )}
  </div>
);
  }