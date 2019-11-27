import { TestBed } from '@angular/core/testing';

import { ViewPortalService } from './view-portal.service';

describe('ViewPortalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ViewPortalService = TestBed.get(ViewPortalService);
    expect(service).toBeTruthy();
  });
});
