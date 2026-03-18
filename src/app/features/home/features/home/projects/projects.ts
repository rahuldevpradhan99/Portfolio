import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.html',
  standalone: true,
  imports: [CommonModule], // ✅ THIS FIXES IT
})
export class ProjectsComponent {
   projects = [
    {
      name: 'Instagram Automation Tool',
      tech: 'Angular, Node, Redis',
      desc: 'Automation tool for DM and engagement'
    },
    {
      name: 'Task Management App',
      tech: 'Angular, Express',
      desc: 'Full CRUD task system'
    }
  ];
}