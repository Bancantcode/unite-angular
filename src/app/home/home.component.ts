import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

interface Service {
  title: string;
  description: string;
  link: string;
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
  services: Service[] = [
    {
      title: 'Frontend Development',
      description: 'Crafting responsive and intuitive user interfaces with modern frontend technologies and best practices.',
      link: '#'
    },
    {
      title: 'Web Design',
      description: 'Creating visually stunning and user-friendly interfaces that elevate the digital experience.',
      link: '#'
    },
    {
      title: 'SEO Optimization',
      description: 'Enhancing your digital presence through strategic optimization for better search engine visibility and rankings.',
      link: '#'
    }
  ];
}
