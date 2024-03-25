import styles from './CommentBox.module.scss';

export default function CommentBox(){

    return <article className={styles.comment}>
                <div className={styles.comment_top}>
                    <span className={styles.user}>Petko Dochev</span>
                    <span className={styles.date}></span>20.12.2023</div>
                <p className={styles.message}>Some text here...</p>
            </article>
}