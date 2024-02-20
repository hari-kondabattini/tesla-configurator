import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeslaConfigStep1Component } from './tesla-config-step-1.component';

describe('TeslaConfigStep1Component', () => {
  let component: TeslaConfigStep1Component;
  let fixture: ComponentFixture<TeslaConfigStep1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeslaConfigStep1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeslaConfigStep1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
