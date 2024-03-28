import { postReducer } from "../post/state/posts.reducer";
import { PostState } from "../post/state/posts.state";
import { counterReducer } from "../state/counter.reducer";
import { CounterState } from "../state/counter.state";

export interface AppState{
	counter: CounterState,
	post:PostState
}

export const appReducer = {
	counter: counterReducer,
	post:postReducer
}