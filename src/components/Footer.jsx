import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
        <div className={styles.inner}>
            <p>Adress: 123 Botanical Lane, Green City, 2345 Copenhagen, Denmark</p>
            <p>Email: flowplant123@flowerplant2026.dk</p>
            <p>Phone: +452076765</p>
            <p className={styles.copy}>© 2026 FlowerPlant. All rights reserved</p>
        </div>
</footer>
  );
}