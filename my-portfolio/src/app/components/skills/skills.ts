import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.css'
})
export class SkillsComponent implements OnInit {
  skillCategories = [
    {
      name: 'Frontend',
      skills: [
        { name: 'Angular', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'Three.js', level: 80 },
        { name: 'GSAP', level: 75 }
      ]
    },
    {
      name: 'Design',
      skills: [
        { name: 'Figma', level: 85 },
        { name: 'Adobe XD', level: 70 },
        { name: 'Blender', level: 65 },
        { name: 'Spline', level: 75 }
      ]
    },
    {
      name: 'Backend & Tools',
      skills: [
        { name: 'Node.js', level: 70 },
        { name: 'Firebase', level: 75 },
        { name: 'Git', level: 90 },
        { name: 'Agile', level: 80 }
      ]
    }
  ];

  ngOnInit(): void {}
}
