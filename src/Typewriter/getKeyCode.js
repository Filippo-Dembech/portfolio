import { keyIcons } from "./keyIcons";

export function getKeyCode(key) {
    if (key === "_") return keyIcons.enter;
    return key;
}
