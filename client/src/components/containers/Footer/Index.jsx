import styles from './Footer.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import Legal from './Legal/Index';

export default function Footer() {
    return <footer className={styles.footer}>
                <Legal/>
        </footer>
}