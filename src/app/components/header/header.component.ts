import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: true
})
export class HeaderComponent {
  @Input() employeeName: string = 'User';
  @Output() newRequest = new EventEmitter<void>();

  onNewRequest() {
    this.newRequest.emit();
  }
}
