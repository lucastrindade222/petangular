import { TestBed } from '@angular/core/testing';

import { AutenticarservisoService } from './autenticarserviso.service';

describe('AutenticarservisoService', () => {
  let service: AutenticarservisoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutenticarservisoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
