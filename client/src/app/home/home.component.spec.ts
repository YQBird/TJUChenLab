import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { PictureComponent } from './picture/picture.component';
import { DescriptionListComponent } from './description-list/description-list.component';
import { DescriptionComponent } from './description-list/description/description.component';

describe('HomeComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent, PictureComponent, DescriptionListComponent, DescriptionComponent ]
    })
    .compileComponents();
  }));

  it('should create the home component', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const home = fixture.debugElement.componentInstance;
    expect(home).toBeTruthy();
  });

  it('should create the picture component', () => {
    const fixture = TestBed.createComponent(PictureComponent);
    const picture = fixture.debugElement.componentInstance;
    expect(picture).toBeTruthy();
  });

  it('should create the description-list component', async(() => {
    const fixture = TestBed.createComponent(DescriptionListComponent);
    const description_list = fixture.debugElement.componentInstance;
    expect(description_list).toBeTruthy();
  }));
});
