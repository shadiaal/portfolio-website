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
  title: 'Freelance Platform',
  description: 'A full-stack platform that connects freelancers and clients with project management, real-time chat, and secure payments.',
  technologies: '.NET Core, Angular, SQL Server, Firebase, BugSnag.',
  image: 'assets/freelancer.jpg',
  live: 'http://freelancerfrontend.s3-website.eu-north-1.amazonaws.com/home',
  github: 'https://github.com/shadiaal/freelance_marketplace',
  video: 'assets/freelancemarketplaceDemo.mp4'
},

 
 {
  title: 'Health Informatics System',
  description: 'A role-based system for managing health records and appointments with dashboards for Admins, Doctors, and Patients. Features JWT authentication and real-time error tracking with BugSnag.',
  technologies: '.NET Core, Angular, MySQL, JWT, BugSnag.',
  image: 'assets/HealthSystem.png',
  github: 'https://github.com/shadiaal/Monthly_Project_1',
  video: 'assets/HealthSystemDemo1.mp4'
},


 {
  title: 'Secure Link Website',
  description: 'An AI-based web app that detects and classifies phishing URLs using machine learning models trained on malicious data.',
  technologies: 'HTML, CSS, Django, Python, Jupyter Notebook.',
  image: 'assets/ai-generated.jpg',
  github: 'https://github.com/shadiaal/Web_projects',
  video: 'assets/SecureLinkeWebsite.mp4'
}


];

}
