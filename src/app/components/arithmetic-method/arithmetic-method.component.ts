import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-arithmetic-method',
  templateUrl: './arithmetic-method.component.html',
  styleUrls: ['./arithmetic-method.component.scss'],
})
export class ArithmeticMethodComponent implements OnInit {
  arithmeticMethod!: FormGroup;
  resultValue: number = 0;
  constructor(private _fb: FormBuilder) {}
  ngOnInit() {
    this.arithmeticMethod = this._fb.group({
      number: [0, [Validators.required, Validators.min(0)]],
      method: ['reset', Validators.required],
    });
  }

  result() {
    console.log(this.arithmeticMethod.value);
  }
}
