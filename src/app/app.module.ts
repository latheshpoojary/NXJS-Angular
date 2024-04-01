import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';

import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { appReducer } from './store/app.state';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({ logOnly: !isDevMode() })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
