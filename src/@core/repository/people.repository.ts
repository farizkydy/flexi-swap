import { Observable } from 'rxjs';
import { GetPeopleList, GetPeopleListResponse } from '../domain/people.entity';

export abstract class PeopleRepository {
  abstract GetPeopleList(url: string): Observable<GetPeopleListResponse>;
  abstract GetPeopleById(id: string): Observable<GetPeopleList>
}
