import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Post } from 'src/app/modal/post.modal';
import { AppState } from 'src/app/store/app.state';
import { getPostById, getPosts } from '../state/post.selector';
import { deletePost } from '../state/posts.action';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit{
  deletingPostId!: string | undefined;
  deletingPost!: Post;
  post!: Post[];
  constructor(private state: Store<AppState>) { }

  ngOnInit(): void {
    this.state.select(getPosts).subscribe(res => {
      this.post = res;
    })
  }

  onDelete() {
    
    this.state.select(getPostById,{id:this.deletingPostId}).subscribe(res => {
      this.deletingPost = res;
    });
    this.state.dispatch(deletePost({ post: this.deletingPost }));
  }
  
}
