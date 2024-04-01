import { createAction, props } from "@ngrx/store";
import { Post } from "src/app/modal/post.modal";

export const addPost = createAction('addPost', props<{ post: Post }>());

export const updatePost = createAction('updatePost', props<{ post: Post }>());