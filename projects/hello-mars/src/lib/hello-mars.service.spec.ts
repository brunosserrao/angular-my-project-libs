import { TestBed } from '@angular/core/testing';

import { HelloMarsService } from './hello-mars.service';

describe('HelloMarsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HelloMarsService = TestBed.get(HelloMarsService);
    expect(service).toBeTruthy();
  });
});
