import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetPeopleList } from '../../domain/people.entity';
import { PeopleRepository } from '../../repository/people.repository';
import { UseCase } from '../usecase';

@Injectable({
  providedIn: 'root'
})
export class GetPeopleByIdUsecase implements UseCase<string, GetPeopleList> {
  constructor(private peopleRepository: PeopleRepository) { }

  execute(id: string): Observable<GetPeopleList> {
    return this.peopleRepository.GetPeopleById(id);
  }
}
