export function getRowSpan(span) {
    if (span === 2) return "row-span-2";
    if (span === 3) return "row-span-3";
    if (span === 4) return "row-span-4";
    return "";
}
export function getColSpan(span) {
    if (span === 2) return "col-span-2";
    if (span === 3) return "col-span-3";
    if (span === 4) return "col-span-4";
    if (span === 6) return "col-span-6";
    if (span === 8) return "col-span-8";
    return "";
}
