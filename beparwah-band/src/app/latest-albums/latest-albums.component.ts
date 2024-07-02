import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-latest-albums',
  templateUrl: './latest-albums.component.html',
  styleUrls: ['./latest-albums.component.css']
})
export class LatestAlbumsComponent implements OnInit {
  albums = [
    { name: 'Album 1', image: 'assets/album1.jpg' },
    { name: 'Album 2', image: 'assets/album2.jpg' },
    { name: 'Album 3', image: 'assets/album3.jpg' }
  ];

  constructor() { }

  ngOnInit(): void { }
}
