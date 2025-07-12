import { Component } from '@angular/core';
import { HelperService, Helper } from './services/helper.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  helpers$: Observable<Helper[]>;
  constructor(private helperService: HelperService) {
    this.helpers$ = this.helperService.helpers$;
  }
} 