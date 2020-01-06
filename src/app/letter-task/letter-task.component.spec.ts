import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LetterTaskComponent } from './letter-task.component';

describe('LetterTaskComponent', () => {
  let component: LetterTaskComponent;
  let fixture: ComponentFixture<LetterTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LetterTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LetterTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
