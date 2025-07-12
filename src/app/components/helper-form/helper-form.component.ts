import { Component } from '@angular/core';
import { HelperService } from '../../services/helper.service';

@Component({
  selector: 'app-helper-form',
  templateUrl: './helper-form.component.html',
  styleUrls: ['./helper-form.component.scss']
})
export class HelperFormComponent {
  name = '';
  role = '';
  employeeId = '';
  mobileNo = '';

  constructor(private helperService: HelperService) {}

  onSubmit() {
    if (!this.name.trim() || !this.role.trim()) return;
    this.helperService.addHelper({
      name: this.name,
      role: this.role,
      employeeId: this.employeeId,
      mobileNo: this.mobileNo
    });
    this.name = this.role = this.employeeId = this.mobileNo = '';
  }
} 