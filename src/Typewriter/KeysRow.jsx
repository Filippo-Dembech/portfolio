import Key from "./Key";

export default function KeysRow({ keys, pressedKey }) {
    return (
        <>
            {keys.split("").map((key) => (
                <Key
                    key={key}
                    isPressed={pressedKey?.toLowerCase() === key?.toLowerCase()}
                >
                    {key}
                </Key>
            ))}
        </>
    );
}
