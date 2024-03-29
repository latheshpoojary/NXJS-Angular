import { createReducer, on } from "@ngrx/store";
import { PostState, initialState } from "./posts.state";
import { addPost } from "./posts.action";
import { state } from "@angular/animations";
import { Post } from "src/app/modal/post.modal";

export function postReducer(state: any, action: any) {
	return _postReducer(state, action);
}

const _postReducer = createReducer(initialState, on(addPost, (state: PostState, action: any) => {
	let post = { ...action.post};
	post.id = (state.post.length + 1).toString();
return {
	...state,
	post:[...state.post,post]

}

}));