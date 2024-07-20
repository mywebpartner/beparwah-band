import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'live-song-f';

  form = {
    name: '',
    dedicated: '',
    email: '',
    message: ''
  };

  constructor(private http: HttpClient) {}

  validateForm(): boolean {
    const emailPattern = /^[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\.[a-z]{2,3}$/;
    return this.form.name.trim() !== '' && emailPattern.test(this.form.email);
  }

  onSubmit() {
    if (this.validateForm()) {
      this.http.post('http://localhost:4000/api/send-email', this.form).subscribe(
        response => {
          console.log('Email sent successfully', response);
          // Reset form or show success message
          this.form = { name: '', dedicated: '', email: '', message: '' };
        },
        error => {
          console.error('Error sending email', error);
          // Show error message to user
        }
      );
    } else {
      console.error('Form is invalid');
      // Show validation error message to user
    }
  }
}