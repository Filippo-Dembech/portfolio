import styles from "./styles/Homepage.module.css";
import HomepageLink from "./HomepageLink";

export default function Homepage() {
    
    const titleName = (
        <span className={styles.name}>Filippo<br/>Dembech</span>
    )

    return (
        <main className={styles.homepage}>
            <div className={styles.background} />
            <h1 className={styles.title}>
                <div>Welcome to</div>
                <div>{titleName}</div>
                <div>Portfolio</div>
            </h1>
            <div className={styles.projectsSection}>
                <p className={styles.description}>What can I do? Click one of the link below to see one of my projects:</p>
                <ul className={styles.projectsList}>
                    <HomepageLink to="planes">Planes App (try on Desktop)</HomepageLink>
                    <HomepageLink to="counter_app">Counter App (try on Desktop)</HomepageLink>
                    <HomepageLink to="tic_tac_toe">Tic Tac Toe App (try on Desktop)</HomepageLink>
                </ul>
            </div>
        </main>
    );
}
