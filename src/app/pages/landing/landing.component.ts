import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { GetPeopleListUsecase } from '../../../@core/usecase/people/get-people.usecase';
import { TableComponent } from '../../components/table/table.component';
import { GetPeopleList, GetPeopleListResponse } from '../../../@core/domain/people.entity';
import { API_URL } from '../../../data/api-url';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, TableComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent implements OnInit {
  peopleList: GetPeopleList[] = [];
  nextPageUrl: string | null = null;
  prevPageUrl: string | null = null;
  
  constructor(private getPeopleListUsecase: GetPeopleListUsecase) {

  }

  ngOnInit(): void {
    this.fetchPeople(`${API_URL}people`)
  }
  fetchPeople(url: string): void {
    this.getPeopleListUsecase.execute(url).subscribe((response: GetPeopleListResponse) => {
      this.peopleList = response.results;
      this.nextPageUrl = response.next;
      this.prevPageUrl = response.previous;
    });
  }

  goToPage(url: string | null): void {
    if (url) {
      this.fetchPeople(url);
    }
  }
  
}
