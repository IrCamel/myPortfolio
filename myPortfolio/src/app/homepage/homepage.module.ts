import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageRoutingModule } from './homepage-routing.module';
import { HomepageComponent } from './homepage.component';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    HomepageComponent
  ],
  imports: [
    CommonModule,
    HomepageRoutingModule,
    NgbTooltipModule
  ]
})
export class HomepageModule { }
