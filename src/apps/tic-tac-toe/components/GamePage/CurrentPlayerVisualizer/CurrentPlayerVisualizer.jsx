import { useSelector } from "react-redux";
import {
    selectCurrentPlayerIndex,
    selectPlayersStyles,
} from "../../../features/playersSlice";

import styles from "./CurrentPlayerVisualizer.module.css";
import { classes } from "../../../utils/classes";

export default function CurrentPlayerVisualizer({ children }) {
    const currentPlayerIndex = useSelector(selectCurrentPlayerIndex);

    const [player1Style, player2Style] = useSelector(selectPlayersStyles);
    
    return (
        <>
            <div className={`${styles.playerVisualizer}`}>
                <div
                    style={player1Style.container}
                    className={classes(
                        styles.player,
                        currentPlayerIndex === 0 && styles.active
                    )}
                ></div>
                <div
                    style={player2Style.container}
                    className={classes(
                        styles.player,
                        currentPlayerIndex === 1 && styles.active
                    )}
                ></div>
            </div>
            {children}
        </>
    );
}
