import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MaterialModule } from '../material.module';

import { SampleComponent } from './sample/sample.component';
import { TeapotComponent } from './teapot/teapot.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
  ],
  declarations: [
    SampleComponent,
    TeapotComponent,
  ],
})
export class PagesModule {}
