import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee.model';
import { VacationRequest } from '../models/vacation-request.model';
import { VacationHistory } from '../models/vacation-history.model';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private apiUrl = 'assets/data';

  constructor(private http: HttpClient) {}

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.apiUrl}/employees.json`);
  }

  getVacationRequests(): Observable<VacationRequest[]> {
    return this.http.get<VacationRequest[]>(`${this.apiUrl}/vacation-requests.json`);
  }

  getVacationHistory(): Observable<VacationHistory[]> {
    return this.http.get<VacationHistory[]>(`${this.apiUrl}/vacation-history.json`);
  }


}
