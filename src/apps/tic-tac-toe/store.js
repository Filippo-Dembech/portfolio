import { configureStore } from "@reduxjs/toolkit";
import boardReducer from "./features/boardSlice";
import playersReducer from './features/playersSlice';

const store = configureStore({
    reducer: {
        // slice
        board: boardReducer,
        players: playersReducer,
    },
});

export default store;
