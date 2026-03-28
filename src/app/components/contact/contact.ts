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
    { icon: 'email', label: 'Email', value: 'engr.ahmadashraf01@gmail.com' },
    { icon: 'phone', label: 'Phone', value: '03390090543' },
    { icon: 'location', label: 'Location', value: 'Pakistan' }
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
