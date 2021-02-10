import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { NavigationComponent } from './navigation/navigation.component';



@NgModule({
  declarations: [ToolbarComponent, NavigationComponent],
  exports: [NavigationComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
