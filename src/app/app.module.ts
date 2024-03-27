import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './state/counter.reducer';
import { CounterComponent } from './counter/counter/counter.component';
import { CounterOutputComponent } from './counter/counter-output/counter-output.component';
import { CounterButtonComponent } from './counter/counter-button/counter-button.component';
import { CustomInputComponent } from './counter/custom-input/custom-input.component';


@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    CounterOutputComponent,
    CounterButtonComponent,
    CustomInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({
     counter:counterReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
