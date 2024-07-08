import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TopNavBarComponent} from './top-nav-bar/top-nav-bar.component'
@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule , TopNavBarComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {

}
