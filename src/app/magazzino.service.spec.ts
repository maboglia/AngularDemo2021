import { TestBed } from '@angular/core/testing';

import { MagazzinoService } from './magazzino.service';

describe('MagazzinoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MagazzinoService = TestBed.get(MagazzinoService);
    expect(service).toBeTruthy();
  });
});
