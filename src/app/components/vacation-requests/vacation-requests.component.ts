import { Component, OnInit, DoCheck } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../models/employee.model';
import { CommonModule } from '@angular/common';
import { HighlightPipe } from '../../pipes/highlight.pipe';
import { PaginationComponent } from '../pagination/pagination.component';
import { FormsModule } from '@angular/forms';
import { EmployeeCardComponent } from '../employee-card/employee-card.component';
@Component({
  selector: 'app-vacation-requests',
  templateUrl: './vacation-requests.component.html',
  styleUrls: ['./vacation-requests.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    EmployeeCardComponent,
    HighlightPipe,
    PaginationComponent,
    FormsModule,
  ], // Import necessary modules and components
})
export class VacationRequestsComponent implements OnInit, DoCheck {
  employees: Employee[] = [];
  filteredEmployees: Employee[] = [];
  paginatedEmployees: Employee[] = [];
  searchTerm: string = '';
  currentPage: number = 1;
  itemsPerPage: number = 15;
  selectedEmployees: Employee[] = [];
  allSelected: boolean = false;

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe((data) => {
      this.employees = data;
      this.filteredEmployees = data;
      this.updatePaginatedEmployees();
    });
  }

  ngDoCheck(): void {
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

  toggleSelectAll(event: Event): void {
    const isChecked = (event.target as HTMLInputElement).checked;
    this.allSelected = isChecked;
    if (isChecked) {
      this.selectedEmployees = [...this.filteredEmployees];
    } else {
      this.selectedEmployees = [];
    }
  }

  onSelectionChange(employee: Employee, isSelected: boolean): void {
    if (isSelected) {
      this.selectedEmployees.push(employee);
    } else {
      this.selectedEmployees = this.selectedEmployees.filter(
        (e) => e.id !== employee.id
      );
    }
    this.allSelected =
      this.selectedEmployees.length === this.filteredEmployees.length;
  }
}
