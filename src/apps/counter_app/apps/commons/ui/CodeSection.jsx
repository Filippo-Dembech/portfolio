import {
    atomOneDark,
    CopyBlock,
    monoBlue,
} from "react-code-blocks";
import { useTheme } from "../../../ThemeContext";

export default function CodeSection({ code }) {
    const { isDarkTheme } = useTheme();
    
    const codeHighlight = isDarkTheme ? atomOneDark : monoBlue;

    const component = (
        <CopyBlock
            codeBlock
            customStyle={{ fontFamily: "Consolas", borderRadius: "20px" }}
            text={code}
            language="jsx"
            theme={codeHighlight}
        />
    );

    return component;
}
