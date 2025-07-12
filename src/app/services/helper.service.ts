import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Helper {
  name: string;
  role: string;
  employeeId?: string;
  mobileNo?: string;
}

@Injectable({ providedIn: 'root' })
export class HelperService {
  private helpersSubject = new BehaviorSubject<Helper[]>([]);
  helpers$ = this.helpersSubject.asObservable();

  addHelper(helper: Helper) {
    const current = this.helpersSubject.value;
    this.helpersSubject.next([...current, helper]);
  }
} 