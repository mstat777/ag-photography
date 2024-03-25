import global from '../../../App.module.scss';
import styles from './Portfolio.module.scss';
import { useState, useEffect } from 'react';
import { Link, NavLink, useParams } from 'react-router-dom';
import imageData from '../../../assets/data/images.json';
import Slideshow from '../../containers/Slideshow/Index';
import ContinentNavBar from '../../containers/ContinentNavBar/Index';

export default function Portfolio(){
    const IMG_URL = process.env.REACT_APP_IMG_URL;

    const { continent, country } = useParams();
    //console.log("continent = "+continent);
    //console.log("country = "+country);

    const continentIndex = imageData.findIndex(cont => formatNames(cont.name) === continent);
    //console.log("continentIndex = " + continentIndex);

    function formatNames(name){
        return name.toLowerCase().replaceAll(' ', '');
    }
    
    useEffect(() => {
        window.scrollTo(0, 0);
    },[]);

    return <main id="portfolio" className={styles.portfolio_main}>
                <h1 className={global.hidden}>Portfolio</h1>
                <section className={styles.portfolio_section}>

                    <section className={styles.filters_section}>
                        <ContinentNavBar/>
                    </section>
         
                    { continent && country ?
                    <Slideshow 
                            continent={continent} 
                            country={country}
                            imageData={imageData}/> :
                    <section className={styles.images_section}>

                        { imageData[continentIndex].countries.map((country, i) => (
                            
                            <Link to={`/en/portfolio/${continent}/${formatNames(country.name)}`} key={i}>
{/*console.log(`/en/portfolio/${continent}/${formatNames(country.name)}`)*/}
                            <article className={styles.destination}>

                                <p>{country.name}</p>
                                <img src={`${IMG_URL}/${continent}/${formatNames(country.name)}/${formatNames(country.name)}_001.jpg`} alt={country.name}/>

                            </article>
                            </Link>
                        ))}
                    </section>
                    }
                    
                </section>
        </main>
}