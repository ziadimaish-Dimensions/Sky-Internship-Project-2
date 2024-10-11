import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class PaginationComponent implements OnChanges {
  @Input() totalItems: number = 0;
  @Input() itemsPerPage: number = 10;
  @Output() pageChange = new EventEmitter<number>();

  currentPage: number = 1;
  totalPages: number = 1;
  totalPagesArray: number[] = [];

  ngOnChanges(): void {
    this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
    this.totalPagesArray = Array(this.totalPages)
      .fill(0)
      .map((x, i) => i + 1);
    if (this.currentPage > this.totalPages) {
      this.currentPage = this.totalPages;
      this.emitPageChange();
    }
  }

  changePage(page: number): void {
    if (page < 1 || page > this.totalPages) return;
    this.currentPage = page;
    this.emitPageChange();
  }

  emitPageChange(): void {
    this.pageChange.emit(this.currentPage);
  }
}
