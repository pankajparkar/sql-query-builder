import { AfterViewInit, Component, ElementRef, Input, OnDestroy, Optional, Self, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, FormControl, FormsModule, NgControl, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
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
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: QueryInputComponent
    }
  ],
  templateUrl: './query-input.component.html',
  styleUrls: ['./query-input.component.scss']
})
export class QueryInputComponent implements ControlValueAccessor, OnDestroy, AfterViewInit {
  private readonly destroyed$ = new Subject<void>();
  control = new FormControl();
  disabled = false;

  @ViewChild(MatInput) input!: MatInput;

  onChange = (_: unknown) => { };
  onTouched = () => { };

  constructor(
    private el: ElementRef,
  ) { }

  writeValue(value: string) {
    this.control.setValue(value);
  }

  registerOnChange(onChange: any) {
    this.onChange = onChange;
  }

  registerOnTouched(onTouched: any) {
    this.onTouched = onTouched;
  }

  setDisabledState(disabled: boolean) {
    this.disabled = disabled;
  }

  ngAfterViewInit() {
    const input = this.el.nativeElement.querySelector('textarea');
    const editor = new TextareaEditor(input);
    const textcomplete = new Textcomplete(editor, [EMOJI_STRATEGY]);
    this.control.valueChanges
      .pipe(takeUntil(this.destroyed$))
      .subscribe((x) => {
        this.onChange(x);
        this.onTouched();
      });
  }

  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
