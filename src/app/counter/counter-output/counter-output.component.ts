import { state } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CounterState } from 'src/app/state/counter.state';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.scss']
})
export class CounterOutputComponent implements OnInit{
  counter: any;

  counter$!:Observable<{counter:number}>
  constructor(private store: Store<{ counter:CounterState }>) { }
  
  ngOnInit(): void {
    this.counter$ = this.store.select('counter');
  }

  
}
