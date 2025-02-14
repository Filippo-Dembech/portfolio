import { rgba } from './rgba';
import { shadow } from './shadow';
import { themes } from './themes';

export function getStyleFrom({ r, g, b}, theme) {
    return {
        container: {
            backgroundColor: rgba(r, g, b),
            boxShadow: shadow(r, g, b, theme)
        },
        text: {
            color: rgba(r, g, b),
            textShadow: shadow(r, g, b, theme)
        },
        justBackground: {
            backgroundColor: rgba(r, g, b),
        },
        isDark: theme === themes.dark,
    };
}