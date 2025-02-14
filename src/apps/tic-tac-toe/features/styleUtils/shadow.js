import { themes } from "./themes";

export function shadow(r, g, b, theme) {
    const shadowBrightnessCoefficient = theme === themes.dark ? 150 : 0;
    return `0 0 10px rgba(${r + shadowBrightnessCoefficient}, ${
                g + shadowBrightnessCoefficient
            }, ${b + shadowBrightnessCoefficient}, 0.7), 0 0 40px rgba(${
                r + shadowBrightnessCoefficient
            }, ${g + shadowBrightnessCoefficient}, ${
                b + shadowBrightnessCoefficient
            }, 0.7), 0 0 100px rgba(${r + shadowBrightnessCoefficient}, ${
                g + shadowBrightnessCoefficient
            }, ${b + shadowBrightnessCoefficient}, 0.7)`
}