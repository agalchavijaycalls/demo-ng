import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges
} from '@angular/core';
import { CalcModel } from './CalcModel';
import { CalculatorService } from './service/calculator.service';
import { CounterService } from './service/counter.service';

@Component({
  selector: 'app-generic-calculation',
  templateUrl: './generic-calculation.component.html',
  styleUrls: ['./generic-calculation.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GenericCalculationComponent implements OnChanges {
  @Input()
  public model?: CalcModel;

  @Output()
  public onResult: EventEmitter<number> = new EventEmitter<number>();

  constructor(private service: CalculatorService, public countService: CounterService) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    let result: number = 0;
    let model = this.model;

    if (changes['model']) {
      model = changes['model'].currentValue;
    }
    result = this.service.process(model);

    this.onResult.emit(result);
  }
}
