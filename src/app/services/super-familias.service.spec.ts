import { TestBed } from '@angular/core/testing';

import { SuperFamiliasService } from './super-familias.service';

describe('SuperFamiliasService', () => {
  let service: SuperFamiliasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuperFamiliasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
