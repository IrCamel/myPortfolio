import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  images: string[] = [
    '../../assets/immagine_curriculum-removebg-preview.png',
    '../../assets/Progetto senza titolo (1).jpg',
    // Aggiungi qui i percorsi delle tue immagini
  ];

  ngOnInit() {
    setTimeout(() => {
      const section = document.querySelector('.hero-section') as HTMLElement;
      section.classList.add('visible');
    }, 100); // Delay per evitare flash di contenuto non stilizzato
  }
}
