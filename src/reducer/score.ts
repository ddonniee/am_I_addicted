import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";

export interface ScoreState {
    value: number;
}
const initialState: ScoreState = {
    value: 0,
}
export const scoreSlice = createSlice({
    name: 'score',
    initialState,
    reducers: {
        increment: (state, action: PayloadAction<number>) =>{
            state.value = action.payload;
        },
        decrement: (state, action: PayloadAction<number>) =>{
            state.value = action.payload;
        }
    }
})

export interface containerState {
    value: string;
}
const initialContainer: containerState = {
    value: '',
}
export const containerSlice = createSlice({
    name: 'container',
    initialState: initialContainer,
    reducers: {
        update: (state, action) =>{
            state.value = action.payload;
        }
    }
})
export const {increment, decrement} = scoreSlice.actions
export const {update} = containerSlice.actions
// 리듀서를 결합
const rootReducer = combineReducers({
    score: scoreSlice.reducer,
    container: containerSlice.reducer,
});

export default rootReducer;