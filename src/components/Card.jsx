import { useState } from "react";

const cardStyle = {
    position: "absolute",
    width: "100%",
    height: "100%",
    backfaceVisibility: "hidden",
};

function Card({children, className}) {
    const [isFlipped, setIsFlipped] = useState(false);

    const outerCardStyle = {
        backgroundColor: "transparent",
        perspective: "1000px",
    };

    const innerCardStyle = {
        position: "relative",
        width: "100%",
        height: "100%",
        transition: "transform 0.6s",
        transformStyle: "preserve-3d",
        transform: isFlipped ? "rotateY(180deg)" : "",
    };

    return (
        <div
            style={outerCardStyle}
            className={className}
            onClick={() => setIsFlipped((curr) => !curr)}
        >
            <div style={innerCardStyle}>
                {children}
            </div>
        </div>
    );
}

function Front({children, className}) {
    return <div style={cardStyle} className={className}>{children}</div>;
}

function Back({children, className}) {
    const backCardStyle = {
        transform: "rotateY(180deg)",
    };

    return <div style={{ ...cardStyle, ...backCardStyle }} className={className}>{children}</div>;
}

Card.Front = Front;
Card.Back = Back;

export default Card;
