import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GetPeopleListUsecase } from '../@core/usecase/people/get-people.usecase';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'flexi-swap';

  constructor(private getPeopleListUsecase: GetPeopleListUsecase) {

  }

  ngOnInit(): void {
    this.getPeopleListUsecase.execute().subscribe((res) => {
      console.log(res);
    })
  }
}
