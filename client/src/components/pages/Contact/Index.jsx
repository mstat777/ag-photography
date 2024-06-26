import styles from './Contact.module.scss';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { validateInput } from '../../../utils/validate.js';

export default function Contact(){
    const IMG_URL = process.env.REACT_APP_IMG_URL;

    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userMessage, setUserMessage] = useState('');

    const [okMsg, setOkMsg] = useState('');
    const [errMsg, setErrMsg] = useState('');

    // not submit the form, if inputs are not valid:
    const [isFormValid, setIsFormValid] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    },[]);

    // verify if all inputs are valid :
    const validateForm = () => {
        const nameVerif = validateInput("userName", userName.trim());
        const emailVerif = validateInput("email", userEmail.trim());
        // show all error messages :
        setErrMsg(nameVerif.msg + emailVerif.msg);
        // form is valid if all inputs are valid :
        setIsFormValid((nameVerif.isValid && emailVerif) ? true : false);
    }

    useEffect(() => {
        if (isFormValid) {
            submitForm();
        }
    },[isFormValid]);

    async function submitForm() {
        
    }

    function handleOnFocus(){
        setOkMsg('');
        setErrMsg('');
    }

    function handleSubmit(e){
        e.preventDefault();
        validateForm();
    }

    return <main id="contact" className={styles.contact_main}>

                <section className={styles.text_section}>
                    <h1>Contact</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam corrupti molestias itaque facere sit quaerat ex tempora et maiores fugiat asperiores voluptate inventore, eaque obcaecati quas, voluptatem iste debitis magnam eum alias libero expedita hic!</p>

                    <div className={styles.contact_details}>
                        <div className={styles.detail_ctn}>
                            <span>
                                <FontAwesomeIcon icon={faPhone} className={styles.icon}/>
                                phone
                            </span>
                            <span>+1 (234)567-890</span>
                        </div>

                        <div className={styles.detail_ctn}>        
                            <span>
                                <FontAwesomeIcon icon={faEnvelope} className={styles.icon}/> 
                                e-mail
                            </span>
                            <span>mymail@fotohunet.com</span>
                        </div>

                        <div className={styles.detail_ctn}>
                            <span>
                                <FontAwesomeIcon icon={faLocationDot} className={styles.icon}/>
                                address
                            </span>
                            <address>San Francisco, CA 94107<br/>
                            fa795 Folsom Ave, Suite 600</address>
                        </div>

                        <div className={styles.detail_ctn}>
                            <span>
                                <FontAwesomeIcon icon={faInstagram} className={styles.input_icon}/>
                                instagram
                            </span>
                            <span>test.test</span>
                        </div>
                    </div>

                    <div className={styles.form_ctn}>
                        { (okMsg && userName && userEmail && userMessage) ? 
                            <p className={styles.ok_msg}>{okMsg}</p> : null }
                        { (errMsg && userName && userEmail && userMessage) ? 
                            <p className={styles.err_msg}>{errMsg}</p> : null }

                        <form onSubmit={handleSubmit} className={styles.contact_form}>
                            <input type="text" 
                                name="userName" 
                                value={userName}
                                onChange={(e) => setUserName(e.target.value)}
                                onFocus={handleOnFocus}
                                placeholder="name"
                                required/> 

                            <input type="email" 
                                name="userEmail" 
                                value={userEmail}
                                onChange={(e) => setUserEmail(e.target.value)}
                                onFocus={handleOnFocus}
                                placeholder="e-mail"
                                required/> 

                            <textarea name="userMessage"
                                value={userMessage}
                                onChange={(e) => setUserMessage(e.target.value)}
                                onFocus={handleOnFocus}
                                placeholder="message"
                                rows="8"
                                maxLength="600"
                                required />

                            <button type="submit">send message</button>
                        </form>
                    </div>
         
                </section>

                <section className={styles.images_section}>
                    <img src={`${IMG_URL}/europe/bulgaria/bulgaria_001.jpg`} alt={"bulgaria"}/>
                    <img src={`${IMG_URL}/europe/bulgaria/bulgaria_002.jpg`} alt={"bulgaria"}/>
                    <img src={`${IMG_URL}/europe/bulgaria/bulgaria_003.jpg`} alt={"bulgaria"}/>
                </section>

            </main>
}