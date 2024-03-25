import styles from './ContinentNavBar.module.scss';
import { NavLink } from 'react-router-dom';

export default function ContinentNavBar(){

    return <ul className={styles.navbar}>
                <li>
                    <NavLink 
                        to={"/en/portfolio/all"}
                        className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
                        all
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to={"/en/portfolio/europe"}
                        className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
                        europe
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to={"/en/portfolio/asia"}
                        className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
                        asia
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to={"/en/portfolio/northamerica"} className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
                        north america
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to={"/en/portfolio/southamerica"} className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
                        south america
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to={"/en/portfolio/africa"} className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
                        africa
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to={"/en/portfolio/australia"} className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
                        australia
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to={"/en/portfolio/antarctica"} className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
                        antarctica
                    </NavLink>
                </li>
            </ul>
}