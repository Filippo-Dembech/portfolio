import styles from './Footer.module.css';
import Contacts from './Contacs';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <Contacts />
        </footer>
    )
}