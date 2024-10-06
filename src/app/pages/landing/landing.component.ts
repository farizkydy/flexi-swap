import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { GetPeopleListUsecase } from '../../../@core/usecase/people/get-people.usecase';
import { TableComponent } from '../../components/table/table.component';
import { GetPeopleList, GetPeopleListResponse } from '../../../@core/domain/people.entity';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, TableComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent implements OnInit {
  peopleList: GetPeopleList[] = [];
  
  constructor(private getPeopleListUsecase: GetPeopleListUsecase) {

  }

  ngOnInit(): void {
    this.getPeopleListUsecase.execute().subscribe((res: GetPeopleListResponse) => {
      this.peopleList = res.results;
    })
  }
}
