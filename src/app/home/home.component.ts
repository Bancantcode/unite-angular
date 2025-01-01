import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

interface Service {
  title: string;
  description: string;
  link: string;
}

interface ServiceImage {
  name: string;
  src: string;
  link: string;
  alt: string;
}

@Component({
  selector: 'app-home',
  imports: [
    RouterModule,
    CommonModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  serviceImages: ServiceImage[] = [
    {
      name: 'Frontend Development',
      src: 'services-frontend-2.webp',
      link: '/services',
      alt: 'Frontend image'
    },
    {
      name: 'Web Design',
      src: 'services-seo-1.webp',
      link: '/services',
      alt: 'Web design image'
    },
    {
      name: 'SEO Optimization',
      src: 'services-web-design-3.webp',
      link: '/services',
      alt: 'Seo image'
    }
  ];

  services: Service[] = [
    {
      title: 'Frontend Development',
      description: 'Crafting responsive and intuitive user interfaces with modern frontend technologies and best practices.',
      link: '/services'
    },
    {
      title: 'Web Design',
      description: 'Creating visually stunning and user-friendly interfaces that elevate the digital experience.',
      link: '/services'
    },
    {
      title: 'SEO Optimization',
      description: 'Enhancing your digital presence through strategic optimization for better search engine visibility and rankings.',
      link: '/services'
    }
  ];

  currentImageIndex = 0;

  ngOnInit() {
    setInterval(() => {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.serviceImages.length;
    }, 5000);
  }
}
