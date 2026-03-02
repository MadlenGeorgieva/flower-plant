import styles from './Searchfield.module.css';

export default function Searchfield({ handleInputChange, filter }) {
  return (
    <div className={styles.wrapper}>
      <input
        className={styles.input}
        type="search"
        placeholder="Search plant..."
        value={filter}
        onChange={handleInputChange}
      />
    </div>
  );
}

































// import { useState } from 'react';
// import styles from './Searchfield.module.css';

// export default function Searchfield({ handleInputChange, filter, filterField, handleFieldChange }) {
//   const [showFilters, setShowFilters] = useState(false);

//   return (
//     <div className={styles.wrapper}>

//       <div className={styles.searchRow}>
//         <input
//           className={styles.input}
//           type="text"
//           placeholder="Search plant"
//           value={filter}
//           onChange={handleInputChange}
//         />
//         <button className={styles.filterBtn} onClick={() => setShowFilters(prev => !prev)}>
//           {showFilters ? '✕ Close' : '⚙ Filter'}
//         </button>
//       </div>

//       {showFilters && (
//         <div className={styles.filterPanel}>

//           <div className={styles.filterRow}>
//             <label>Level:</label>
//             <select
//               value={filterField === 'level' ? filter : 'all'}
//               onChange={(e) => {
//                 handleFieldChange({ target: { value: 'level' } });
//                 handleInputChange({ target: { value: e.target.value === 'all' ? '' : e.target.value } });
//               }}
//             >
//               <option value="all">All</option>
//               <option value="Beginner">Beginner</option>
//               <option value="Intermediate">Intermediate</option>
//               <option value="Expert">Expert</option>
//             </select>
//           </div>

//           <div className={styles.filterRow}>
//             <label>Light:</label>
//             <select
//               value={filterField === 'light' ? filter : 'all'}
//               onChange={(e) => {
//                 handleFieldChange({ target: { value: 'light' } });
//                 handleInputChange({ target: { value: e.target.value === 'all' ? '' : e.target.value } });
//               }}
//             >
//               <option value="all">All</option>
//               <option value="Low to bright indirect light">Low to bright indirect</option>
//               <option value="Bright, indirect sunlight">Bright, indirect</option>
//               <option value="Bright, indirect light (6+ hrs)">Bright, indirect (6+ hrs)</option>
//             </select>
//           </div>

//           <div className={styles.filterRow}>
//             <label>Watering:</label>
//             <select
//               value={filterField === 'watering' ? filter : 'all'}
//               onChange={(e) => {
//                 handleFieldChange({ target: { value: 'watering' } });
//                 handleInputChange({ target: { value: e.target.value === 'all' ? '' : e.target.value } });
//               }}
//             >
//               <option value="all">All</option>
//               <option value="Every 2-3 weeks">Every 2-3 weeks</option>
//               <option value="Every 1-2 weeks">Every 1-2 weeks</option>
//               <option value="When top 2-3 inches of soil are dry">When soil is dry</option>
//             </select>
//           </div>

//           <div className={styles.filterRow}>
//             <label>Soil:</label>
//             <select
//               value={filterField === 'soil' ? filter : 'all'}
//               onChange={(e) => {
//                 handleFieldChange({ target: { value: 'soil' } });
//                 handleInputChange({ target: { value: e.target.value === 'all' ? '' : e.target.value } });
//               }}
//             >
//               <option value="all">All</option>
//               <option value="Well-draining cactus or succulent mix">Cactus / succulent mix</option>
//               <option value="Well-draining potting mix">Potting mix</option>
//               <option value="Well-draining, peat-based mix with perlite">Peat-based with perlite</option>
//             </select>
//           </div>

//         </div>
//       )}
//     </div>
//   );
// }