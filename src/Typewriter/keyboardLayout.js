import { keyIcons } from "./keyIcons";

export const keyboardLayout = {
  firstRow: [
    { symbol: "\\", rowSpan: 1, colSpan: 1 },
    { symbol: "1", rowSpan: 1, colSpan: 1 },
    { symbol: "2", rowSpan: 1, colSpan: 1 },
    { symbol: "3", rowSpan: 1, colSpan: 1 },
    { symbol: "4", rowSpan: 1, colSpan: 1 },
    { symbol: "5", rowSpan: 1, colSpan: 1 },
    { symbol: "6", rowSpan: 1, colSpan: 1 },
    { symbol: "7", rowSpan: 1, colSpan: 1 },
    { symbol: "8", rowSpan: 1, colSpan: 1 },
    { symbol: "9", rowSpan: 1, colSpan: 1 },
    { symbol: "0", rowSpan: 1, colSpan: 1 },
    { symbol: "'", rowSpan: 1, colSpan: 1 },
    { symbol: "ì", rowSpan: 1, colSpan: 1 },
    { symbol: keyIcons.back, rowSpan: 1, colSpan: 3 }
  ],
  secondRow: [
    { symbol: keyIcons.tab, rowSpan: 1, colSpan: 2 },
    { symbol: "q", rowSpan: 1, colSpan: 1 },
    { symbol: "w", rowSpan: 1, colSpan: 1 },
    { symbol: "e", rowSpan: 1, colSpan: 1 },
    { symbol: "r", rowSpan: 1, colSpan: 1 },
    { symbol: "t", rowSpan: 1, colSpan: 1 },
    { symbol: "y", rowSpan: 1, colSpan: 1 },
    { symbol: "u", rowSpan: 1, colSpan: 1 },
    { symbol: "i", rowSpan: 1, colSpan: 1 },
    { symbol: "o", rowSpan: 1, colSpan: 1 },
    { symbol: "p", rowSpan: 1, colSpan: 1 },
    { symbol: "è", rowSpan: 1, colSpan: 1 },
    { symbol: "+", rowSpan: 1, colSpan: 1 },
    { symbol: keyIcons.enter, rowSpan: 2, colSpan: 2 }
  ],
  thirdRow: [
    { symbol: keyIcons.capsLock, rowSpan: 1, colSpan: 2 },
    { symbol: "a", rowSpan: 1, colSpan: 1 },
    { symbol: "s", rowSpan: 1, colSpan: 1 },
    { symbol: "d", rowSpan: 1, colSpan: 1 },
    { symbol: "f", rowSpan: 1, colSpan: 1 },
    { symbol: "g", rowSpan: 1, colSpan: 1 },
    { symbol: "h", rowSpan: 1, colSpan: 1 },
    { symbol: "j", rowSpan: 1, colSpan: 1 },
    { symbol: "k", rowSpan: 1, colSpan: 1 },
    { symbol: "l", rowSpan: 1, colSpan: 1 },
    { symbol: "ò", rowSpan: 1, colSpan: 1 },
    { symbol: "à", rowSpan: 1, colSpan: 1 },
    { symbol: "ù", rowSpan: 1, colSpan: 1 }
  ],
  fourthRow: [
    { symbol: keyIcons.shift, rowSpan: 1, colSpan: 3 },
    { symbol: "<", rowSpan: 1, colSpan: 1 },
    { symbol: "z", rowSpan: 1, colSpan: 1 },
    { symbol: "x", rowSpan: 1, colSpan: 1 },
    { symbol: "c", rowSpan: 1, colSpan: 1 },
    { symbol: "v", rowSpan: 1, colSpan: 1 },
    { symbol: "b", rowSpan: 1, colSpan: 1 },
    { symbol: "n", rowSpan: 1, colSpan: 1 },
    { symbol: "m", rowSpan: 1, colSpan: 1 },
    { symbol: ",", rowSpan: 1, colSpan: 1 },
    { symbol: ".", rowSpan: 1, colSpan: 1 },
    { symbol: "-", rowSpan: 1, colSpan: 1 },
    { symbol: keyIcons.shift, rowSpan: 1, colSpan: 2 }
  ],
  fifthRow: [
    { symbol: keyIcons.ctrl, rowSpan: 1, colSpan: 1 },
    { symbol: "fn", rowSpan: 1, colSpan: 1 },
    { symbol: keyIcons.win, rowSpan: 1, colSpan: 1 },
    { symbol: keyIcons.alt, rowSpan: 1, colSpan: 1 },
    { symbol: " ", rowSpan: 1, colSpan: 8 },
    { symbol: keyIcons.alt, rowSpan: 1, colSpan: 1 },
    { symbol: keyIcons.ctrl, rowSpan: 1, colSpan: 1 }
  ]
};
