import { useDispatch, useSelector } from "react-redux";
import styles from "./SymbolButton.module.css";
import { selectPlayersStyles, selectSymbols, setPlayerSymbol } from "../../../../../../features/playersSlice";
import { useState } from "react";
import { player } from '../../../../../../utils/player';

export default function SymbolButton({ of: playerIndex, children }) {
    const [isHovered, setIsHovered] = useState(false);
    const symbols = useSelector(selectSymbols);

    const [firstPlayerStyle, secondPlayerStyle] = useSelector(selectPlayersStyles);

    const dispatch = useDispatch();

    function toggleHoverEffect() {
        setIsHovered((curr) => !curr);
    }
    

    const hoverStyle =
        playerIndex === player.one
            ? { ...firstPlayerStyle.container, color: firstPlayerStyle.isDark ? "white" : "black" }
            : { ...secondPlayerStyle.container, color: secondPlayerStyle.isDark ? "white" : "black" };
    
    if (children === symbols[playerIndex]) return (
        <button
            onClick={() => dispatch(setPlayerSymbol(playerIndex, children))}
            onMouseEnter={toggleHoverEffect}
            onMouseLeave={toggleHoverEffect}
            style={hoverStyle}
            className={styles.symbol}
        >
            {children}
        </button>
    )

    return (
        <button
            onClick={() => {
                dispatch(setPlayerSymbol(playerIndex, children))
            }}
            onMouseEnter={toggleHoverEffect}
            onMouseLeave={toggleHoverEffect}
            style={isHovered ? hoverStyle : {}}
            className={styles.symbol}
        >
            {children}
        </button>
    );
}
