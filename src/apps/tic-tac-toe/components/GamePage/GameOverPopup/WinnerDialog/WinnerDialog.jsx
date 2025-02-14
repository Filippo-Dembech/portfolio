import { useSelector } from 'react-redux';
import styles from '../Dialog.module.css';
import { selectPodium } from '../../../../features/playersSlice';

export default function WinnerDialog({ onPlayAgain, onRestart }) {
    
    const [winner, loser] = useSelector(selectPodium);

    return (
        <div
            style={{ ...winner.style.justBackground, color: winner.style.isDark ? "white" : "black" }}
            className={styles.dialog}
        >
            <h2>{winner.name} wins!</h2>
            <button
                style={{ ...loser.style.justBackground, color: loser.style.isDark ? "white" : "black" }}
                onClick={onPlayAgain}
                className={styles.button}
            >
                Play Again
            </button>
            <button
                style={{ ...loser.style.justBackground, color: loser.style.isDark ? "white" : "black" }}
                onClick={onRestart}
                className={styles.button}
            >
                Restart
            </button>
        </div>
    );
}