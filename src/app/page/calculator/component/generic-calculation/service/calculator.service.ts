import { Injectable } from '@angular/core';
import { CalcModel } from '../CalcModel';

@Injectable()
export class CalculatorService {

  constructor() {
  }

  public process(model?: CalcModel): number {
    let result = 0;
    if (model?.operation === '+') {
      result = model.operand1 + model.operand2;
    } else if (model?.operation === '-') {
      result = model.operand1 - model.operand2;
    } else if (model?.operation === '*') {
      result = model.operand1 * model.operand2;
    } else if (model?.operation === '/') {
      result = model.operand1 / model.operand2;
    }
    return result;
  }
}
