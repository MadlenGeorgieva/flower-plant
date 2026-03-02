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