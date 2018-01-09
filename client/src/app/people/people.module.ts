import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PeopleComponent } from './people.component';
import { AlumniComponent } from './alumni/alumni.component';
import { FacultyComponent } from './faculty/faculty.component';
import { GraduateStudentComponent } from './graduate-student/graduate-student.component';
import { PhotosComponent } from './photos/photos.component';

@NgModule({
    imports: [RouterModule],
    declarations: [ 
        PeopleComponent,
        AlumniComponent,
        FacultyComponent,
        GraduateStudentComponent,
        PhotosComponent
    ],
    exports: [
        PeopleComponent,
        AlumniComponent,
        FacultyComponent,
        GraduateStudentComponent,
        PhotosComponent
    ],
    providers: []
})
export class PeopleModule {}