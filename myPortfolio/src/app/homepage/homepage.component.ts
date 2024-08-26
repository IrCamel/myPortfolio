import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  private currentIndex = 0;

  ngOnInit() {
    setTimeout(() => {
      const section = document.querySelector('.hero-section') as HTMLElement;
      section.classList.add('visible');
    }, 100); // Delay per evitare flash di contenuto non stilizzato
  }
}
