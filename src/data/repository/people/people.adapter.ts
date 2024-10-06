import { Injectable } from "@angular/core";
import { PeopleRepository } from "../../../@core/repository/people.repository";
import { Observable } from "rxjs";
import { GetPeopleList, GetPeopleListResponse } from "../../../@core/domain/people.entity";
import { HttpClient } from "@angular/common/http";
import { API_URL } from "../../api-url";

@Injectable({
  providedIn: 'root',
})

export class PeopleAdapter extends PeopleRepository {
  constructor(private httpService: HttpClient) {
    super();
  }

  GetPeopleList(url: string): Observable<GetPeopleListResponse> {
    return this.httpService.get<GetPeopleListResponse>(url);
  }

  GetPeopleById(id: string): Observable<GetPeopleList> {
    return this.httpService.get<GetPeopleList>(`${API_URL}people/${id}`)
  }
}