import { useNavigate } from "react-router-dom";
import KeyButton from "./KeyButton";
import { keyIcons } from "./keyIcons";

export default function KeysRow({ keys }) {
    const navigate = useNavigate()
    return (
        <>
            {keys.map((key) => 
                (key.symbol === keyIcons.enter) ? (
                    <KeyButton
                        onClick={() => navigate("home")}
                        key={key.id}
                        button={key}
                    />
                ) : (
                    <KeyButton
                        key={key.id}
                        button={key}
                    />
               )
                    
            )}
        </>
    );
}
