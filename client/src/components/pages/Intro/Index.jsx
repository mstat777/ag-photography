import global from '../../../App.module.scss';
import styles from './Intro.module.scss';
import { useEffect, useRef } from 'react';
//import { ReactComponent as WorldMap } from '../../../assets/svg/Continents_vide_couleurs-automatedvector.svg';
import { svgResize, interactiveContinents } from './svgResize';
import WorldMap from './WorldMap/Index';
import Legal from '../../containers/Footer/Legal/Index';

export default function Intro(){
    const svgMap = useRef(null);

    const printSmth = () => {console.log("Something")}

    useEffect(() => {
        //svgResize(svgMap);

        //interactiveContinents();
    },[svgMap.current]);

    return <main className={styles.main_intro}>

                <h1>
                    Welcome to <span>AG</span> Photography
                </h1>

                <section className={styles.intro_section}>
                    <div ref={svgMap} className={styles.svg_ctn}>
                        <WorldMap/>
                    </div>
                </section>

                <div className={styles.legal_ctn}>
                    <Legal/>
                </div>
        </main>
}