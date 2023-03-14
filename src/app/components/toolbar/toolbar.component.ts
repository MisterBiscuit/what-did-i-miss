import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface IMenuOption {
  path: string;
  label: string;
}

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {

  public readonly menuOptions: IMenuOption[] = [
    { path: '/sample', label: 'Sample' },
    { path: '/teapot', label: 'Teapot' },
  ]

  constructor(private readonly router: Router) {
  }

  public goTo(url: string): void {
    console.log('goTo', url);
    this.router.navigateByUrl(url);
  }
}
