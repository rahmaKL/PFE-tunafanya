import { TestBed } from '@angular/core/testing';

import { Push.NotificationService } from './push.notification.service';

describe('Push.NotificationService', () => {
  let service: Push.NotificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Push.NotificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
