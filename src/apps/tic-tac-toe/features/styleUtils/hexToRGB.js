export function hexToRGB(hex) {
    const numericValue = parseInt(hex.slice(1), 16);
    const r = (numericValue >> 16) & 0xff;
    const g = (numericValue >> 8) & 0xff;
    const b = numericValue & 0xff;
    return { r, g, b };
}