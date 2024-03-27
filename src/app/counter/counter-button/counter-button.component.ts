import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from 'src/app/state/counter.action';
import { CounterState } from 'src/app/state/counter.state';

@Component({
  selector: 'app-counter-button',
  templateUrl: './counter-button.component.html',
  styleUrls: ['./counter-button.component.scss']
})
export class CounterButtonComponent {


  constructor(private store: Store<{ counter: CounterState}>) { }
  
  
  increment() {
   
    
    this.store.dispatch(increment())
   }
  
  decrement() {
    this.store.dispatch(decrement())
  }

  reset() {
    this.store.dispatch(reset())
  }
}
