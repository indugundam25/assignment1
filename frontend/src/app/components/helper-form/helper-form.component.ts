// src/app/components/helper-form/helper-form.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-helper-form',
  templateUrl: './helper-form.component.html',
  styleUrls: ['./helper-form.component.scss']
})
export class HelperFormComponent {
  helper = { name: '', role: 'Nurse', employeeId: '', mobileNo: '' };
  roles = ['Nurse', 'Driver', 'Maid', 'Plumber', 'Laundry', 'Newspaper'];
}