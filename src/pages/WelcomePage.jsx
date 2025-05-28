import { useEffect } from "react";
import { TypewriterProvider } from "../context/TypewriterContext";
import Typewriter from "../Typewriter/Typewriter";
import { useNavigate } from "react-router-dom";

export default function WelcomePage() {

    const navigate = useNavigate();

    useEffect(() => {
        const callback = (e) => {
            if (e.key === "Enter") {
                navigate("/home")
            }
        };
        document.addEventListener("keydown", callback);
        return () => document.removeEventListener("keydown", callback);
    }, []);

    return (
        <div className="bg-orange-100 min-h-[100dvh] flex justify-center">
            <TypewriterProvider>
                <Typewriter
                    sentences={[
                        "Hi there!",
                        "I'm Phil.",
                        "Welcome to my world!",
                        "I like coding.",
                        "A lot.",
                        "Wanna see my works?",
                        "Press 'Enter'",
                    ]}
                    typingSpeed={90}
                    delayBeforeType={60}
                />
            </TypewriterProvider>
        </div>
    );
}
