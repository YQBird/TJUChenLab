import { NgModule } from '@angular/core';

import { HeaderComponent } from './header.component';
import { AppHeadDropdown } from './appHeadDropdown.directive';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutesModule } from 'app/app-routes.module';

/**
 * The header module contains customized directive, therefore BrowserModule is needed
 */
@NgModule({
    imports: [ 
        AppRoutesModule,
        BrowserModule
    ],
    declarations: [
        HeaderComponent,
        AppHeadDropdown
    ],
    exports: [
        HeaderComponent,
        AppHeadDropdown
    ],
    providers: []
})
export class HeaderModule {}