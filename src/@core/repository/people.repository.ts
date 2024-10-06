import { Observable } from 'rxjs';
import { GetPeopleListResponse } from '../domain/people.entity';

export abstract class PeopleRepository {
  abstract GetPeopleList(url: string): Observable<GetPeopleListResponse>;
}
