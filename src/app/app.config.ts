import { ApplicationConfig, Provider, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { PeopleRepository } from '../@core/repository/people.repository';
import { PeopleAdapter } from '../data/repository/people/people.adapter';

const DATA_SERVICE: Provider[] = [
  { provide: PeopleRepository, useClass: PeopleAdapter}
]

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideHttpClient(), DATA_SERVICE]
};
