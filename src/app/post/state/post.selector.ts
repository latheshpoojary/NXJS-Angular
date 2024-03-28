import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PostState } from "./posts.state";

const getPostState = createFeatureSelector<PostState>('post');

export const getPosts = createSelector(getPostState, (state: any) => {
	
	
	return state.post;
})