import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Helper } from '../../services/helper.service';

@Component({
  selector: 'app-helper-list',
  templateUrl: './helper-list.component.html',
  styleUrls: ['./helper-list.component.scss']
})
export class HelperListComponent {
  @Input() helpers: Helper[] = [];
  @Input() selectedHelperId: string | null = null;
  @Output() selectHelper = new EventEmitter<string>();
  @Output() addHelper = new EventEmitter<void>();
} 