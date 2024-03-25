import styles from './ContinentNavBar.module.scss';

export default function ContinentNavBar(){

    return <ul className={styles.navbar}>
                <li><button type="button">all</button></li>
                <li><button type="button">europe</button></li>
                <li><button type="button">asia</button></li>
                <li><button type="button">north america</button></li>
                <li><button type="button">south america</button></li>
                <li><button type="button">africa</button></li>
                <li><button type="button">australia</button></li>
                <li><button type="button">antarctica</button></li>
            </ul>
}