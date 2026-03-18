import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

// Components
import { AppComponent } from './app.component';
import { HeroComponent } from './features/home/features/home/hero/hero';
import { Journey } from './features/home/features/home/journey/journey';
import { ProjectsComponent } from './features/home/features/home/projects/projects';
import { Contact } from './features/home/features/home/contact/contact';

// Directives
import { ScrollDirective } from './shared/scroll.directive';

@NgModule({
  declarations: [
   
  ],
  imports: [
    BrowserModule,
    CommonModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
