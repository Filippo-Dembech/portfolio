import { useSelector } from "react-redux";

// state
import { areAllSquaresMarked } from "../../features/boardSlice";

// components
import Board from "./Board/Board";
import CurrentPlayerVisualizer from "./CurrentPlayerVisualizer/CurrentPlayerVisualizer";
import ScoreRecap from "./ScoreRecap/ScoreRecap";
import Settings from "./settings/Settings";
import GameOverPopup from "./GameOverPopup/GameOverPopup";

// style
import styles from "./GamePage.module.css";


export default function GamePage() {
    const winner = useSelector(store => store.players.winner);

    const isTie = useSelector(areAllSquaresMarked) && !winner;

    return (
        <div className={styles.gamePage}>
            {isTie && <GameOverPopup tie />}
            {winner && <GameOverPopup winner />}
            <CurrentPlayerVisualizer>
                <ScoreRecap>
                    <Settings />
                </ScoreRecap>
                <Board />
            </CurrentPlayerVisualizer>
        </div>
    );
}
