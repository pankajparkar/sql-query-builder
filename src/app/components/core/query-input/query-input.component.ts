import { Component, ElementRef, Input, OnDestroy, Optional, Self } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, FormControl, NgControl, ReactiveFormsModule } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';

import { Textcomplete } from "@textcomplete/core";
import { TextareaEditor } from "@textcomplete/textarea";

@Component({
  selector: 'sqb-query-input',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './query-input.component.html',
  styleUrls: ['./query-input.component.scss']
})
export class QueryInputComponent implements ControlValueAccessor, OnDestroy {
  @Input() label!: string;
  @Input() placeholder!: string;

  control!: FormControl;
  destroyed = new Subject<void>();

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
    const editor = new TextareaEditor(this.el.nativeElement)
    const textcomplete = new Textcomplete(editor, []);
  }

  ngOnDestroy() {
    this.destroyed.next();
    this.destroyed.complete();
  }
}
