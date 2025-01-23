import { useState } from "react";

import Header from "../commons/ui/Header";
import Counter from "./ui/Counter";
import styles from "../commons/styles/CounterApp.module.css";
import Step from "./ui/Step";
import StepDisplayer from "./ui/StepDisplayer";
import SignDisplayer from "./ui/SignDisplayer";
import ResetButton from "./ui/ResetButton";
import { CounterProvider } from "./CounterContext";
import CodeViewer from "../commons/ui/CodeViewer";
import { codeItems } from "./codeItems";
import { useTheme } from "../../ThemeContext";


export default function CounterApp({ codeDescription }) {
    const [activeIndex, setActiveIndex] = useState(0);
    
    const { isDarkTheme } = useTheme();

    function onTabSelect(currentTabIndex) {
        setActiveIndex(currentTabIndex);
    }

    const component = (
        <div className={styles.appBlock}>
            <div className={styles.description}>
                <h1 className={styles.descriptionHeader}>Counter App with <em>Context API</em></h1>
                {codeDescription}
            </div>
            <CounterProvider>
                <div
                    className={`${styles.appLayout} ${activeIfIndexIs(0)}`}
                >
                    <Header className={activeIfIndexIs(1)} subtitle="with Context API">CounterApp</Header>
                    <Counter className={activeIfIndexIs(2)} activeDecreaseButton={activeIndex === 3} activeIncreaseButton={activeIndex === 4}/>
                    <Step className={activeIfIndexIs(7)} />
                    <StepDisplayer className={activeIfIndexIs(8)}/>
                    <SignDisplayer className={activeIfIndexIs(6)}/>
                    <ResetButton className={activeIfIndexIs(5)}/>
                </div>
            </CounterProvider>
            <CodeViewer onTabSelect={onTabSelect} codeItems={codeItems}/>
        </div>
    );
    
    function activeIfIndexIs(index) {
        if (activeIndex === index) {
            if (isDarkTheme) return styles.darkActive
            return styles.lightActive
        }
        return ""
    }

    return component
}
