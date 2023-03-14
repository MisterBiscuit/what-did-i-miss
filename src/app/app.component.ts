import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public readonly title = 'WhatDidIMiss';

  constructor(private readonly router: Router) {
  }

  public goTo(url: string): void {
    this.router.navigateByUrl(url);
  }
}
