import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss',
})
export class HomepageComponent {
  ngOnInit() {
    setTimeout(() => {
      const section = document.querySelector('.hero-section') as HTMLElement;
      section.classList.add('visible');
    }, 100); // Delay per evitare flash di contenuto non stilizzato
  }
}
