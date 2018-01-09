import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PublicationsComponent } from './publications.component';
import { HighlightsComponent } from './highlights/highlights.component';
import { PublicationListComponent } from './publication-list/publication-list.component';

@NgModule({
    imports: [RouterModule],
    declarations: [ 
        PublicationsComponent,
        HighlightsComponent,
        PublicationListComponent
    ],
    exports: [
        PublicationsComponent,
        HighlightsComponent,
        PublicationListComponent
    ],
    providers: []
})
export class PublicationsModule {}