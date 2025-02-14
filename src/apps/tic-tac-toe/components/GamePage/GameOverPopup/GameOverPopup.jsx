import styles from "./GameOverPopup.module.css";
import Dialog from "./Dialog";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

export default function GameOverPopup({ tie, winner }) {
    const { width, height } = useWindowSize();

    return (
        <>
            <div className={styles.gameOverPopup}>
                <div className={styles.background}></div>
                {tie ? <Dialog tie /> : <Dialog />}
            </div>
            {winner && (
                <Confetti
                    gravity={0.15}
                    colors={["#d2d2ff", "#ffd5d2", "#d2ffd2", "#fafeb7"]}
                    numberOfPieces={150}
                    width={width}
                    height={height}
                />
            )}
        </>
    );
}
