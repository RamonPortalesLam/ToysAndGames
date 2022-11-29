import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { ToysService } from './toys.service';

describe('ToysService', () => {
  let service: ToysService;
  let http: HttpClient;

  beforeEach(() => {
    service = new ToysService(http);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
