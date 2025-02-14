import { useAnimation } from "../../../hooks/useAnimation";
import SettingsEditor from "./SettingsEditor/SettingsEditor";
import SettingsPresenter from "./SettingsPresenter/SettingsPresenter";
import animations from "./animations/SettingsAnimations.module.css";
import styles from "./Settings.module.css";
import { useEditorToggler } from "../../../hooks/useEditorToggler";

// TODO: fix memoization problems, because everytime an animation is triggered
// the entire component and its children are re-rendered.
export default function Settings() {

    const [textAnimation, toggleTextAnimation] = useAnimation(
        animations.reveal,
        animations.unreveal
    );
    
    const { editorAnimation, toggleEditor } = useEditorToggler();

    return (
        <div
            className={styles.settings}
            onMouseEnter={toggleTextAnimation}
            onMouseLeave={toggleTextAnimation}
        >
            <SettingsPresenter
                onClick={toggleEditor}
                textAnimation={textAnimation}
            />
            <SettingsEditor animation={editorAnimation}/>
        </div>
    );
}
