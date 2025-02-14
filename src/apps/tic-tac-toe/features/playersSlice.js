import { createSelector, createSlice } from "@reduxjs/toolkit";
import { getPlayerStyle } from "./styleUtils/getPlayerStyle";
import { toggleIndex } from "./toggleIndex";
import { getPodium } from "./getPodium";

const initialState = {
    currentPlayerIndex: 0,
    winner: null,
    loser: null,
    players: [
        {
            name: "Player 1",
            symbol: "x",
            score: 0,
            style: getPlayerStyle('#00ffb2'),
        },
        {
            name: "Player 2",
            symbol: "o",
            score: 0,
            style: getPlayerStyle('#ff00d2'),
        },
    ],
};

const playersSlice = createSlice({
    name: "players",
    initialState,
    reducers: {
        currentPlayerWins(state) {
            if (state.winner) return;
            state.players[state.currentPlayerIndex].score += 1;
        },
        definePodium(state) {
            [state.winner, state.loser] = getPodium(state.players, {
                winnerIndex: state.currentPlayerIndex,
            });
        },
        togglePlayer(state) {
            state.currentPlayerIndex = toggleIndex(state.currentPlayerIndex);
        },
        resetPodium(state) {
            state.winner = null;
            state.loser = null;
        },
        reset(state) {
            state.currentPlayerIndex = initialState.currentPlayerIndex; // 0
            state.players = initialState.players; // players' object literals
            state.winner = initialState.winner; // null
        },
        setPlayerColor: {
            prepare(playerIndex, hex) {
                return { payload: { playerIndex, hex } };
            },
            reducer(state, action) {
                const { playerIndex, hex } = action.payload;

                state.players[playerIndex].style = getPlayerStyle(hex);
            },
        },
        setPlayerSymbol: {
            prepare(playerIndex, newSymbol) {
                return { payload: { playerIndex, newSymbol } };
            },
            reducer(state, action) {
                const { playerIndex, newSymbol } = action.payload;

                state.players[playerIndex].symbol = newSymbol;
            },
        },
    },
    selectors: {
        selectCurrentPlayer: (state) => state.players[state.currentPlayerIndex],
        selectCurrentPlayerIndex: (state) => state.currentPlayerIndex,
        // TODO: change selectWinnerCheck name to selectWinner, because it is evaluated as the winner object and it's not a boolean value
        selectWinnerCheck: (state) => state.winner,
        selectPodium: createSelector([(state) => state], (state) => [
            state.winner,
            state.loser,
        ]),
        selectPlayersStyles: createSelector(
            [(state) => state.players],
            (players) => [players[0].style, players[1].style]
        ),
        selectSymbols: createSelector([(state) => state.players], (players) => [
            players[0].symbol,
            players[1].symbol,
        ]),
    },
});

// action creators
export const {
    currentPlayerWins,
    definePodium,
    togglePlayer,
    resetPodium,
    reset,
    setPlayerColor,
    setPlayerSymbol,
} = playersSlice.actions;

// selectors
export const {
    selectCurrentPlayer,
    selectCurrentPlayerIndex,
    selectWinnerCheck,
    selectPlayersStyles,
    selectPodium,
    selectSymbols,
} = playersSlice.selectors;

// reducer
export default playersSlice.reducer;
