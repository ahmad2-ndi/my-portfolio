import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Neon Genesis',
      category: 'Web Design',
      image: 'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=800',
      link: '#'
    },
    {
      title: 'Glass UI Kit',
      category: 'UI/UX Design',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800',
      link: '#'
    },
    {
      title: 'Venture App',
      category: 'Mobile Application',
      image: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?auto=format&fit=crop&q=80&w=800',
      link: '#'
    },
    {
      title: 'Cyber Dashboard',
      category: 'Development',
      image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800',
      link: '#'
    }
  ];
}
