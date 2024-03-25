import styles from './About.module.scss';
import acho_photo from '../../../assets/img/about.jpg';
import { useEffect } from 'react';

export default function About(){
    const IMG_URL = process.env.REACT_APP_IMG_URL;

    useEffect(() => {
        window.scrollTo(0, 0);
    },[]);

    return <main id="about" className={styles.about_main}>
                <section className={styles.about_section}>
                    <img src={acho_photo} alt="Angel Georgiev, a.k.a Acho"/>

                    <article>
                        <h1>Angel Georgiev</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam corrupti molestias itaque facere sit quaerat ex tempora et maiores fugiat asperiores voluptate inventore, eaque obcaecati quas, voluptatem iste debitis magnam eum alias libero expedita hic! Quos quae veritatis, qui voluptatem laboriosam praesentium laborum quas. Necessitatibus, tempore repellat. Consequatur, quod nihil.</p>
                    </article>
                    
                </section>

                <section className={styles.images_section}>
                    <img src={`${IMG_URL}/europe/bulgaria/bulgaria_001.jpg`} alt={"bulgaria"}/>
                    <img src={`${IMG_URL}/europe/bulgaria/bulgaria_002.jpg`} alt={"bulgaria"}/>
                    <img src={`${IMG_URL}/europe/bulgaria/bulgaria_003.jpg`} alt={"bulgaria"}/>
                </section>
            </main>
}