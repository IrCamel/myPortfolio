import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {

  ngOnInit() {
    setTimeout(() => {
      const section = document.querySelector('.hero-section') as HTMLElement;
      section.classList.add('visible');
      this.checkScroll(); // Controlla lo scroll al caricamento della pagina
    }, 100); // Delay per evitare flash di contenuto non stilizzato
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.checkScroll();
  }

  private checkScroll(): void {
    const elements = document.querySelectorAll('.text-animate') as NodeListOf<HTMLElement>;

    elements.forEach((element) => {
      const rect = element.getBoundingClientRect();

      // Elemento visibile se almeno 0.5% è visibile nella viewport
      if (rect.top <= window.innerHeight * 0.995 && rect.bottom >= window.innerHeight * 0.005) {
        element.classList.add('visible');
        element.classList.remove('invisible');
      } else if (rect.bottom < window.innerHeight * 0.005 || rect.top > window.innerHeight * 0.995) {
        element.classList.remove('visible');
        element.classList.add('invisible');
      }
    });
  }
}
