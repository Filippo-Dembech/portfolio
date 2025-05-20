import KeyButton from "./KeyButton";

export default function KeysRow({ keys, pressedKey }) {
    return (
        <>
            {keys.map((key) => (
                <KeyButton
                    key={key.id}
                    button={key}
                    isPressed={pressedKey?.toLowerCase() === key.symbol?.toLowerCase()}
                />
            ))}
        </>
    );
}
