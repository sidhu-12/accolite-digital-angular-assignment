import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FootballersRoutingModule } from './footballers-routing.module';
import { FootballComponent } from './football/football.component';


@NgModule({
  declarations: [
    FootballComponent
  ],
  imports: [
    CommonModule,
    FootballersRoutingModule
  ]
})
export class FootballersModule { }
