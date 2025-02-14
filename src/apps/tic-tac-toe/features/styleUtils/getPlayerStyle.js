import { hexToRGB } from './hexToRGB';
import { getStyleFrom } from './getStyleFrom';
import { themes } from './themes';
import { isLight } from './isLight';

export function getPlayerStyle(hex) {
    let color = hexToRGB(hex);

    const lightColor = getStyleFrom(color);

    const darkColor = getStyleFrom(color, themes.dark);

    if (isLight(color)) return lightColor;

    return darkColor;
}