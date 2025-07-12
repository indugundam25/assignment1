// src/app/components/shared/input-field/input-field.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-field',
  template: `<mat-form-field appearance="fill"><input matInput [placeholder]="placeholder" [value]="value" (input)="onInput($event)"></mat-form-field>`,
  styles: [':host { display: block; }']
})
export class InputFieldComponent {
  @Input() placeholder: string = '';
  @Input() value: string = '';
  @Input() onInput: (event: Event) => void = () => {};
}