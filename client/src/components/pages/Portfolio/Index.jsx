import global from '../../../App.module.scss';
import styles from './Portfolio.module.scss';
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import imageData from '../../../assets/data/images.json';
import ContinentNavBar from '../../containers/ContinentNavBar/Index';
import Slideshow from '../../containers/Slideshow/Index';
import CommentBox from '../../containers/CommentBox/Index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';

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

                    <section className={styles.navbar_section}>
                        <ContinentNavBar continent={continent}/>
                    </section>
         
                    { continent && country ?

                    <section className={styles.content_section}>
                        <div className={styles.slideshow_ctn}>    
                            <Slideshow 
                                continent={continent} 
                                country={country}
                                imageData={imageData}/>
                            
                        </div>
                        <div className={styles.info_ctn}>
                            <button onClick={null} className={styles.hide_palette_btn}>
                                <FontAwesomeIcon icon={faAnglesRight}/>
                            </button>

                            <dl>
                                <dt>Country:</dt>
                                <dd>{country}</dd>

                                <dt>Continent:</dt>
                                <dd>{continent}</dd>

                                <dt>File:</dt>
                                <dd>A giant</dd>
                            </dl>

                            <section className={styles.comments_section}>    
                                <CommentBox/>
                                <CommentBox/>
                            </section>
                        </div>
                    </section> :

                    <section className={styles.countries_section}>

                        { continent !== "all" ?
                        
                        imageData[continentIndex].countries.map((country, i) => (
                            
                            <Link to={`/en/portfolio/${continent}/${formatNames(country.name)}`} key={i}>
                            <article className={styles.destination}>

                                <p>{country.name}</p>
                                <img src={`${IMG_URL}/${continent}/${formatNames(country.name)}/${formatNames(country.name)}_001.jpg`} alt={country.name}/>

                            </article>
                            </Link>
                        )) : // if 'All' continents:
                        imageData.map((cont) => 
                            cont.countries.map((country, i) => (
                                <Link to={`/en/portfolio/${formatNames(cont.name)}/${formatNames(country.name)}`} key={i}>
                                <article className={styles.destination}>

                                    <p>{country.name}</p>
                                    <img src={`${IMG_URL}/${formatNames(cont.name)}/${formatNames(country.name)}/${formatNames(country.name)}_001.jpg`} alt={country.name}/>

                                </article>
                                </Link>
                            )) 
                        )
                        }
                    </section>
                    }
                    
                </section>
        </main>
}