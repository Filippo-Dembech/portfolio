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
            throw new Error(`No action '${action.type}' is known.`);
    }
}