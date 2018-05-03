import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { 
  NgModule,
  NO_ERRORS_SCHEMA } from '@angular/core';
  import { EffectsModule } from '@ngrx/effects';
import { MDBBootstrapModule } from 'angular-bootstrap-md'; 
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers } from './reducers/app-reducers';

import { AppRouterModule } from './app-router.module';

import { AppComponent } from './app.component';

import { WheelSetService } from './services';
import { WheelSetEffects } from './effects';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    StoreModule.forRoot( reducers ),
    StoreDevtoolsModule.instrument({ maxAge: 50 }),
    EffectsModule.forRoot( [WheelSetEffects] )
  ],
  providers: [ WheelSetService ],
  schemas: [ NO_ERRORS_SCHEMA ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
