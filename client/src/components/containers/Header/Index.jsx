import styles from './Header.module.scss';
import { NavLink } from 'react-router-dom';
import { useMediaQuery } from "react-responsive";
import logo from '../../../assets/img/logo-yellow.png';
//import logo from '../../../assets/img/Graphitie-signature-white.gif';
import Burger from '../Burger/Index';

export default function Header() {
    const isMobile = useMediaQuery({query: '(max-width: 767px)'});

    return <header className={styles.header}>
                <nav className={styles.nav}>
                    <div className={styles.nav_outer}>
                        <div className={styles.nav_logo_ctn}>
                            <NavLink to={"/"} 
                                onClick={() => window.scrollTo(0, 0)}>
                                <img src={logo} alt="Acho"/>
                            </NavLink>
                        </div>
                    </div>

                    {isMobile && <Burger/>}

                    {!isMobile &&
                        <ul className={styles.nav_inner}>
                            <li><NavLink to={"/"}>home</NavLink></li>
                            <li><NavLink to={"/en/portfolio/all"}>portfolio</NavLink></li>
                            <li><NavLink to={"/en/about"}>about</NavLink></li>
                            <li><NavLink to={"/en/contact"}>contact</NavLink></li>
                        </ul>
                    }
                </nav>
            </header>
}