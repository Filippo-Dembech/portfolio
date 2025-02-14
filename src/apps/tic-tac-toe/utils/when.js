export function when(condition) {
    return {
        use(style) {
            if (condition) return style;
            return {}
        }
    }
}