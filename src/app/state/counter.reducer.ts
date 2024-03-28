import { State, createReducer, on } from "@ngrx/store";
import { initialState } from "./counter.state";
import { changeName, customInput, decrement, increment, reset } from "./counter.action";
import { state } from "@angular/animations";
import { Action } from "rxjs/internal/scheduler/Action";


const _counterReducer = createReducer(initialState, on(increment, (state:any) => {
	return {
		...state,
		counter:state.counter + 1,
	}
}), on(decrement, (state: any) => {
	return {
		...state,
		counter:state.counter - 1,
	}
}), on(reset, (state: any) => {
	return {
		...state,
		counter:0
	}
}), on(customInput, (state: any, action: any) => {
	return {
		...state,
		counter:state.counter + action.count
	}
}), on(changeName, (state:any) => {
	return {
		...state,
		name:'lathesh'

	}
}))




export function counterReducer(state: any, action: any) {
	return _counterReducer(state, action);
}