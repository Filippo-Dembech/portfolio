import { createSlice } from "@reduxjs/toolkit";
import { checkBoard } from "../utils/matrix";

const initialState = {
    board: [
        [
            { playerIndex: null, mark: null, isWinner: false, isActive: true },
            { playerIndex: null, mark: null, isWinner: false, isActive: true },
            { playerIndex: null, mark: null, isWinner: false, isActive: true },
        ],
        [
            { playerIndex: null, mark: null, isWinner: false, isActive: true },
            { playerIndex: null, mark: null, isWinner: false, isActive: true },
            { playerIndex: null, mark: null, isWinner: false, isActive: true },
        ],
        [
            { playerIndex: null, mark: null, isWinner: false, isActive: true },
            { playerIndex: null, mark: null, isWinner: false, isActive: true },
            { playerIndex: null, mark: null, isWinner: false, isActive: true },
        ],
    ],
    oldGames: [],
};

const boardSlice = createSlice({
    name: "board",
    initialState,
    reducers: {
        deactivateBoard(state) {
            state.board.forEach((row) =>
                row.forEach((cell) => (cell.isActive = false))
            );
        },
        markSquare: {
            prepare({ x, y, playerIndex }) {
                return { payload: { x, y, playerIndex } };
            },
            reducer(state, action) {
                const { x, y, playerIndex } = action.payload;
                const square = state.board[x][y];
                if (!square.playerIndex) state.board[x][y].playerIndex = playerIndex;
                state.board[x][y].isActive = false;
            },
        },
        markVictoriousArea: {
            prepare(indexes) {
                return { payload: indexes };
            },
            reducer(state, action) {
                action.payload.forEach(
                    (indexes) =>
                        (state.board[indexes[0]][indexes[1]].isWinner = true)
                );
            },
        },
        saveBoard(state) {
            state.oldGames.push(state.board);
        },
        cleanBoard(state) {
            state.board = initialState.board;
        },
        reset(state) {
            state.board = initialState.board;
            state.oldGames = initialState.oldGames;
        },
    },
    selectors: {
        selectCombo: (state) => checkBoard(state.board),
        selectBoard: (state) => state.board,
        areAllSquaresMarked: (state) =>
            state.board.every((row) =>
                row.every((square) => square.playerIndex !== null)
            ),
    },
});

export const {
    markSquare,
    deactivateBoard,
    markVictoriousArea,
    saveBoard,
    cleanBoard,
    reset,
} = boardSlice.actions;

export function selectSquare(x, y) {
    return (store) => store.board.board[x][y];
}

export const { selectCombo, selectBoard, areAllSquaresMarked } =
    boardSlice.selectors;

export default boardSlice.reducer;
