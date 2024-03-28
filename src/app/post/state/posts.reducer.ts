import { createReducer } from "@ngrx/store";
import { initialState } from "./posts.state";

export function postReducer(state: any, action: any) {
	return _postReducer(state, action);
}

const _postReducer = createReducer(initialState);