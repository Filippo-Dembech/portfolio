export function isLight({ r, g, b }) {
    const brightness = 0.299 * r + 0.587 * g + 0.114 * b;
    return brightness >= 50;
}