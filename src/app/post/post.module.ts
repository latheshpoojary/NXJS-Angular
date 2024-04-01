import { NgModule } from "@angular/core";
import { FormsModule, NgModel, ReactiveFormsModule } from "@angular/forms";
import { PostAddComponent } from "./post-add/post-add.component";
import { PostListComponent } from "./post-list/post-list.component";
import { Router, RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";
import { StoreModule } from "@ngrx/store";
import { postReducer } from "./state/posts.reducer";

const route: Routes = [
	{
		path: '',
		component:PostListComponent,
		children: [
			{
				path:'add' , component:PostAddComponent
			},
			{
				path:'edit/:id',component:PostAddComponent
			}
		]
	}
	
]


@NgModule({
	declarations: [
		PostAddComponent,
		PostListComponent
	],
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		RouterModule.forChild(route),
		StoreModule.forFeature('post',postReducer),
	]
})

export class PostModule{}