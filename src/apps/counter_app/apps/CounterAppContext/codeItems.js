export const codeItems = [
    {
        isStateManagement: false,
        tabLabel: "Counter App",
        tabCode: `
export default function CounterApp() {

    const component = (
        <CounterProvider>
            <div>
                <Header>CounterAppContext</Header>
                <Counter />
                <Step />
                <StepDisplayer />
                <SignDisplayer />
                <ResetButton />
            </div>
        </CounterProvider>
    );

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
import { useCounter } from "../CounterContext";

export default function Counter() {
    const { counterValue, increaseCounter, decreaseCounter } = useCounter();

    const component = (
        <div>
            <DecreaseButton onClick={decreaseCounter} />
            <span
                key={counterValue}
            >
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
        tabLabel: "Decrease Button",
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
import { useCounter } from "../CounterContext";

export default function ResetButton() {
    const { reset } = useCounter();

    const component = (
        <button
            onClick={() => reset()}
        >
            Reset
        </button>
    );

    return component;
}

    `,
    },
    {
        isStateManagement: false,
        tabLabel: "SignDisplayer",
        tabCode: `
import { useCounter } from '../CounterContext';"
import styles from './SignDisplayer.module.css';

export default function SignDisplayer() {
 
   const { counterValue } = useCounter();
  
   const isPositive = counterValue >= 0;
   const signDisplayerBackground = isPositive
                                    ? styles.greenBackground
                                    : styles.blueBackground;
    const signDisplayerText = isPositive
                                ? 'Positive'
                                : 'Negative';
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
import { useCounter } from '../CounterContext';

export default function Step() {
    
    const { stepAmount, setStep } = useCounter();

    const component = (
        <div>
            <label htmlFor="amount">Step Amount: </label>
            <input
                type="number"
                onChange={(e) => setStep(e.target.value)}
                value={stepAmount}
            />
        </div>
    );

    return component;
}
    `,
    },
    {
        isStateManagement: false,
        tabLabel: "StepDisplayer",
        tabCode: `
import { useCounter } from "../CounterContext";

export default function StepDisplayer() {
    
    const { stepAmount } = useCounter();

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
        tabLabel: "CounterContext",
        tabCode: `
import { useContext, useState } from "react";
import { createContext } from "react";

const CounterContext = createContext();

function CounterProvider({ children }) {
    
    const [ counterValue, setCounterValue ] = useState(0);
    const [ stepAmount, setStepAmount ] = useState(1);

    const component = (
        <CounterContext.Provider value={{
            counterValue,
            stepAmount,
            increaseCounter,
            decreaseCounter,
            setStep,
            reset
        }}>
            {children}
        </CounterContext.Provider>
    )
    
    function increaseCounter() {
        setCounterValue(curr => curr + stepAmount)
    }
    
    function decreaseCounter() {
        setCounterValue(curr => curr - stepAmount)
    }
    
    function setStep(value) {
        if (value) setStepAmount(Number(value));
        else setStepAmount(1)
    }
    
    function reset() {
        setCounterValue(0);
        setStepAmount(1);
    }
    
    return component;
}

function useCounter() {
    const counterContext = useContext(CounterContext);
    if (counterContext === undefined) throw new Error("'useCounter()' is used outside CounterContext.");
    return counterContext;
}

export { CounterProvider, useCounter };
    `,
    },
];
