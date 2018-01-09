import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';
import { DescriptionListComponent } from './description-list/description-list.component';
import { PictureComponent } from './picture/picture.component';
import { DescriptionComponent } from './description-list/description/description.component';

@NgModule({
    imports: [],
    declarations: [
        HomeComponent,
        DescriptionListComponent,
        PictureComponent,
        DescriptionComponent
    ],
    exports: [
        HomeComponent,
        DescriptionListComponent,
        PictureComponent,
        DescriptionComponent
    ],
    providers: []
})
export class HomeModule {
    
}