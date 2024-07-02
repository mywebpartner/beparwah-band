import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  images = [
    'assets/image1.jpg',
    'assets/image2.jpg',
    'assets/image3.jpg',
    'assets/image4.jpg',
    'assets/image5.jpg',
    'assets/image6.jpg',
    'assets/image7.jpg',
    'assets/image8.jpg',
    'assets/image9.jpg',
    'assets/image10.jpg',
    'assets/image11.jpg',
    'assets/image12.jpg',
    'assets/image13.jpg',
    'assets/image14.jpg',
    'assets/image15.jpg'
  ];

  currentIndex = 0;
  translateX = 0;
  maxIndex: number;

  constructor() { 
    this.maxIndex = Math.ceil(this.images.length / 3) - 1;
  }

  ngOnInit(): void { }

  scrollRight() {
    if (this.currentIndex < this.maxIndex) {
      this.currentIndex++;
      this.translateX = -this.currentIndex * 100;
    }
  }

  scrollLeft() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.translateX = -this.currentIndex * 100;
    }
  }
}
