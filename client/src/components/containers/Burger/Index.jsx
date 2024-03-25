import styles from './Burger.module.scss';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useMediaQuery } from "react-responsive";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faBars } from '@fortawesome/free-solid-svg-icons';

export default function Burger() {
    const isMobile = useMediaQuery({query: '(max-width: 767px)'});

    const [burgerOpen, setBurgerOpen] = useState(false);

    return <nav className={`${styles.burger_menu} ${burgerOpen ? styles.show_burger_menu : styles.hide_burger_menu }`}>

            {/* ---------- LINKS CONTAINER ------------ */}
            <div className={styles.burger_items_ctn}>
                <NavLink to={"/en"}>home</NavLink>
                <NavLink to={"/portfolio"}>portfolio</NavLink>
                <NavLink to={"/about"}>about</NavLink>
                <NavLink to={"/contact"}>contact</NavLink>
            </div>
            
            {/* ---------- THE BURGER BUTTON ---------- */}
            <button onClick={() => setBurgerOpen(!burgerOpen)} 
                    className={styles.burger_btn} 
                    title="Menu">       
                <FontAwesomeIcon icon={faBars} className={styles.burger_img}/>
            </button>

        </nav>
}