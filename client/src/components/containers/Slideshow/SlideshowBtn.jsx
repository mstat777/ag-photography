import React from 'react';
import styles from './Slideshow.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

function SlideshowBtn({moveSlide, direction}){

    return <button onClick={moveSlide}
                   className={direction === "next" ? `${styles.slideshow_btn} ${styles.next}` : `${styles.slideshow_btn} ${styles.prev}`}>
                { direction === "next" ? 
                    <FontAwesomeIcon icon={faChevronRight} className={styles.arrow}/> : 
                    <FontAwesomeIcon icon={faChevronLeft} className={styles.arrow}/>
                }
            </button>
}

export default SlideshowBtn;