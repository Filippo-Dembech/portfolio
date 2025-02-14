import { useDispatch } from "react-redux";
import {
    resetPodium,
    reset as resetPlayers,
} from "../../../features/playersSlice";
import {
    cleanBoard,
    saveBoard,
    reset as resetBoard,
} from "../../../features/boardSlice";
import TieDialog from './TieDialog/TieDialog';
import WinnerDialog from './WinnerDialog/WinnerDialog';

export default function Dialog({ tie }) {

    const dispatch = useDispatch();

    function playAgain() {
        dispatch(saveBoard());
        dispatch(cleanBoard());
        dispatch(resetPodium());
    }

    function restart() {
        dispatch(resetPlayers());
        dispatch(resetBoard());
    }

    if (tie) return <TieDialog onPlayAgain={playAgain} onRestart={restart} />

    return <WinnerDialog onPlayAgain={playAgain} onRestart={restart} />
}

