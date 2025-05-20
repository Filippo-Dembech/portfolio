import { keyIcons } from "./keyIcons";

export function getKeyCode(key) {
    if (key === "_") return keyIcons.enter;
    if (key === "D") return keyIcons.back;
    return key;
}
