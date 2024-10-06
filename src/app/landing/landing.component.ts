import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { GetPeopleListUsecase } from '../../@core/usecase/people/get-people.usecase';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent implements OnInit {
  constructor(private getPeopleListUsecase: GetPeopleListUsecase) {

  }

  ngOnInit(): void {
    this.getPeopleListUsecase.execute().subscribe((res) => {
      console.log(res);
    })
  }
}
