import styles from '../styles/Header.module.css';

export default function Header({children, className, subtitle}) {
    
    return (
        <div className={`${styles.header} ${className}`}>
            <h1 className={styles.title}>{children}</h1>
            <p className={styles.subtitle}>{subtitle}</p>
        </div>
    )
}