import { Post } from "src/app/modal/post.modal"

export interface PostState{
	post:Post[]
}

export const initialState:PostState = {
	post: [
		{
			id:'1',title:'Simple test1',desc:'simple disc1'
		},
		{
			id:'2',title:'Simple test2',desc:'simple disc2'
		}
	]
}