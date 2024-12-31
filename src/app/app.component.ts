import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterModule, RouterLink } from '@angular/router';
import { CommonModule, DatePipe } from '@angular/common';

declare const Lenis: any;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    RouterModule,
    RouterLink,
    CommonModule,
    DatePipe
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'unite';
  private lenis: any;
  isMenuOpen: boolean = false;
  isHovered: boolean = false;
  currentTime: Date = new Date();

  ngOnInit() {
    this.lenis = new Lenis();

    const raf = (time: number) => {
      this.lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    setInterval(() => {
      this.currentTime = new Date();
    }, 60000);
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    if (this.isMenuOpen) {
      this.lenis.stop();
    } 
    else {
      this.lenis.start();
    }
  }
}
