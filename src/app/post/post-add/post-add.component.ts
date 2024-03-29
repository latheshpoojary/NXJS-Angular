import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { addPost } from '../state/posts.action';

@Component({
  selector: 'app-post-add',
  templateUrl: './post-add.component.html',
  styleUrls: ['./post-add.component.scss']
})
export class PostAddComponent {

  postForm!: FormGroup;
  constructor(private fb:FormBuilder,private store:Store<AppState>) {
    this.postForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(6)]],
      desc:['',[Validators.required,Validators.minLength(10)]]
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
      this.store.dispatch(addPost({ post: post }));
      this.postForm.reset();
    }
    
  }

}
