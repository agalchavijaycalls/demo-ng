import { Component } from '@angular/core';

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

}
