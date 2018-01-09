import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { PictureComponent } from './home/picture/picture.component';
import { DescriptionListComponent } from './home/description-list/description-list.component';
import { DescriptionComponent } from './home/description-list/description/description.component';
import { ResearchComponent } from './research/research.component';
import { PeopleComponent } from './people/people.component';
import { PublicationsComponent } from './publications/publications.component';
import { NewsComponent } from './news/news.component';
import { FacultyComponent } from './people/faculty/faculty.component';
import { GraduateStudentComponent } from './people/graduate-student/graduate-student.component';
import { AlumniComponent } from './people/alumni/alumni.component';
import { PhotosComponent } from './people/photos/photos.component';
import { HighlightsComponent } from './publications/highlights/highlights.component';
import { PublicationListComponent } from './publications/publication-list/publication-list.component';

export const AppRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'research', component: ResearchComponent },
    { path: 'people', 
      component: PeopleComponent, 
      children: [
        { path: 'faculty', component: FacultyComponent },
        { path: 'graduate-student', component: GraduateStudentComponent },
        { path: 'alumni', component: AlumniComponent },
        { path: 'photos', component: PhotosComponent }
    ]},
    { path: 'publications', component: PublicationsComponent, children: [
        { path: 'highlights', component: HighlightsComponent },
        { path: 'publication-list', component: PublicationListComponent}
    ]},
    { path: 'news', component: NewsComponent}
]

@NgModule({
    imports: [
        RouterModule.forRoot(AppRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutesModule {

}