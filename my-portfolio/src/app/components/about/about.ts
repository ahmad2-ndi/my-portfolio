import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class AboutComponent implements OnInit {
  stats = [
    { label: 'Years Experience', value: '5+' },
    { label: 'Projects Completed', value: '40+' },
    { label: 'Satisfied Clients', value: '30+' },
    { label: 'Awards Won', value: '12' }
  ];

  ngOnInit(): void {}
}
