import { Component, Output, EventEmitter } from '@angular/core';
import { HelperService, Helper } from '../../services/helper.service';

@Component({
  selector: 'app-helper-form',
  templateUrl: './helper-form.component.html',
  styleUrls: ['./helper-form.component.scss']
})
export class HelperFormComponent {
  @Output() helperAdded = new EventEmitter<void>();

  name = '';
  role = '';
  organization = '';
  languages: string[] = [];
  gender = '';
  phone = '';
  email = '';
  photoUrl: string | undefined;

  serviceTypes = ['Cook', 'Maid', 'Lawyer', 'Driver', 'Nurse', 'Plumber'];
  organizations = ['ASBL', 'Spring Helpers'];
  languageOptions = ['English', 'Hindi', 'Tamil', 'Telugu', 'Bengali', 'Kannada'];

  constructor(private helperService: HelperService) {}

  onPhotoChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => this.photoUrl = e.target.result;
      reader.readAsDataURL(file);
    }
  }

  onSubmit() {
    if (!this.name.trim() || !this.role.trim() || !this.organization.trim() || !this.gender.trim() || !this.phone.trim()) return;
    const helper: Helper = {
      name: this.name,
      role: this.role,
      organization: this.organization,
      languages: this.languages,
      gender: this.gender,
      phone: this.phone,
      email: this.email,
      photoUrl: this.photoUrl
    };
    this.helperService.addHelper(helper).subscribe(() => {
      this.helperAdded.emit();
      this.name = this.role = this.organization = this.gender = this.phone = this.email = '';
      this.languages = [];
      this.photoUrl = undefined;
    });
  }
} 