import { TestBed } from '@angular/core/testing';

import { ThingsToDoService } from './things-to-do.service';

describe('ThingsToDoService', () => {
  let service: ThingsToDoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThingsToDoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
