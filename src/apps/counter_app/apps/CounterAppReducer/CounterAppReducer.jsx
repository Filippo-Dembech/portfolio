import { useReducer, useState } from "react";
import { reducer } from "./stateManagement/reducer";
import { initialState } from "./stateManagement/initialState";
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
    const [{ counterValue, stepAmount }, dispatch] = useReducer(
        reducer,
        initialState
    );

    const { isDarkTheme } = useTheme();

    const [activeIndex, setActiveIndex] = useState(0);

    function onTabSelect(currentTabIndex) {
        setActiveIndex(currentTabIndex);
    }

    const component = (
        <div className={styles.appBlock}>
            <div className={styles.description}>
                <h1 className={styles.descriptionHeader}>Counter App with <code>useReducer()</code></h1>
                {codeDescription}
            </div>
            <div
                className={`${styles.appLayout} ${activeIfIndexIs(0)}`}
            >
                <Header className={activeIfIndexIs(1)} subtitle="with useReducer()">
                    CounterApp
                </Header>
                <Counter
                    className={activeIfIndexIs(2)}
                    activeDecreaseButton={activeIndex === 3}
                    activeIncreaseButton={activeIndex === 4}
                    counterValue={counterValue}
                    increaseCounter={() =>
                        dispatch({ type: "increaseCounter" })
                    }
                    decreaseCounter={() =>
                        dispatch({ type: "decreaseCounter" })
                    }
                />
                <Step
                    className={activeIfIndexIs(7)}
                    stepAmount={stepAmount}
                    setStepAmount={(inputValue) =>
                        dispatch({ type: "setStepAmount", payload: inputValue })
                    }
                />
                <StepDisplayer
                    className={activeIfIndexIs(8)}
                    stepAmount={stepAmount}
                />
                <SignDisplayer
                    className={activeIfIndexIs(6)}
                    counterValue={counterValue}
                />
                <ResetButton
                    className={activeIfIndexIs(5)}
                    onClick={() => dispatch({ type: "reset" })}
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

    return component;
}
