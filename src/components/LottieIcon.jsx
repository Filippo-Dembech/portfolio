import { useEffect } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

function LottieIcon({ className, autoplay, loop, src, onLoad }) {

    useEffect(() => {
        const preload = async () => {
            const res = await fetch(src);
            if (res.ok) {
                onLoad?.();
            }
        };

        preload();
    }, [onLoad, src]);

    return (
        <DotLottieReact
            className={className}
            src={src}
            autoplay={autoplay}
            loop={loop}
        />
    );
}

export default LottieIcon;
