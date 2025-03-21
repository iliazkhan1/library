import { TestBed } from '@angular/core/testing';

import { IliazService } from './iliaz.service';

describe('IliazService', () => {
  let service: IliazService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IliazService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
