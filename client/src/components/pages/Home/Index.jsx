import styles from './Home.module.scss';
import { useEffect } from 'react';

export default function Home(){

    useEffect(() => {
        window.scrollTo(0, 0);
    },[]);

    return <main id="home">
                <section className={styles.home_section}>
                    <p>Home page</p>
                </section>
            </main>
}