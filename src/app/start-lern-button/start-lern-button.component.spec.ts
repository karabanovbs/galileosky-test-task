import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartLernButtonComponent } from './start-lern-button.component';

describe('StartLernButtonComponent', () => {
  let component: StartLernButtonComponent;
  let fixture: ComponentFixture<StartLernButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartLernButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartLernButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
