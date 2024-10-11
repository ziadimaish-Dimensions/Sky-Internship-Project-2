import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Employee } from '../models/employee.model';
import employeesData from '../../assets/employees.json';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor() {}

  getEmployees(): Observable<Employee[]> {
    return of(employeesData as Employee[]);
  }
}
