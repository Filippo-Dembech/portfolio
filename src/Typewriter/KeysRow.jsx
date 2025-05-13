import Key from "./Key";

export default function KeysRow({ keys, pressedKey }) {
    return (
        <>
            {keys.map((key) => (
                <Key
                    key={key.id}
                    button={key}
                    isPressed={pressedKey?.toLowerCase() === key.symbol?.toLowerCase()}
                />
            ))}
        </>
    );
}
