import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MdButtonModule, MdCheckboxModule } from '@angular/material';
import { Routes, RouterModule } from '@angular/router';

// import other modules
import { AppRoutesModule } from './app-routes.module';

// import first level components
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ResearchComponent } from './research/research.component';
import { PeopleComponent } from './people/people.component';
import { PublicationsComponent } from './publications/publications.component';
import { NewsComponent } from './news/news.component';

// import second level components
import { PictureComponent } from './home/picture/picture.component';
import { DescriptionListComponent } from './home/description-list/description-list.component';
import { DescriptionComponent } from './home/description-list/description/description.component';
import { FacultyComponent } from './people/faculty/faculty.component';
import { GraduateStudentComponent } from './people/graduate-student/graduate-student.component';
import { AlumniComponent } from './people/alumni/alumni.component';
import { PhotosComponent } from './people/photos/photos.component';
import { HighlightsComponent } from './publications/highlights/highlights.component';
import { PublicationListComponent } from './publications/publication-list/publication-list.component';

// import Directives
import { AppHeadDropdown } from './shared/header/appHeadDropdown.directive';

// const appRoutes: Routes = [
//   { path: 'home', component: HomeComponent },
//   { path: 'research', component: ResearchComponent},
//   { path: 'people', component: PeopleComponent},
//   { path: 'publications', component: PublicationsComponent},
//   { path: 'news', component: NewsComponent}
//   // { path: 'admin', component: ResearchComponent}
// ];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PictureComponent,
    DescriptionListComponent,
    DescriptionComponent,
    ResearchComponent,
    PeopleComponent,
    PublicationsComponent,
    NewsComponent,
    FacultyComponent,
    GraduateStudentComponent,
    AlumniComponent,
    PhotosComponent,
    HighlightsComponent,
    PublicationListComponent,
    AppHeadDropdown
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdCheckboxModule,
    AppRoutesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
