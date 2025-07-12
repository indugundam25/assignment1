// src/app/components/helper-list/helper-list.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-helper-list',
  templateUrl: './helper-list.component.html',
  styleUrls: ['./helper-list.component.scss']
})
export class HelperListComponent {
  helpers = [
    { name: 'aasdfiroz', role: 'Nurse', households: 0 },
    { name: 'hi', role: 'Driver', households: 0 },
    { name: 'IDs', role: 'Newspaper', households: 0 },
    { name: 'jim jam', role: 'Laundry', households: 0 },
    { name: 'my helper', role: 'Maid', households: 0 },
    { name: 'permits', role: 'Plumber', households: 0 },
    { name: 'sai', role: 'Nurse', households: 0 }
  ];
}