import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { ArithmeticMethodModule } from './components/arithmetic-method/arithmetic-method.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppState } from './shared/AppState/App.state';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './components/users/store/user.effects';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ArithmeticMethodModule,
    SharedModule,
    StoreModule.forRoot(AppState),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([UserEffects])
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
