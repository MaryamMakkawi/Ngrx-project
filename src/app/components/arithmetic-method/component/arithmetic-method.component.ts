import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { actionMethod } from 'src/app/components/arithmetic-method/store/counter/counter.action';
import { getCounter } from 'src/app/components/arithmetic-method/store/counter/counter.selector';
import { ICounterState } from 'src/app/components/arithmetic-method/store/counter/model.interface';

@Component({
  selector: 'app-arithmetic-method',
  templateUrl: './arithmetic-method.component.html',
  styleUrls: ['./arithmetic-method.component.scss'],
})
export class ArithmeticMethodComponent implements OnInit {
  arithmeticMethod!: FormGroup;
  resultValue$!: Observable<number>;

  constructor(
    private _fb: FormBuilder,
    private _store: Store<{ counter: ICounterState }>
  ) {}

  ngOnInit() {
    this.initForm();
    this.resultValue$ = this._store.select(getCounter);
  }

  initForm() {
    this.arithmeticMethod = this._fb.group({
      number: [0, [Validators.required, Validators.min(0)]],
      method: ['reset', Validators.required],
    });
  }

  result() {
    if (this.arithmeticMethod.value.method === 'reset') {
      this.arithmeticMethod.get('number')?.setValue(0);
    }
    this._store.dispatch(
      actionMethod({
        value: +this.arithmeticMethod.value.number,
        method: this.arithmeticMethod.value.method,
      })
    );
  }
}
