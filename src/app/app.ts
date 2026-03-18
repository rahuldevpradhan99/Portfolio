import { Component } from '@angular/core';

import { HeroComponent } from '../app/features/home/features/home/hero/hero';
import { Journey } from '../app/features/home/features/home/journey/journey';
import { ProjectsComponent } from '../app/features/home/features/home/projects/projects';
import { Contact } from '../app/features/home/features/home/contact/contact';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeroComponent,
    Journey,
    ProjectsComponent,
    Contact
  ],
  templateUrl: './app.html',
})
export class AppComponent {}