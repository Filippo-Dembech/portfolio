export const codeItems = [
    {
        isStateManagement: false,
        tabLabel: "CounterApp",
        tabCode: `
import { useReducer, useState } from "react";
import { reducer } from "./stateManagement/reducer";
import { initialState } from "./stateManagement/initialState";
import Header from "./ui/Header";
import Counter from "./ui/Counter";
import Step from "./ui/Step";
import StepDisplayer from "./ui/StepDisplayer";
import SignDisplayer from "./ui/SignDisplayer";
import ResetButton from "./ui/ResetButton";
import CodeViewer from "./CodeViewer";

export default function CounterApp() {
    const [{ counterValue, stepAmount }, dispatch] = useReducer(
        reducer,
        initialState
    );

    const component = (
        <>
            <div>
                <Header>CounterAppReducer</Header>
                <Counter
                    counterValue={counterValue}
                    increaseCounter={() =>
                        dispatch({ type: "increaseCounter" })
                    }
                    decreaseCounter={() =>
                        dispatch({ type: "decreaseCounter" })
                    }
                />
                <Step
                    stepAmount={stepAmount}
                    setStepAmount={(inputValue) =>
                        dispatch({ type: "setStepAmount", payload: inputValue })
                    }
                />
                <StepDisplayer stepAmount={stepAmount} />
                <SignDisplayer counterValue={counterValue} />
                <ResetButton onClick={() => dispatch({ type: "reset" })} />
            </div>
            <CodeViewer onTabSelect={onTabSelect} />
        </>
    );
    
    // NO event handler is present. Now the component "dispatches" actions, it does NOT define actions with event handlers.

    return component;
}
    `,
    },
    {
        isStateManagement: false,
        tabLabel: "Header",
        tabCode: `
export default function Header({children}) {
    
    return (
        <h1>{children}</h1>
    )
}
    `,
    },
    {
        isStateManagement: false,
        tabLabel: "Counter",
        tabCode: `
import DecreaseButton from "./DecreaseButton";
import IncreaseButton from "./IncreaseButton";

export default function Counter({
    counterValue,
    increaseCounter,
    decreaseCounter,
}) {
    const component = (
        <div>
            <DecreaseButton onClick={decreaseCounter} />
            <span key={counterValue}>
                {counterValue}
            </span>
            <IncreaseButton onClick={increaseCounter} />
        </div>
    );

    return component;
}

    `,
    },
    {
        isStateManagement: false,
        tabLabel: "DecreaseButton",
        tabCode: `
export default function DecreaseButton({ onClick }) {
    return (
        <button onClick={onClick}>-</button>
    )
}
    `,
    },
    {
        isStateManagement: false,
        tabLabel: "IncreaseButton",
        tabCode: `
export default function IncreaseButton({ onClick }) {
    return (
        <button onClick={onClick}>+</button>
    )
}
    `,
    },
    {
        isStateManagement: false,
        tabLabel: "ResetButton",
        tabCode: `
export default function ResetButton({onClick}) {

    const component = (
        <button onClick={onClick}>Reset</button>
    )
    
    return component;
}
    `,
    },
    {
        isStateManagement: false,
        tabLabel: "SignDisplayer",
        tabCode: `
export default function SignDisplayer({ counterValue }) {

    const isPositive = counterValue >= 0;
    const signDisplayerBackground = isPositive ? styles.greenBackground : styles.blueBackground; 
    const signDisplayerText = isPositive ? "Positive" : "Negative";
    const component = (
            <div className={\`\${styles.signDisplayer} \${signDisplayerBackground}\`}>{signDisplayerText}</div>
    )

    return component;
}
    `,
    },
    {
        isStateManagement: false,
        tabLabel: "Step",
        tabCode: `
export default function Step({ stepAmount, setStepAmount }) {

    const component = (
        <div>
            <label htmlFor="amount">Step Amount: </label>
            <input
                type="number"
                onChange={setStep}
                value={stepAmount}
            />
        </div>
    );

    function setStep(e) {
        setStepAmount(computeStepFrom(e.target.value));
    }

    function computeStepFrom(value) {
        if (value) return Number(value);
        else return 1;
    }

    return component;
}
    `,
    },
    {
        isStateManagement: false,
        tabLabel: "StepDisplayer",
        tabCode: `
export default function StepDisplayer({ stepAmount }) {
    return (
        <div>
            Step Amount: <span>{stepAmount}</span>
        </div>
    );
}

    `,
    },
    {
        isStateManagement: true,
        tabLabel: "initialState",
        tabCode: `
export const initialState = {
    counterValue: 0,
    stepAmount: 1,
};
    `,
    },
    {
        isStateManagement: true,
        tabLabel: "reducer",
        tabCode: `
export function reducer(currState, action) {
    switch (action.type) {
        case "increaseCounter":
            return {
                ...currState,
                counterValue: currState.counterValue + currState.stepAmount,
            };
        case "decreaseCounter":
            return {
                ...currState,
                counterValue: currState.counterValue - currState.stepAmount,
            };
        case "setStepAmount":
            return {
                ...currState,
                stepAmount: action.payload,
            };
        case "reset":
            return {
                ...currState,
                counterValue: 0,
                stepAmount: 1,
            };
        default:
            throw new Error(\`No action '\${action.type}' is known.\`);
    }
}
    `,
    },
];
