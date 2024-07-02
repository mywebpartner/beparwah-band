import { Component } from '@angular/core';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent {

  imagesP = [
    'assets/song1.jpg',
    'assets/song2.jpg',
    'assets/song3.jpg',
    'assets/song4.jpg'
  ];

  constructor() { }

}
