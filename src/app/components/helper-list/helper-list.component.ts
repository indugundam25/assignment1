import { Component, Input } from '@angular/core';
import { Helper } from '../../services/helper.service';

@Component({
  selector: 'app-helper-list',
  templateUrl: './helper-list.component.html',
  styleUrls: ['./helper-list.component.scss']
})
export class HelperListComponent {
  @Input() helpers: Helper[] = [];
} 