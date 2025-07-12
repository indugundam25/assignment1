// src/app/components/shared/button/button.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `<button mat-raised-button [color]="color" (click)="onClick()">{{ label }}</button>`,
  styles: [':host { display: block; }']
})
export class ButtonComponent {
  @Input() label: string = 'Button';
  @Input() color: string = 'primary';
  @Input() onClick: () => void = () => {};
}