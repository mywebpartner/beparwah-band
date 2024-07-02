import { Component } from '@angular/core';

@Component({
  selector: 'app-live-forms',
  templateUrl: './live-forms.component.html',
  styleUrls: ['./live-forms.component.css']
})
export class LiveFormsComponent {

  constructor() { }

  submitForm() {
    // Accessing form inputs using template references
    const songName = (document.getElementById('songName') as HTMLInputElement).value;
    const dedicatedTo = (document.getElementById('dedicatedTo') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const message = (document.getElementById('message') as HTMLTextAreaElement).value;

    // Example log (you can replace with your actual logic)
    console.log('Form submitted!');
    console.log('Song Name:', songName);
    console.log('Dedicated To:', dedicatedTo);
    console.log('Email:', email);
    console.log('Message:', message);

    // Clearing form inputs (optional)
    (document.getElementById('songName') as HTMLInputElement).value = '';
    (document.getElementById('dedicatedTo') as HTMLInputElement).value = '';
    (document.getElementById('email') as HTMLInputElement).value = '';
    (document.getElementById('message') as HTMLTextAreaElement).value = '';

    // Preventing default form submission
    return false;
  }
}
