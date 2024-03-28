import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { changeName, customInput } from 'src/app/state/counter.action';
import { getName } from 'src/app/state/counter.selector';
import { CounterState } from 'src/app/state/counter.state';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss']
})
export class CustomInputComponent {

  ownerName!: string;
  countValue!: number;
  constructor(private store: Store<{ counter: CounterState }>) {
    this.store.select(getName).subscribe(data => {
      this.ownerName = data;
    })
   }
  

  onCustomInput() {
    this.store.dispatch(customInput({count:+this.countValue}))
  }

  changeName() {
    this.store.dispatch(changeName());
  }
}
