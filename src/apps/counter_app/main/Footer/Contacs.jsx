import styles from './Contacts.module.css';

export default function Contacts() {
    return (
        <div className={styles.contacts}>
            <p>
                Created by <strong>Filippo Dembech</strong>
            </p>
            <p>
                Socials:{" "}
                <a
                    href="https://www.linkedin.com/in/filippo-dembech-03bb22259/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Linkedin
                </a>
            </p>
            <p>
                Email:{" "}
                <a href="mailto:filippo.dembech@gmail.com">
                    Filippo.dembech@gmail.com
                </a>
            </p>
        </div>
    );
}
