import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeslaConfigStep2Component } from './tesla-config-step-2.component';

describe('TeslaConfigStep2Component', () => {
  let component: TeslaConfigStep2Component;
  let fixture: ComponentFixture<TeslaConfigStep2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeslaConfigStep2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeslaConfigStep2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
