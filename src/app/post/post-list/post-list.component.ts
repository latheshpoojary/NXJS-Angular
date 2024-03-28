import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Post } from 'src/app/modal/post.modal';
import { AppState } from 'src/app/store/app.state';
import { getPosts } from '../state/post.selector';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit{

  posts$!: Observable<Post[]>;
  constructor(private state: Store<AppState>) { }

  ngOnInit(): void {
    this.posts$ = this.state.select(getPosts);
  }
  
}
