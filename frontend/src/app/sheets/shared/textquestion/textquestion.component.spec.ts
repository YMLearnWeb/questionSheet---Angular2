import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextquestionComponent } from './textquestion.component';

describe('TextquestionComponent', () => {
  let component: TextquestionComponent;
  let fixture: ComponentFixture<TextquestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextquestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextquestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
