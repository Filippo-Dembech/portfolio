import Square from "./Square/Square";

import styles from "./Board.module.css";


export default function Board() {

    return (
        <>
            <div className={styles.board}>
                <Square
                    x={0}
                    y={0}
                />
                <Square
                    x={0}
                    y={1}
                />
                <Square
                    x={0}
                    y={2}
                />
                <Square
                    x={1}
                    y={0}
                />
                <Square
                    x={1}
                    y={1}
                />
                <Square
                    x={1}
                    y={2}
                />
                <Square
                    x={2}
                    y={0}
                />
                <Square
                    x={2}
                    y={1}
                />
                <Square
                    x={2}
                    y={2}
                />
            </div>
        </>
    );
}
