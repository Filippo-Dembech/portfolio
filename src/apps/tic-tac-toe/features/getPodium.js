export function getPodium(players, { winnerIndex }) {
    if (winnerIndex === 0) return [ players[0], players[1] ];
    return [ players[1], players[0] ];
}