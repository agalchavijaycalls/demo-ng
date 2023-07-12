import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-generic-calculation',
  templateUrl: './generic-calculation.component.html',
  styleUrls: ['./generic-calculation.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GenericCalculationComponent implements OnChanges {
  @Input()
  public number1: number = 0;
  @Input()
  public number2: number = 0;
  @Input()
  public operation: string = '+';
  // @Input()
  // public operation1: string = '-';

  @Output()
  public onResult: EventEmitter<number> = new EventEmitter<number>();

  ngOnChanges(changes: SimpleChanges): void {
    let in1: number = this.number1;
    let in2: number = this.number2;
    let operation: string = this.operation;
    let result: number = 0;

    if (changes['number1']) {
      in1 = changes['number1'].currentValue;
    }
    if (changes['number2']) {
      in2 = changes['number2'].currentValue;
    }
    if (changes['operation']) {
      operation = changes['operation'].currentValue;
    }

    if (operation === '+') {
      result = in1 + in2;
    }
    if (operation === '-') {
      result = in1 - in2;
    }
    if (operation === '*') {
      result = in1 * in2;
    }
    if (operation === '/') {
      result = in1 / in2;
    }

    this.onResult.emit(result);
  }
}
