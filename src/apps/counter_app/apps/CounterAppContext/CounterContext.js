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
