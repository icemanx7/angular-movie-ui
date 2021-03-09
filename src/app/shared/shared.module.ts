import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { TopNavigationModule } from './top-navigation/top-navigation.module';
import { ProgressLoaderModule } from './progress-loader/progress-loader.module';



@NgModule({
  declarations: [ToolbarComponent],
  exports: [TopNavigationModule, ProgressLoaderModule],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
