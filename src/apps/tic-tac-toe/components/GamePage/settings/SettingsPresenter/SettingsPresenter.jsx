import { IoMdSettings } from "react-icons/io";
import styles from './SettingsPresenter.module.css';

export default function SettingsPresenter({ onClick, textAnimation }) {
    return (
        <>
            <button
                onClick={onClick}
                className={styles.icon}
            >
                <IoMdSettings />
            </button>
            <span className={`${textAnimation} ${styles.text}`}>Settings</span>
        </>
    )
}