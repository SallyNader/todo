import { TestBed, inject } from '@angular/core/testing';

import { GetTaskService } from './get-task.service';

describe('GetTaskService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetTaskService]
    });
  });

  it('should be created', inject([GetTaskService], (service: GetTaskService) => {
    expect(service).toBeTruthy();
  }));
});
