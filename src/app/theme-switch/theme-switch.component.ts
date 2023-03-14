import { DOCUMENT } from '@angular/common';
import { Component, Inject, Self } from '@angular/core';

enum ThemeOptions {
  Light = 'light',
  Dark = 'dark',
  Lime = 'lime',
}
const themeOptions = ['light', 'dark', 'lime'];

@Component({
  selector: 'app-theme-switch',
  templateUrl: './theme-switch.component.html',
  styleUrls: ['./theme-switch.component.scss']
})
export class ThemeSwitchComponent {

  public readonly themeOptions = Object.values(ThemeOptions);

  public theme: ThemeOptions;

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.theme = this.themeOptions.find((theme: string) => this.document.documentElement.classList.contains(`${theme}-theme`)) || ThemeOptions.Light;
  }

  public selectTheme(newTheme: ThemeOptions): void {
    if (!themeOptions.includes(newTheme)) {
      newTheme = ThemeOptions.Light;
    }
    themeOptions.forEach((theme: string) => this.document.documentElement.classList.remove(`${theme}-theme`));
    this.document.documentElement.classList.add(`${newTheme}-theme`);
    this.theme = newTheme;
  }
}
