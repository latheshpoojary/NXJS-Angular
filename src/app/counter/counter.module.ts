import { NgModule } from "@angular/core";
import { CounterComponent } from "./counter/counter.component";
import { CounterOutputComponent } from "./counter-output/counter-output.component";
import { CounterButtonComponent } from "./counter-button/counter-button.component";
import { CustomInputComponent } from "./custom-input/custom-input.component";
import { FormsModule } from "@angular/forms";
import {  RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";
import { StoreModule } from "@ngrx/store";
import { counterReducer } from "../state/counter.reducer";

const route: Routes = [
	{
		path:'',component:CounterComponent
	}
]

@NgModule({
	declarations: [
		CounterComponent,
    CounterOutputComponent,
    CounterButtonComponent,
    CustomInputComponent,
	],
	imports: [
		CommonModule,
		FormsModule,
		RouterModule.forChild(route),
		StoreModule.forFeature('counter',counterReducer),
	]
})

export class CounterModule{}