import { Post } from "src/app/modal/post.modal"

export interface PostState{
	post:Post[]
}

export const initialState:PostState = {
	post: [
		{
			id:'1',title:'Simple test',desc:'simple disc'
		},
		{
			id:'2',title:'Simple test',desc:'simple disc'
		}
	]
}