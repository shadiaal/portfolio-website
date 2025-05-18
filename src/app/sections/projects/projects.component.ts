import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {


 projects = [
    {
      title: 'Freelance platform',
      description: 'A full-stack web app that connects freelancers and clients, supporting complete project management with real-time chat, secure payments, and SMS notifications.',
      Technologies:'.NET Core, Angular, MySQL, JWT, BugSnag.',
      image: 'assets/freelancer.jpg',
      link: 'http://freelancerfrontend.s3-website.eu-north-1.amazonaws.com/home'
    },
    {
      title: 'Secure Link Website',
      description: 'Built a website that uses AI to detect and evaluate phishing links, enhancing online security. Gained practical experience in AI, machine learning, and web development.',
      Technologies:'HTML, CSS, Django, Python, Jupyter Notebook.',
      image: 'assets/ai-generated.jpg',
      link: 'https://github.com/your-github/project-2'
    },
    {
      title: 'Health Informatics System ',
      description: 'An integrated system with role-based dashboards for Admin, Doctor, and Patient to securely manage data and appointments. Features JWT authentication and real-time error monitoring with BugSnag.',
      Technologies:'.NET Core, Angular, MySQL, JWT, BugSnag.',
      image: 'assets/HealthSystem.png',
      link: 'https://github.com/your-github/project-3'
    }
  ];
}
