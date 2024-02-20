import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeslaConfigStep3Component } from './tesla-config-step-3.component';

describe('TeslaConfigStep3Component', () => {
  let component: TeslaConfigStep3Component;
  let fixture: ComponentFixture<TeslaConfigStep3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeslaConfigStep3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeslaConfigStep3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
