import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { UsersModule } from './users/users.module';

// Rutas 
import { AppRoutingModule } from './app-routing.module';

// Http 
import { HttpClientModule } from '@angular/common/http';

// Ngrx 
import { appReducers } from './store/app.reducers';
import { StoreModule } from '@ngrx/store';
import { environment } from '../environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { EffectsModule } from '@ngrx/effects';
import { EffectsArray } from './store/effects/index';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    UsersModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot( appReducers ),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
    EffectsModule.forRoot( EffectsArray )
  ], 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
