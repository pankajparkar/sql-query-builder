import { TestBed } from '@angular/core/testing';

import { QueryHelperService } from './query-helper.service';

describe('QueryHelperService', () => {
  let service: QueryHelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QueryHelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
