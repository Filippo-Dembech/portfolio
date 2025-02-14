import styles from "./SymbolPicker.module.css";
import SymbolButton from "./SymbolButton/SymbolButton";

export default function SymbolPicker({ of: player }) {
    return (
        <div className={styles.symbolPicker}>
            <span className={styles.label}>Symbol:</span>
            <div className={styles.symbols}>
                <SymbolButton of={player}>x</SymbolButton>
                <SymbolButton of={player}>o</SymbolButton>
                <SymbolButton of={player}>★</SymbolButton>
                <SymbolButton of={player}>☆</SymbolButton>
                <SymbolButton of={player}>♥</SymbolButton>
                <SymbolButton of={player}>☠</SymbolButton>
            </div>
        </div>
    );
}
