import { Component } from '@angular/core';
import { HelperService, Helper } from './services/helper.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  helpers: Helper[] = [];
  selectedHelperId: string | null = null;
  addMode = false;

  constructor(private helperService: HelperService) {
    this.loadHelpers();
  }

  loadHelpers() {
    this.helperService.getHelpers().subscribe(helpers => this.helpers = helpers);
  }

  onSelectHelper(id: string) {
    this.selectedHelperId = id;
    this.addMode = false;
  }

  onAddHelper() {
    this.selectedHelperId = null;
    this.addMode = true;
  }

  onHelperAdded() {
    this.addMode = false;
    this.loadHelpers();
  }

  get selectedHelper(): Helper | null {
    if (this.selectedHelperId == null) return null;
    return this.helpers.find(h => h._id === this.selectedHelperId) || null;
  }
} 