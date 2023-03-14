import { DOCUMENT } from '@angular/common';
import { Component, Inject, Self } from '@angular/core';

export enum ThemeClass {
  Dark = 'dark-theme',
}
export enum Theme {
  Light = 'light',
  Dark = 'dark',
}

@Component({
  selector: 'app-theme-switch',
  templateUrl: './theme-switch.component.html',
  styleUrls: ['./theme-switch.component.scss']
})
export class ThemeSwitchComponent {

  public readonly Theme = Theme;

  public theme: Theme;

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.theme = this.document.documentElement.classList.contains(ThemeClass.Dark)
      ? Theme.Dark
      : Theme.Light;
  }

  public selectLightTheme(): void {
    this.document.documentElement.classList.remove(ThemeClass.Dark);
    this.theme = Theme.Light;
  }

  public selectDarkTheme(): void {
    this.document.documentElement.classList.add(ThemeClass.Dark);
    this.theme = Theme.Dark;
  }
}
