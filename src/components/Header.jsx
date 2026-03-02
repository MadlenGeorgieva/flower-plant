import { Link } from "react-router-dom";
import styles from './Header.module.css';

export default function Header(){
    return(
        <header className={styles.header}>
            <nav className={styles.nav}>
                <Link to="/">Home</Link>
                <span className={styles.divider}> | </span>
                <Link to="/myplants">My Plants</Link>
                <span className={styles.divider}> | </span>
                <Link to="/about">About</Link>
            </nav>
        </header>
    )
}