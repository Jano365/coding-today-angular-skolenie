import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutViewComponent } from './layout-view/layout-view.component';
import { BlankViewComponent } from './blank-view/blank-view.component';
import { LayoutModule } from '../layout/layout.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    LayoutViewComponent,
    BlankViewComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
    RouterModule
  ]
})
export class ViewsModule { }
