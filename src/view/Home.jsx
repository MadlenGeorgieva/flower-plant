import { useEffect, useState } from 'react'
import Searchfield from '../components/Searchfield';
import PlantList from '../components/PlantList';
import snakeplant from '../assets/snakeplant.jpg';
import spiderplant from '../assets/spiderplant.jpg';
import figplant from '../assets/figplant.jpg';
import Introduction from '../components/Introduction';

const plants = [
  { id: "1", commonName: "Snake Plant", scientificName: "Sansevieria trifasciata", light: "Low to bright indirect light", watering: "Every 2-3 weeks", soil: "Well-draining cactus or succulent mix", level: "Beginner", image: snakeplant  },
  { id: "2", commonName: "Spider Plant", scientificName: "Chlorophytum comosum", light: "Bright, indirect sunlight", watering: "Every 1-2 weeks", soil: "Well-draining potting mix", level: "Intermediate", image: spiderplant },
  { id: "3", commonName: "Fiddle-Leaf Fig", scientificName: "Ficus lyrata", light: "Bright, indirect light (6+ hrs)", watering: "When top 2-3 inches of soil are dry", soil: "Well-draining, peat-based mix with perlite", level: "Expert", image: figplant }
];

export default function Home() {
  const [filterText, setFilterText] = useState(() => localStorage.getItem('filterTextInStorage') || '');
  const [filterField, setFilterField] = useState('all'); 

  useEffect(() => {
    localStorage.setItem('filterTextInStorage', filterText);
  }, [filterText]);

  const sortedPlants = plants.toSorted((a, b) =>
    a.commonName.localeCompare(b.commonName, "en", { sensitivity: "base" })
  );

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

  return (
    <>
      <Introduction />
      <Searchfield
        handleInputChange={(e) => setFilterText(e.target.value)}
        filter={filterText}
        filterField={filterField}
        handleFieldChange={(e) => setFilterField(e.target.value)}
      />
      <PlantList plants={filteredPlants} />
    </>
  );
}
