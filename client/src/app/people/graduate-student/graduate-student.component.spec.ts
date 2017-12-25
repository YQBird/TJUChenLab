import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraduateStudentComponent } from './graduate-student.component';

describe('GraduateStudentComponent', () => {
  let component: GraduateStudentComponent;
  let fixture: ComponentFixture<GraduateStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraduateStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraduateStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
