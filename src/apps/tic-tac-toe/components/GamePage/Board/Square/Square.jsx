import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    markSquare,
    selectCombo,
    selectSquare,
    markVictoriousArea,
    deactivateBoard,
} from "../../../../features/boardSlice";
import {
    currentPlayerWins,
    definePodium,
    selectCurrentPlayer,
    selectCurrentPlayerIndex,
    selectPlayersStyles,
    selectSymbols,
    selectWinnerCheck,
    togglePlayer,
} from "../../../../features/playersSlice";
import { when } from '../../../../utils/when';
import { classes } from '../../../../utils/classes';

import styles from "./Square.module.css";
import { useHover } from "../../../../hooks/useHover";

export default function Square({ x, y }) {
    const currentPlayer = useSelector(selectCurrentPlayer);
    const currentPlayerIndex = useSelector(selectCurrentPlayerIndex);
    const currentSquare = useSelector(selectSquare(x, y));
    const thereIsWinner = useSelector(selectWinnerCheck);
    const symbols = useSelector(selectSymbols);
    const combo = useSelector(selectCombo);
    const [player1Style, player2Style] = useSelector(selectPlayersStyles);

    const { isHovered, toggleHover } = useHover();

    const dispatch = useDispatch();

    let hasProcessedCombo = useRef(false);

    useEffect(
        function () {
            if (!thereIsWinner) hasProcessedCombo.current = false;
            if (combo && !hasProcessedCombo.current) {
                dispatch(togglePlayer());
                dispatch(markVictoriousArea(combo));
                dispatch(currentPlayerWins());
                dispatch(definePodium());
                dispatch(deactivateBoard());
                hasProcessedCombo.current = true;
            }
        },
        [thereIsWinner, combo, dispatch]
    );

    function handleClick() {
        if (currentSquare.mark) return;
        if (currentSquare.isActive) {
            dispatch(markSquare({ x, y, playerIndex: currentPlayerIndex}));
            dispatch(togglePlayer());
        }
    }

    if (currentSquare.isActive) {
        const selectionColor =
            currentPlayer.symbol === symbols[0]
                ?  player1Style.justBackground
                :  player2Style.justBackground;
        return (
            <div
                style={when(isHovered).use(selectionColor)}
                onMouseEnter={toggleHover}
                onMouseLeave={toggleHover}
                onClick={handleClick}
                className={styles.square}
            >
            </div>
        );
    }

    if (currentSquare.isWinner)
        return (
            <div
                onMouseEnter={toggleHover}
                onMouseLeave={toggleHover}
                className={classes(
                    styles.square,
                    styles.winner,
                )}
            >
                {symbols[currentSquare.playerIndex]}
            </div>
        );

    if (currentSquare.playerIndex !== null) {
        const markStyle =
            currentSquare.playerIndex === 0 ? player1Style.text : player2Style.text;
        return (
            <div
                onMouseEnter={toggleHover}
                onMouseLeave={toggleHover}
                style={markStyle}
                className={styles.square}
            >
                {symbols[currentSquare.playerIndex]}
            </div>
        );
    }
    /*
    if (currentSquare.mark) {
        const markStyle =
            currentSquare.mark === symbols[0] ? player1Style.text : player2Style.text;
        return (
            <div
                onMouseEnter={toggleHover}
                onMouseLeave={toggleHover}
                style={markStyle}
                className={styles.square}
            >
                {currentSquare.mark}
            </div>
        );
    }
    */

    return <div className={styles.square}>{currentSquare.mark}</div>;
}
