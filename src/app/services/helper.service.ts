import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Helper {
  _id?: string;
  name: string;
  role: string;
  organization: string;
  languages: string[];
  gender: string;
  phone: string;
  email: string;
  photoUrl?: string;
}

@Injectable({ providedIn: 'root' })
export class HelperService {
  private apiUrl = 'http://localhost:3000/api/helpers';

  constructor(private http: HttpClient) {}

  getHelpers(): Observable<Helper[]> {
    return this.http.get<Helper[]>(this.apiUrl);
  }

  getHelperById(id: string): Observable<Helper> {
    return this.http.get<Helper>(`${this.apiUrl}/${id}`);
  }

  addHelper(helper: Helper): Observable<Helper> {
    return this.http.post<Helper>(this.apiUrl, helper);
  }
} 