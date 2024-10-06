import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { GetPeopleList } from '../../../@core/domain/people.entity';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
  @Input() data: GetPeopleList[] = [];
}
