import { useSelector } from "react-redux";
import { selectPlayersStyles } from "../../../features/playersSlice";

import styles from "./ScoreRecap.module.css";

export default function ScoreRecap({ children }) {
    const players = useSelector((store) => store.players.players);
    const [firstPlayerStyle, secondPlayerStyle] = useSelector(selectPlayersStyles);

    const player1 = players[0];
    const player2 = players[1];

    return (
        <div className={styles.scoreRecap}>
            <span
                style={firstPlayerStyle.text}
                className={styles.score}
            >
                {player1.score}
            </span>
            {children}
            <span
                style={secondPlayerStyle.text}
                className={styles.score}
            >
                {player2.score}
            </span>
        </div>
    );
}
