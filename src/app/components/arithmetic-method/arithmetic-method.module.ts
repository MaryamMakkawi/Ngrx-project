import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { ArithmeticMethodComponent } from './arithmetic-method.component';
import { ArithmeticMethodRoutingModule } from './arithmetic-method-routing.module';

@NgModule({
  declarations: [ArithmeticMethodComponent],
  imports: [CommonModule, SharedModule,ArithmeticMethodRoutingModule],
})
export class ArithmeticMethodModule {}
