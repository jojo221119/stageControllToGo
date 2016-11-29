/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ScriptProviderService } from './script-provider.service';

describe('ScriptProviderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ScriptProviderService]
    });
  });

  it('should ...', inject([ScriptProviderService], (service: ScriptProviderService) => {
    expect(service).toBeTruthy();
  }));
});
