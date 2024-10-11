import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HighlightPipe } from './pipes/highlight.pipe';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { ImageSliderComponent } from './components/image-slider/image-slider.component';
import { VacationRequestsComponent } from './components/vacation-requests/vacation-requests.component';
import { FooterComponent } from './components/footer/footer.component';
import { EmployeeCardComponent } from "./components/employee-card/employee-card.component";
import {ProfileVacationComponent} from "./components/profile-vacation/profile-vacation.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    EmployeeCardComponent,
    HighlightPipe,
    NavbarComponent,
    HeaderComponent,
    ImageSliderComponent,
    VacationRequestsComponent,
    FooterComponent,
    ProfileVacationComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  currentUser = {
    name: 'Ziad Imaish',
  };

  handleNewRequest(): void {
    console.log('New Request Clicked');
  }
}
