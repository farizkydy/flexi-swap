import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetPeopleListResponse } from '../../domain/people.entity';
import { PeopleRepository } from '../../repository/people.repository';
import { UseCase } from '../usecase';

@Injectable({
  providedIn: 'root'
})
export class GetPeopleListUsecase implements UseCase<string, GetPeopleListResponse> {
  constructor(private peopleRepository: PeopleRepository) { }

  execute(url: string): Observable<GetPeopleListResponse> {
    return this.peopleRepository.GetPeopleList(url);
  }
}
