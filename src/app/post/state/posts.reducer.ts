import { createReducer, on } from '@ngrx/store';
import { PostState, initialState } from './posts.state';
import { addPost, deletePost, updatePost } from './posts.action';

export function postReducer(state: any, action: any) {
  return _postReducer(state, action);
}

const _postReducer = createReducer(
  initialState,
  on(addPost, (state: PostState, action: any) => {
    let post = { ...action.post };
    post.id = (state.post.length + 1).toString();
    return {
      ...state,
      post: [...state.post, post],
    };
  }),
  on(updatePost, (state: any, action: any) => {
    const updatedPosts = state.post.map((post: any) => {
      return action.post.id === post.id ? action.post : post;
    });

    return {
      ...state,
      post: updatedPosts,
    };
  }),
  on(deletePost, (state: any, action: any) => {
    const deletedPost = state.post.filter((post: any) => {
      return action.post.id !== post.id 
    })
    return {
      ...state,
      post:deletedPost
    }
  })
);
