import { RouterOutlet } from '@angular/router';
import { Component, AfterViewInit } from '@angular/core';
import { HeroComponent } from './sections/hero/hero.component';     // استيراد المكونات
import { AboutComponent } from './sections/about/about.component';
import { ProjectsComponent } from './sections/projects/projects.component';
import { FooterComponent } from './sections/footer/footer.component';
import {SkillsComponent} from './sections/skills/skills.component'
declare const AOS: any;
// import * as AOS from 'aos';
// import 'aos/dist/aos.css';
// import { isPlatformBrowser } from '@angular/common';
// import { Inject, PLATFORM_ID } from '@angular/core';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HeroComponent,AboutComponent,ProjectsComponent,FooterComponent,SkillsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})



export class AppComponent implements AfterViewInit {
  // constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
  
  ngAfterViewInit(): void {
    AOS.init({ duration: 1000 });
  }
  
}





// import { RouterOutlet } from '@angular/router';
// import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
// import { HeroComponent } from './sections/hero/hero.component';
// import { AboutComponent } from './sections/about/about.component';
// import { ProjectsComponent } from './sections/projects/projects.component';
// import { FooterComponent } from './sections/footer/footer.component';
// import { SkillsComponent } from './sections/skills/skills.component';

// import * as AOS from 'aos';
// import 'aos/dist/aos.css';

// import { isPlatformBrowser } from '@angular/common';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [RouterOutlet, HeroComponent, AboutComponent, ProjectsComponent, FooterComponent, SkillsComponent],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css',
// })
// export class AppComponent implements AfterViewInit {
//   constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

//   ngAfterViewInit(): void {
//     if (isPlatformBrowser(this.platformId)) {
//       AOS.init({
//         duration: 1000,
//         easing: 'ease-in-out',
//         once: true,
//       });
//     }
//   }
// }
