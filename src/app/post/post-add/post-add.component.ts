import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { addPost } from '../state/posts.action';
import { ActivatedRoute } from '@angular/router';
import { getPostById } from '../state/post.selector';

@Component({
  selector: 'app-post-add',
  templateUrl: './post-add.component.html',
  styleUrls: ['./post-add.component.scss']
})
export class PostAddComponent {

  routerPostId!: string | null;


  postForm!: FormGroup;
  constructor(private fb:FormBuilder,private store:Store<AppState>,private route:ActivatedRoute) {
    this.postForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(6)]],
      desc:['',[Validators.required,Validators.minLength(10)]]
    })
    this.route.paramMap.subscribe(routes => {
      this.routerPostId = routes.get('id');
      if (this.routerPostId) {
        this.setFormData();
      }
      console.log(this.routerPostId);
      
    })
  }

  setFormData() {
    
    this.store.select(getPostById, { id: this.routerPostId }).subscribe(res => {
      this.postForm.setValue({
        title: res.title,
        desc:res.desc
      })
    })
    
  }


  getTitleErrorMessage() {
    const element = this.postForm.get('title');
    let msg = '';
    if (element?.touched && !element.valid) {
      if (element.errors?.['required']) {
        msg = 'This field is required';
      }
      if (element.errors?.['minlength']) {
        msg = 'field atleast have 6 character long';
      }
    }
    return msg;

  }

  getDescErrorMessage() {
    const element = this.postForm.get('desc');
    let msg = '';
    if (element?.touched && !element.valid) {
      if (element.errors?.['required']) {
        msg = 'This field is required';
      }
      if (element.errors?.['minlength']) {
        msg = 'field atleast have 10 character long';
      }
    }
    return msg;
  }

  onAddPost() {
    if (this.postForm.valid) {

      let post = {
        title: this.postForm.value.title,
        desc:this.postForm.value.desc
      }
      if (this.routerPostId) {
      } else {
        this.store.dispatch(addPost({ post: post }));
      }
      this.postForm.reset();
    }
    
  }

}
