import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../models/employee.model';
import {EmployeeCardComponent} from "../empolyee-card/empolyee-card.component";

@Component({
  selector: 'app-vacation-requests',
  templateUrl: './vacation-requests.component.html',
  styleUrl: './vacation-requests.component.css',
  imports: [
    EmployeeCardComponent
  ],
  standalone: true
})
export class VacationRequestsComponent implements OnInit {
  employees: Employee[] = [];
  filteredEmployees: Employee[] = [];
  paginatedEmployees: Employee[] = [];
  searchTerm: string = '';
  currentPage: number = 1;
  itemsPerPage: number = 15;

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe((data) => {
      this.employees = data;
      this.filteredEmployees = data;
      this.updatePaginatedEmployees();
    });
  }

  ngOnChanges(): void {
    this.applyFilter();
  }

  applyFilter(): void {
    if (this.searchTerm) {
      const lowerSearch = this.searchTerm.toLowerCase();
      this.filteredEmployees = this.employees.filter(
        (employee) =>
          employee.name.toLowerCase().includes(lowerSearch) ||
          employee.duration.toLowerCase().includes(lowerSearch) ||
          employee.salary.toString().includes(lowerSearch)
      );
    } else {
      this.filteredEmployees = this.employees;
    }
    this.currentPage = 1;
    this.updatePaginatedEmployees();
  }

  updatePaginatedEmployees(): void {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    this.paginatedEmployees = this.filteredEmployees.slice(start, end);
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.updatePaginatedEmployees();
  }

  onApprove(employee: Employee): void {
    // Handle approve action
    console.log('Approved:', employee);
  }

  onDecline(employee: Employee): void {
    // Handle decline action
    console.log('Declined:', employee);
  }

  ngDoCheck(): void {
    this.applyFilter();
  }
}
