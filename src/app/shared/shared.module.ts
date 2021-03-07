import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { TopNavigationModule } from './top-navigation/top-navigation.module';



@NgModule({
  declarations: [ToolbarComponent],
  exports: [TopNavigationModule],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
