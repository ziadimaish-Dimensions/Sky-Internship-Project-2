// src/app/components/image-slider/image-slider.component.ts
import { Component } from '@angular/core';

interface Slide {
  image: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css'],
  standalone: true
})
export class ImageSliderComponent {
  slides: Slide[] = [
    {
      image: 'assets/carousel_image1.jpg',
      title: 'Best Spots For A Summer Vacation',
      description:
        'Check out these spots where we provide you with a discount code! Type VACATION when inserting the promo code and behold the surprise!',
    },
    {
      image: 'assets/carousel_image2.jpg',
      title: 'Upcoming Company Events',
      description:
        'Join us for our upcoming events and team-building activities. Stay tuned for more details!',
    },
    {
      image: 'assets/carousel_image3.jpg',
      title: 'New Policy Updates',
      description:
        'We have updated our company policies. Please review them to stay informed.',
    },
  ];
}
