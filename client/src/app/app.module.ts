import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MdButtonModule, MdCheckboxModule } from '@angular/material';
import { Routes, RouterModule } from '@angular/router';

// import other modules
import { AppRoutesModule } from './app-routes.module';
import { HomeModule } from './home/home.module';
import { NewsModule } from 'app/news/news.module';
import { PeopleModule } from 'app/people/people.module';
import { PublicationsModule } from 'app/publications/publications.module';
import { ResearchModule } from 'app/research/research.module';
import { HeaderModule } from 'app/header/header.module';
import { FooterModule } from 'app/footer/footer.module';

// import first level components
import { AppComponent } from './app.component';
// import { HeaderComponent } from './header/header.component';
// import { AppHeadDropdown } from './header/appHeadDropdown.directive';


@NgModule({
  declarations: [
    AppComponent,
    // HeaderComponent,
    // AppHeadDropdown
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdCheckboxModule,
    AppRoutesModule,
    HomeModule,
    NewsModule,
    PeopleModule,
    PublicationsModule,
    ResearchModule,
    HeaderModule,
    FooterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
