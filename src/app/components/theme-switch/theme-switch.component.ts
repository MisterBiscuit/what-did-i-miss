import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ITheme, ThemingService } from '../../shared/theming.service';

@Component({
  selector: 'app-theme-switch',
  templateUrl: './theme-switch.component.html',
  styleUrls: ['./theme-switch.component.scss']
})
export class ThemeSwitchComponent {

  public readonly themeOptions: ITheme[];
  public readonly theme: Observable<ITheme>;

  constructor(
    public readonly themingService: ThemingService,
  ) {
    this.themeOptions = this.themingService.themeOptions;
    this.theme = this.themingService.currentTheme;
  }

  public selectTheme(newTheme: ITheme): void {
    this.themingService.changeTheme(newTheme);
  }
}
