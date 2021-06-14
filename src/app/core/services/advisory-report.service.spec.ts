import { TestBed } from '@angular/core/testing';

import { AdvisoryReportService } from './advisory-report.service';

describe('AdvisoryReportService', () => {
  let service: AdvisoryReportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdvisoryReportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
