import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { customInput } from 'src/app/state/counter.action';
import { CounterState } from 'src/app/state/counter.state';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss']
})
export class CustomInputComponent {


  countValue!: number;
  constructor(private store: Store<{ counter:CounterState }>) { }
  

  onCustomInput() {
    this.store.dispatch(customInput({count:+this.countValue}))
  }
}
