import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import * as path from 'path';
import { PortfolioModule } from './portfolio.module';
import {PortfolioComponent} from './portfolio.component'

//const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(
    [{
      path: '',
      component: PortfolioComponent,
      children: [
        { path: '', component: PortfolioComponent },
      ]
    }
  ]
  )],
  exports: [RouterModule]
})
export class PortfolioRoutingModule { }
