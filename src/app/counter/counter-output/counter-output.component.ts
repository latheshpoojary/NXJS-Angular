import { state } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getCounter } from 'src/app/state/counter.selector';
import { CounterState } from 'src/app/state/counter.state';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.scss']
})
export class CounterOutputComponent implements OnInit{
  counter: any;

  counter$!: Observable<{}>;
  constructor(private store: Store<AppState>) { }
  
  ngOnInit(): void {
    this.counter$ = this.store.select(getCounter);
  }

  
}
