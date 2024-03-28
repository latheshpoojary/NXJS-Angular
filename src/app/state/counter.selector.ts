import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CounterState } from "./counter.state";

const getConterState = createFeatureSelector<CounterState>('counter');

export const getCounter = createSelector(getConterState, (state) => {
	return state.counter;
})

export const getName = createSelector(getConterState, (state) => {
	return state.name;
})