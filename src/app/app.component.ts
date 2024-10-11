// src/app/app.component.ts
import { Component } from '@angular/core';
import { Employee } from './models/employee.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true
})
export class AppComponent {
  currentUser: Employee = {
    id: 0,
    name: 'Ziad Imaish',
    submittedOn: new Date(),
    duration: '',
    salary: 0,
    image: 'https://via.placeholder.com/80',
  };

  handleNewRequest(): void {
    // Handle new request action, e.g., navigate to a form or open a modal
    console.log('New Request Clicked');
  }
}
