import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LandingComponent } from './landing.component';
import { GetPeopleListUsecase } from '../../../@core/usecase/people/get-people.usecase';
import { of } from 'rxjs';
import { GetPeopleListResponse } from '../../../@core/domain/people.entity';
import { CommonModule } from '@angular/common';
import { TableComponent } from '../../components/table/table.component';
import { API_URL } from '../../../data/api-url';

describe('LandingComponent', () => {
  let component: LandingComponent;
  let fixture: ComponentFixture<LandingComponent>;
  let mockGetPeopleListUsecase: jasmine.SpyObj<GetPeopleListUsecase>;

  const mockPeopleListResponse: GetPeopleListResponse = {
    count: 1,
    next: 'nextPageUrl',
    previous: 'prevPageUrl',
    results: [
      {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        hair_color: 'blond',
        skin_color: 'fair',
        eye_color: 'blue',
        birth_year: '19BBY',
        gender: 'male',
        homeworld: 'https://swapi.dev/api/planets/1/',
        films: [],
        species: [],
        vehicles: [],
        starships: [],
        created: '2014-12-09T13:50:51.644000Z',
        edited: '2014-12-20T21:17:56.891000Z',
        url: 'https://swapi.dev/api/people/1/'
      }
    ]
  };

  beforeEach(async () => {
    mockGetPeopleListUsecase = jasmine.createSpyObj('GetPeopleListUsecase', ['execute']);
    mockGetPeopleListUsecase.execute.and.returnValue(of(mockPeopleListResponse));

    await TestBed.configureTestingModule({
      imports: [CommonModule, TableComponent, LandingComponent],
      declarations: [],
      providers: [
        { provide: GetPeopleListUsecase, useValue: mockGetPeopleListUsecase }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call fetchPeople and initialize the peopleList on ngOnInit', () => {
    spyOn(component, 'fetchPeople');
    component.ngOnInit();
    expect(component.fetchPeople).toHaveBeenCalledWith(`${API_URL}people`);
  });

  it('should populate peopleList and pagination URLs after calling fetchPeople', () => {
    component.fetchPeople(`${API_URL}people`);
    expect(mockGetPeopleListUsecase.execute).toHaveBeenCalledWith(`${API_URL}people`);
    expect(component.peopleList.length).toBe(1);
    expect(component.nextPageUrl).toBe('nextPageUrl');
    expect(component.prevPageUrl).toBe('prevPageUrl');
  });

  it('should navigate to the next or previous page using goToPage', () => {
    spyOn(component, 'fetchPeople');
    
    component.goToPage('nextPageUrl');
    expect(component.fetchPeople).toHaveBeenCalledWith('nextPageUrl');
  });
});
