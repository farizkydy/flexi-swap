import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailComponent } from './detail.component';
import { GetPeopleByIdUsecase } from '../../../@core/usecase/people/get-people-id.usecase';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { GetPeopleList } from '../../../@core/domain/people.entity';
import { CommonModule } from '@angular/common';
import { ParamMap, convertToParamMap } from '@angular/router';

describe('DetailComponent', () => {
  let component: DetailComponent;
  let fixture: ComponentFixture<DetailComponent>;
  let mockGetPeopleByIdUsecase: jasmine.SpyObj<GetPeopleByIdUsecase>;

  const mockCharacter: GetPeopleList = {
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
  };

  beforeEach(async () => {
    mockGetPeopleByIdUsecase = jasmine.createSpyObj('GetPeopleByIdUsecase', ['execute']);
    mockGetPeopleByIdUsecase.execute.and.returnValue(of(mockCharacter));

    await TestBed.configureTestingModule({
      imports: [CommonModule, DetailComponent],
      providers: [
        { provide: GetPeopleByIdUsecase, useValue: mockGetPeopleByIdUsecase },
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: of(convertToParamMap({ peopleId: '1' }))
          }
        }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set peopleId from route parameters on init', () => {
    expect(component.peopleId).toBe('1');
  });

  it('should call GetPeopleByIdUsecase with the correct peopleId', () => {
    expect(mockGetPeopleByIdUsecase.execute).toHaveBeenCalledWith('1');
  });

  it('should set character with the result from GetPeopleByIdUsecase', () => {
    expect(component.character).toEqual(mockCharacter);
  });
});
