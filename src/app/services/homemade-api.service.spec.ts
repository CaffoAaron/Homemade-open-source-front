import { TestBed } from '@angular/core/testing';


import { HomemadeApiService } from './homemade-api.service';

describe('HomemadeApiService', () => {
  let service: HomemadeApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomemadeApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
