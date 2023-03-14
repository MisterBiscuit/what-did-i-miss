import { DOCUMENT } from '@angular/common';
import { ApplicationRef, Inject, Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';
import { distinctUntilChanged, filter, take } from 'rxjs/operators';

import { StorageService } from './storage.service';

export interface ITheme {
  label: string;
  value: string;
}

const THEME_STORAGE_KEY = 'theming';

const DarkTheme = { label: 'Dark', value: 'dark-theme' };
const LightTheme = { label: 'Light', value: 'light-theme' };
const DarkLimeTheme = { label: 'Dark Lime', value: 'dark-lime-theme' };
const LightLimeTheme = { label: 'Light Lime', value: 'light-lime-theme' };

const DEFAULT_THEME = LightTheme;

const themeOptions: ITheme[] = [
  LightTheme,
  DarkTheme,
  LightLimeTheme,
  DarkLimeTheme,
]

@Injectable({
  providedIn: 'root'
})
export class ThemingService {

  public readonly themeOptions: ITheme[] = themeOptions;
  public readonly currentTheme: Observable<ITheme>;
  private theme: BehaviorSubject<ITheme> = new BehaviorSubject<ITheme>(DEFAULT_THEME);
  private systemPreference: BehaviorSubject<ITheme> = new BehaviorSubject<ITheme>(DEFAULT_THEME);

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private readonly storageService: StorageService,
    private applicationRef: ApplicationRef
  ) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
      this.systemPreference.next(e.matches ? DarkTheme : LightTheme);
    });

    this.currentTheme = this.theme.asObservable();

    this.currentTheme
      .pipe(distinctUntilChanged(), filter(Boolean))
      .subscribe((newTheme: ITheme) => this.updateCurrentTheme(newTheme));

    this.getInitialValue();
  }

  public changeTheme(newTheme: ITheme): void {
    if (themeOptions.includes(newTheme)) {
      this.theme.next(newTheme);
    }
  }

  public resetTheme(): void {
    this.systemPreference.pipe(filter(Boolean), take(1)).subscribe((systemTheme: ITheme) => this.changeTheme(systemTheme));
  }

  private updateCurrentTheme(newTheme: ITheme): void {
    if (newTheme) {
      this.setThemeClass(newTheme.value);
      this.applicationRef.tick();
    }
  }

  private setThemeClass(newTheme: string): void {
    this.document.documentElement.classList.remove(...themeOptions.map(t => t.value));
    this.document.documentElement.classList.add(newTheme);
  }

  private getInitialValue(): void {
    const savedTheme = this.storageService.get<ITheme>(THEME_STORAGE_KEY);
    if (!savedTheme) {
      this.changeTheme(DEFAULT_THEME);
    }
  }
}
