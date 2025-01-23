import { useState } from "react";
import Header from "../commons/ui/Header";
import Counter from "./ui/Counter";
import styles from "../commons/styles/CounterApp.module.css";
import Step from "./ui/Step";
import StepDisplayer from "../commons/ui/StepDisplayer";
import SignDisplayer from "../commons/ui/SignDisplayer";
import ResetButton from "../commons/ui/ResetButton";
import CodeViewer from "../commons/ui/CodeViewer";
import { codeItems } from "./codeItems";
import { useTheme } from "../../ThemeContext";

export default function CounterApp({ codeDescription }) {
    const [counterValue, setCounterValue] = useState(0);
    const [stepAmount, setStepAmount] = useState(1);
    const [activeIndex, setActiveIndex] = useState(0);

    const { isDarkTheme } = useTheme();

    const component = (
        <div className={styles.appBlock}>
            <div className={styles.description}>
                <h1 className={styles.descriptionHeader}>Counter App With <code>useState()</code></h1>
                {codeDescription}
            </div>
            <div
                className={`${styles.appLayout} ${
                    activeIfIndexIs(0)
                }`}
            >
                <Header
                    className={activeIfIndexIs(1)}
                    subtitle="with useState()"
                >
                    CounterApp
                </Header>
                <Counter
                    className={activeIfIndexIs(2)}
                    activeDecreaseButton={activeIndex === 3}
                    activeIncreaseButton={activeIndex === 4}
                    counterValue={counterValue}
                    setCounterValue={setCounterValue}
                    stepAmount={stepAmount}
                />
                <Step
                    className={activeIfIndexIs(5)}
                    stepAmount={stepAmount}
                    setStepAmount={setStepAmount}
                />
                <StepDisplayer
                    className={activeIfIndexIs(7)}
                    stepAmount={stepAmount}
                />
                <SignDisplayer
                    className={activeIfIndexIs(8)}
                    counterValue={counterValue}
                />
                <ResetButton
                    className={activeIfIndexIs(6)}
                    onClick={resetValues}
                />
            </div>
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

    function onTabSelect(currentTabIndex) {
        setActiveIndex(currentTabIndex);
    }

    function resetValues() {
        setCounterValue(0);
        setStepAmount(1);
    }

    return component;
}
