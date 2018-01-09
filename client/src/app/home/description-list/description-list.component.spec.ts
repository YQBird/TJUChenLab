import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionListComponent } from './description-list.component';
import { DescriptionComponent } from './description/description.component';

describe('DescriptionListComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescriptionListComponent, DescriptionComponent ]
    })
    .compileComponents();
  }));

  it('should create the description-list component', async(() => {
    const fixture = TestBed.createComponent(DescriptionListComponent);
    const description_list = fixture.debugElement.componentInstance;
    expect(description_list).toBeTruthy();
  }));

  /**
   * inspired by: https://stackoverflow.com/questions/40541123/how-to-unit-test-if-an-angular-2-component-contains-another-component
   * 
   * To test if a component, when compiled, contains other components:
   *   Inject the component you're testing
   *   Inject the child components
   *   Create the parent component
   *   Detect changes
   *   Use querySelector or querySelectorAll to find the child components
   */
  it('should create the description component', () => {
    const fixture = TestBed.createComponent(DescriptionListComponent);
    fixture.detectChanges();
    const description_list = fixture.debugElement.nativeElement;
    expect(description_list.querySelectorAll('app-description').length).toBeGreaterThanOrEqual(1);
  });

  // it('should create the description component', async(() => {
  //   const fixture = TestBed.createComponent(DescriptionComponent);
  //   const description = fixture.debugElement.componentInstance;
  //   expect(description).toBeTruthy();
  // }));
});
