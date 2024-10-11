import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Employee } from '../../models/employee.model';

@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.css'],
  standalone: true
})
export class EmployeeCardComponent {
  @Input() employee!: Employee;
  @Input() searchTerm: string = '';

  @Output() approve = new EventEmitter<Employee>();
  @Output() decline = new EventEmitter<Employee>();

  getHighlightedText(text: string, search: string): string {
    if (!search) return text;
    const regex = new RegExp(`(${search})`, 'gi');
    return text.replace(regex, '<mark>$1</mark>');
  }
}
