import styles from "./ColorPicker.module.css";

export default function ColorPicker({ onSelect }) {

    return (
        <div className={styles.colorPicker}>
            <label
                htmlFor="player"
            >
                Color:{" "}
            </label>
            <input
                onChange={onSelect}
                type="color"
                id="player"
            />
        </div>
    );
}
