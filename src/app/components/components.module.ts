import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../material.module';

import { ThemeSwitchComponent } from './theme-switch/theme-switch.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
  ],
  declarations: [
    ThemeSwitchComponent,
    ToolbarComponent,
  ],
  exports: [
    ThemeSwitchComponent,
    ToolbarComponent,
    ],
})
export class ComponentsModule {}
