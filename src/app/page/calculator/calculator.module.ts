import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalculatorRoutingModule } from './calculator-routing.module';
import { CalculatorComponent } from './calculator.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { FormsModule } from '@angular/forms';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { GenericCalculationComponent } from './component/generic-calculation/generic-calculation.component';

@NgModule({
  declarations: [
    CalculatorComponent,
    GenericCalculationComponent
  ],
  imports: [
    CommonModule,
    CalculatorRoutingModule,
    FormsModule,
    NzButtonModule,
    NzInputModule,
    NzSelectModule,
    NzGridModule
  ]
})
export class CalculatorModule {
}

