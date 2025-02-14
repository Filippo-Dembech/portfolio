import { classes } from "../../../../utils/classes";
import dialogStyle from "../Dialog.module.css";
import tieStyle from "./TieDialog.module.css";

export default function TieDialog({ onPlayAgain, onRestart }) {
    return (
        <div className={classes(dialogStyle.dialog, tieStyle.tie)}>
            <h2>It's a Tie, nice play!</h2>
            <button
                onClick={onPlayAgain}
                className={classes(dialogStyle.button, tieStyle.tie)}
            >
                Play Again
            </button>
            <button
                onClick={onRestart}
                className={classes(dialogStyle.button, tieStyle.tie)}
            >
                Restart
            </button>
        </div>
    );
}
