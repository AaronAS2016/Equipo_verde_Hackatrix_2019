import { TestBed } from '@angular/core/testing';

import { RestriccionesService } from './restricciones.service';

describe('RestriccionesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RestriccionesService = TestBed.get(RestriccionesService);
    expect(service).toBeTruthy();
  });
});
