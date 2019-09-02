import { TestBed, async, inject } from '@angular/core/testing';

import { PasswordPageGuard } from './password-page.guard';

describe('PasswordPageGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PasswordPageGuard]
    });
  });

  it('should ...', inject([PasswordPageGuard], (guard: PasswordPageGuard) => {
    expect(guard).toBeTruthy();
  }));
});
