import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.html',
  standalone: true,
})
export class HeroComponent {
  scrollToProjects() {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  }
}