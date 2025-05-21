// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common'; 
// @Component({
//   selector: 'app-skills',
//   imports: [CommonModule],
//   templateUrl: './skills.component.html',
//   styleUrl: './skills.component.css'
// })
// export class SkillsComponent {
// currentSlide = 0;

//   skills = [
//     {
//       title: 'Programming',
//       details: 'C++, Java, Python, JavaScript',
//       icon: 'bi bi-cpu'
//     },
//     {
//       title: 'Web Development',
//       details: 'HTML, CSS, Angular',
//       icon: 'bi bi-window'
//     },
//     {
//       title: 'Frameworks',
//       details: 'ASP.NET Core, TypeScript',
//       icon: 'bi bi-layers'
//     },
//     {
//       title: 'Databases',
//       details: 'MySQL, SQL Server',
//       icon: 'bi bi-database'
//     },
//     {
//       title: 'Tools',
//       details: 'VS Code, Git, GitHub, Jupyter',
//       icon: 'bi bi-tools'
//     },
//     {
//       title: 'Soft Skills',
//       details: 'Problem Solving, Communication, Teamwork',
//       icon: 'bi bi-person-hearts'
//     }
//   ];

//   getTransform() {
//     return `translateX(-${this.currentSlide * 100}%)`;
//   }

//   nextSlide() {
//     this.currentSlide = (this.currentSlide + 1) % this.skills.length;
//   }

//   prevSlide() {
//     this.currentSlide =
//       (this.currentSlide - 1 + this.skills.length) % this.skills.length;
//   }
// }

import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
})
export class SkillsComponent implements OnInit, OnDestroy {
  currentSlide = 0;
  intervalId!: number; 

  skills = [
    { title: 'Programming Languages', details: 'C++, Java, Python, JavaScript,C#', icon: 'bi bi-cpu' },
    { title: 'Web Development', details: 'HTML, CSS, Angular,TypeScript', icon: 'bi bi-window' },
    { title: 'Frameworks', details: 'ASP.NET Core, Angular', icon: 'bi bi-layers' },
    { title: 'Databases', details: 'MySQL, SQL Server', icon: 'bi bi-database' },
    { title: 'Tools', details: 'VS Code, Git, GitHub, Jupyter Notebook', icon: 'bi bi-tools' },
    { title: 'Soft Skills', details: 'Problem Solving, Communication, Teamwork', icon: 'bi bi-person-hearts' }
  ];

  ngOnInit(): void {
    this.startAutoSlide();
  }

  ngOnDestroy(): void {
    this.stopAutoSlide();
  }

  startAutoSlide() {
    this.intervalId = window.setInterval(() => {
      this.nextSlide();
    }, 3000); // التغيير كل 3 ثواني
  }

  stopAutoSlide() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  getTransform(): string {
    return `translateX(-${this.currentSlide * 100}vw)`;
  }

  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.skills.length;
  }

  prevSlide(): void {
    this.currentSlide = (this.currentSlide - 1 + this.skills.length) % this.skills.length;
  }
}

