export function classes(...classes) {
    return classes.reduce((result, curr) => result += ` ${curr}`, "");
}