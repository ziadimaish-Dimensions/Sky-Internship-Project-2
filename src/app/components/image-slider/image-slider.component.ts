import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Slide {
  image: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class ImageSliderComponent {
  slides: Slide[] = [
    {
      image: 'assets/carousel_image.jpg',
      title: 'Best Spots For A Summer Vacation',
      description:
        'Check out these spots where we provide you with a discount code! Type VACATION when inserting the promo code and behold the surprise!',
    },
    {
      image: 'assets/carousel_image1.png',
      title: 'Upcoming Company Events',
      description:
        'Join us for our upcoming events and team-building activities. Stay tuned for more details!',
    },
    {
      image: 'assets/carousel_image2.jpg',
      title: 'New Policy Updates',
      description:
        'We have updated our company policies. Please review them to stay informed.',
    },
  ];

  currentSlideIndex = 0;

  prevSlide() {
    if (this.currentSlideIndex === 0) {
      this.currentSlideIndex = this.slides.length - 1;
    } else {
      this.currentSlideIndex--;
    }
    this.setActiveSlide();
  }

  nextSlide() {
    if (this.currentSlideIndex === this.slides.length - 1) {
      this.currentSlideIndex = 0;
    } else {
      this.currentSlideIndex++;
    }
    this.setActiveSlide();
  }

  setActiveSlide() {
    const carouselItems = document.querySelectorAll('.carousel-item');
    carouselItems.forEach((item, index) => {
      item.classList.remove('active');
      if (index === this.currentSlideIndex) {
        item.classList.add('active');
      }
    });
  }
}
