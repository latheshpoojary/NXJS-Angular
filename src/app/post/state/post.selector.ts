import { createFeatureSelector, createSelector, props } from "@ngrx/store";
import { PostState } from "./posts.state";

const getPostState = createFeatureSelector<PostState>('post');

export const getPosts = createSelector(getPostState, (state: any) => {
	return state.post;
})

export const getPostById = createSelector(getPostState, (state:any, props:any) => {
	return state.post.find((post:any)=>post.id === props.id);
})

