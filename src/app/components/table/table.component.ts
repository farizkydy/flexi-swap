import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { GetPeopleList } from '../../../@core/domain/people.entity';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
  constructor(private router: Router) {}
  @Input() data: GetPeopleList[] = [];

  goToDetail(url: string): void {
    const id = url.split('/').filter(Boolean).pop();
    this.router.navigate(['/detail', id]);
  }
}
