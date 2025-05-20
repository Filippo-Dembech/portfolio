import KeyButton from "./KeyButton";

export default function KeysRow({ keys }) {
    return (
        <>
            {keys.map((key) => (
                <KeyButton
                    key={key.id}
                    button={key}
                />
            ))}
        </>
    );
}
