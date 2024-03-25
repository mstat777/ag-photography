import styles from './Slideshow.module.scss';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SlideshowBtn from './SlideshowBtn';
import Loading from '../Loading/Index';

export default function Slideshow(props){
    const {continent, country, imageData} = props;
    const IMG_URL = process.env.REACT_APP_IMG_URL;
    console.log("continent = ", continent);
    console.log("country = ", country);

    const [ destinationImages, setDestinationImages ] = useState([]);

    useEffect(() => {
        function getImagesNames(){
            imageData.forEach((continentData) => {
                const continentFormatted = continentData.name.
                toLowerCase().replace(' ', '');
                if (continentFormatted === continent) {
                    console.log("CONTIENNT found")
                    continentData.countries.forEach((countryData) => {
                        const countryFormatted = countryData.name.
                toLowerCase().replace(' ', '');
                        if (countryFormatted === country) {
                            console.log("COUNTRY found")
                            setDestinationImages([...countryData.images]);
                        }
                    });
                }
            });
            console.log(destinationImages);
        }

        getImagesNames();
    },[]);

    const [slideIndex, setSlideIndex] = useState(1);

    const nextSlide = () => {
        if(slideIndex !== destinationImages.length){
            setSlideIndex(slideIndex + 1);
        } 
        else if (slideIndex === destinationImages.length){
            setSlideIndex(1);
        }
    }
    
    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1);
        } 
        else if (slideIndex === 1){
            setSlideIndex(destinationImages.length);
        }
    }

    return <>
        { !destinationImages.length ? 
        <Loading/> :
        <div className={styles.slideshow_ctn}>    
       
            { destinationImages.map((el, i) =>
            <div key={i}
                    className={slideIndex === i + 1 ? `${styles.slide} ${styles.active_anim}` : `${styles.slide}`}> 
                <img src={`${IMG_URL}/${continent}/${country}/${destinationImages[i]}`} alt={destinationImages[i]}/>
                {console.log(`${IMG_URL}/${continent}/${country}/`)}
            </div>
            )}
            <SlideshowBtn moveSlide={nextSlide} direction={"next"} />
            <SlideshowBtn moveSlide={prevSlide} direction={"prev"}/>
        </div>
        }
    </>
}