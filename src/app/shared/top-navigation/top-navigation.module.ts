import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';




@NgModule({
  declarations: [NavbarComponent],
  exports: [NavbarComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatBadgeModule,
    MatIconModule

  ]
})
export class TopNavigationModule { }
