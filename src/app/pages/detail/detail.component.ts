import { Component, OnInit } from '@angular/core';
import { GetPeopleByIdUsecase } from '../../../@core/usecase/people/get-people-id.usecase';
import { ActivatedRoute } from '@angular/router';
import { GetPeopleList } from '../../../@core/domain/people.entity';
import { CommonModule } from '@angular/common';
import { Observable, switchMap } from 'rxjs';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent implements OnInit {
  peopleId: string = "";
  character!: GetPeopleList;
  constructor(
    private getPeopleByIdUsecase: GetPeopleByIdUsecase,
    private route: ActivatedRoute
  ) {
    this.route.paramMap.subscribe((params) => {    
      if (params.get('peopleId')) {
        this.peopleId = params.get('peopleId') ?? '';
      }      
    })
  }

  ngOnInit(): void {
    this.getPeopleByIdUsecase.execute(this.peopleId).subscribe((res) => {
      this.character = res;
    })
  }
}
