import { Component, ElementRef, Input, OnDestroy, Optional, Self, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, FormControl, FormsModule, NgControl, ReactiveFormsModule } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';

import { Textcomplete } from "@textcomplete/core";
import { TextareaEditor } from "@textcomplete/textarea";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInput, MatInputModule } from '@angular/material/input';
import { EMOJI_STRATEGY } from './strategy';

@Component({
  selector: 'sqb-query-input',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
  ],
  templateUrl: './query-input.component.html',
  styleUrls: ['./query-input.component.scss']
})
export class QueryInputComponent implements ControlValueAccessor, OnDestroy {
  @Input() sqlQuery!: string;

  control!: FormControl;
  destroyed = new Subject<void>();

  @ViewChild(MatInput) input!: MatInput;

  constructor(
    private el: ElementRef,
    @Optional() @Self() public ngControl: NgControl
  ) {
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
      this.control = this.ngControl.control as FormControl;
      this.control.valueChanges
        .pipe(takeUntil(this.destroyed))
        .subscribe((x) => ngControl.viewToModelUpdate(x));
    } else {
      // Fallback in case FormControl haven't been passed
      this.control = new FormControl();
    }
  }

  registerOnChange(): void { }

  registerOnTouched(): void { }

  writeValue() { }

  setDisabledState(): void { }

  ngAfterViewInit() {
    const input = this.el.nativeElement.querySelector('textarea');
    const editor = new TextareaEditor(input);
    const textcomplete = new Textcomplete(editor, [EMOJI_STRATEGY]);
  }

  ngOnDestroy() {
    this.destroyed.next();
    this.destroyed.complete();
  }
}
