// Introduction.jsx
import styles from './Introduction.module.css';
import logo from '../assets/Logo.png';
import intro2 from '../assets/intro2.jpg';
import intro3 from '../assets/intro3.jpg';

export default function Introduction() {
  return (
    <div className={styles.wrapper}>

      <div className={styles.section}>
        <img src={logo} alt="Garden" className={styles.image} />
        <h1>Welcome to FlowerPlant</h1>
        <p>FlowerPlant is a friendly community for plant lovers of all levels. Our platform makes plant care simple and 
        enjoyable, offering easy-to-follow guides and tools to help you manage your personal plant collection.
        Whether you're a beginner or a seasoned gardener, FlowerPlant is here to help your plants — and your confidence — grow.</p>
      </div>

      <div className={styles.section}>
        <img src={intro2} alt="Plants" className={styles.image} />
        <h2>Why FlowerPlant?</h2>
        <p>Because plant care shouldn't feel confusing or lonely. FlowerPlant brings everything you need into one simple, 
          supportive space — clear guides, practical tips, and tools to organize your plant collection. It's designed to help 
          you feel confident, stay consistent, and truly enjoy watching your plants grow.</p>
      </div>
      
      <div className={styles.section}>
        <img src={intro3} alt="Plants" className={styles.image} />
        <h2>Plant Care Guide</h2>
        <p>In this Plant Care Guide, you'll find everything you need to understand and care for your plant with confidence. 
          We'll introduce you to the plant's common and scientific name, explain its light requirements, outline a clear 
          watering schedule, and recommend the ideal soil type for healthy growth. You'll also see its difficulty level, 
          so you know exactly what to expect. By the end, you'll feel prepared, informed, and ready to help your plant thrive.</p>
      </div>

    </div>
  );
}