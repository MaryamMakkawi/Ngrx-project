import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { ArithmeticMethodModule } from './components/arithmetic-method/arithmetic-method.module';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './components/arithmetic-method/store/counter/counter.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ArithmeticMethodModule,
    SharedModule,
    StoreModule.forRoot({counter:counterReducer}),
    StoreDevtoolsModule.instrument({maxAge:25,logOnly:!isDevMode()})
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
