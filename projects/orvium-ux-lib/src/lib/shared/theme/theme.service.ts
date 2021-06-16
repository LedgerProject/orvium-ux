import { Inject, Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { DOCUMENT } from '@angular/common';

/** @dynamic */
@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  theme: Observable<[string, boolean]>;
  private mainTheme: BehaviorSubject<string> = new BehaviorSubject('theme-light');
  private darkMode: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  darkModeObservable: Observable<boolean> = this.darkMode.asObservable();
  private renderer: Renderer2;
  private head: HTMLElement;
  private themeLinks: HTMLElement[] = [];

  constructor(
    rendererFactory: RendererFactory2,
    @Inject(DOCUMENT) document: Document
  ) {
    this.head = document.head;
    this.renderer = rendererFactory.createRenderer(null, null);
    this.theme = combineLatest(this.mainTheme, this.darkMode);
    this.theme.subscribe(async ([mainTheme, darkMode]) => {
      const cssExt = '.css';
      const cssFilename = darkMode ? 'theme-dark' + cssExt : mainTheme + cssExt;
      await this.loadCss(cssFilename);
      if (this.themeLinks.length == 2)
        this.renderer.removeChild(this.head, this.themeLinks.shift());
    });
  }

  setMainTheme(name: string) {
    this.mainTheme.next(name);
  }

  setDarkMode(value: boolean) {
    this.darkMode.next(value);
  }


  private async loadCss(filename: string) {
    return new Promise(resolve => {
      const linkEl: HTMLElement = this.renderer.createElement('link');
      this.renderer.setAttribute(linkEl, 'rel', 'stylesheet');
      this.renderer.setAttribute(linkEl, 'type', 'text/css');
      this.renderer.setAttribute(linkEl, 'href', filename);
      this.renderer.setProperty(linkEl, 'onload', resolve);
      this.renderer.appendChild(this.head, linkEl);
      this.themeLinks = [...this.themeLinks, linkEl];
    });
  }
}
