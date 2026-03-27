import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class ContactComponent implements OnInit {
  contactInfo = [
    { icon: 'email', label: 'Email', value: 'hello@portfolio.com' },
    { icon: 'phone', label: 'Phone', value: '+1 (234) 567-890' },
    { icon: 'location', label: 'Location', value: 'San Francisco, CA' }
  ];

  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  ngOnInit(): void {}

  onSubmit() {
    console.log('Form submitted:', this.formData);
    alert('Thank you for your message! (Demo Only)');
    this.formData = { name: '', email: '', subject: '', message: '' };
  }
}
