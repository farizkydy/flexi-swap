import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TableComponent } from './table.component';
import { GetPeopleList } from '../../../@core/domain/people.entity';
import { Router } from '@angular/router';

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, TableComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should render data correctly', () => {
    const mockData: GetPeopleList[] = [
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
    ];
    component.data = mockData;
    fixture.detectChanges();

    const tableRows = fixture.debugElement.nativeElement.querySelectorAll('tr');
    expect(tableRows.length).toBe(2);
    expect(tableRows[1].textContent).toContain('Luke Skywalker');
    expect(tableRows[1].textContent).toContain('Luke Skywalker17277male19BBY');
  });

  it('should not call goToDetail if URL is empty or invalid', () => {
    const spy = spyOn(component, 'goToDetail').and.callThrough()
    component.goToDetail('url');
    expect(spy).toHaveBeenCalled();
  });
});