import { TestBed } from '@angular/core/testing';

import { GustosService } from './gustos.service';

describe('GustosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GustosService = TestBed.get(GustosService);
    expect(service).toBeTruthy();
  });
});
