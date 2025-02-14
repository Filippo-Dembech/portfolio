import { useDispatch } from "react-redux";
import { setPlayerColor } from "../../../../features/playersSlice";
import { classes, player } from '../../../../utils/commons';

import SymbolPicker from './SymbolPicker/SymbolPicker'
import ColorPicker from './ColorPicker/ColorPicker'

import styles from './SettingsEditor.module.css'

// TODO: memoize editor: whenever the editor's wheel spins the SettingsEditor is rerendered
export default function SettingsEditor({animation}) {
    const dispatch = useDispatch();
    
    const component = (
        <div className={classes(animation, styles.settingsEditor)}>
            <div className={styles.player}>
                <ColorPicker onSelect={setColorOf(player.one)}/>
                <SymbolPicker of={player.one}/>
            </div>
            <div className={styles.player}>
                <ColorPicker onSelect={setColorOf(player.two)}/>
                <SymbolPicker of={player.two}/>
            </div>
        </div>
    )

    
    function setColorOf(playerIndex) {
        return (e) => dispatch(setPlayerColor(playerIndex, e.target.value))
    }
    
    return component;
}