import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [RouterModule, CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  people = [
    {
      name: 'LUIS MIGUEL CAYANAN',
      title: 'Front-End Developer',
      imageUrl: '/assets/images/placeholder-minji.webp',
      profileInfo: [
        { label: 'Employee Number', detail: '20897550' },
        { label: 'Full Name', detail: 'Luis Miguel Iglesias Cayanan' },
        { label: 'Gender', detail: 'Male' },
        { label: 'Email', detail: 'lmicayanan@gmail.com' },
        { label: 'Employment Status', detail: 'Homeless' },
        { label: 'Salary', detail: 'PHP 0.23 per month' }
      ],
      linkedin: '',
      github: 'lmcay',
      isDetailsShown: false
    },
    {
      name: 'BRYAN AARON SANTIAGO',
      title: 'Front-End Developer',
      imageUrl: '/assets/images/placeholder-haerin.webp',
      profileInfo: [
        { label: 'Employee Number', detail: '20935473' },
        { label: 'Full Name', detail: 'Bryan Aaron Baggao Santiago' },
        { label: 'Gender', detail: 'Male' },
        { label: 'Email', detail: 'santiagobryan831@gmail.com' },
        { label: 'Employment Status', detail: 'Married' },
        { label: 'Salary', detail: 'PHP 500,000.00 per month' }
      ],
      linkedin: '',
      github: 'bancantcode',
      isDetailsShown: false

    },
    {
      name: 'JIMWEL VALDEZ',
      title: 'Front-End Developer',
      imageUrl: '/assets/images/placeholder-hanni.webp',
      profileInfo: [
        { label: 'Employee Number', detail: '20902252' },
        { label: 'Full Name', detail: 'Jimwel Losito Valdez' },
        { label: 'Gender', detail: 'Male' },
        { label: 'Email', detail: 'jimvdz@protonmail.com' },
        { label: 'Employment Status', detail: 'Student and Single' },
        { label: 'Salary', detail: 'PHP 722,000.00 per month' }
      ],
      linkedin: 'jimwel-valdez',
      github: 'jimvdz',
      isDetailsShown: false
    }
  ];
}
