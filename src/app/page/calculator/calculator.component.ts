import { Component } from '@angular/core';
import { CalcModel } from './component/generic-calculation/CalcModel';
import { CounterService } from './component/generic-calculation/service/counter.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  public in1: number = 0;
  public in2: number = 0;
  public value: number = 0;
  public operation: string = '';

  /*public inout1: number = 0;
  public inout2: number = 0;
  public inOperation: string = '';*/
  public calcModel: CalcModel = new CalcModel();

  constructor(public counterService: CounterService) {

  }

  public setValues(): void {
    this.calcModel = new CalcModel();
    this.calcModel.operand1 = this.in1;
    this.calcModel.operand2 = this.in2;
    this.calcModel.operation = this.operation;
  }
}
