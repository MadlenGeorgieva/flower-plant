import About1 from '../assets/About1.jpg';
import About2 from '../assets/About2.jpg';
import About3 from '../assets/About3.jpg';
import About4 from '../assets/About4.jpg';
import styles from './About.module.css';


export default function About(){
    return(
        <div className={styles.wrapper}>
            <section className={styles.section}>
                <img src={About1} alt="About Us" className={styles.image}/>
                <h2>About FlowerPlant</h2>
                <p>FlowerPlant was created to bring plant lovers together in one welcoming, easy-to-use space. 
                    Whether you're caring for your very first plant or managing a growing indoor jungle, our goal 
                    is to make plant care feel simple, inspiring, and rewarding.</p>
            </section>
            <section className={styles.section}>
                <img src={About2} alt="Our Vision" className={styles.image}/>
                <h2>Our Vision</h2>
                <p>We envision a world where everyone feels confident nurturing plants and building their own green 
                    sanctuary. FlowerPlant aims to become a trusted global community where knowledge, passion, and growth 
                    are shared freely.</p>
            </section>
            <section className={styles.section}>
                <img src={About3} alt="Our Mission" className={styles.image}/>
                <h2>Our Mission</h2>
                <p>Our mission is to simplify plant care by providing clear, accessible guides and practical tools that 
                    help users learn, organize, and care for their personal plant collections with confidence.</p>
            </section>
            <section className={styles.section}>
                <img src={About4} alt="Our Purpose" className={styles.image}/>
                <h2>Our Purpose</h2>
                <p>FlowerPlant exists to make plant care less overwhelming and more enjoyable. We are here to support 
                    learning, encourage consistency, and create a sense of belonging for anyone who wants to grow — not just 
                    their plants, but their skills and confidence too.</p>
            </section>
            <div className={styles.videoWrapper}>
                <iframe 
                    width="100%" 
                    height="630" 
                    src="https://www.youtube.com/embed/GBqHkf5SB4s?si=7nrblTHtMvIDanAU" 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen
                />
            </div>
        </div>
    )
}