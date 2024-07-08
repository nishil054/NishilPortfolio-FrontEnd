import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PortfolioModule} from './portfolio/portfolio.module'

const routes: Routes = [
    //{ path: '', redirectTo: '/app/about', pathMatch: 'full' },
    {
        path: 'account',
        loadChildren: () => import('account/account.module').then(m => m.AccountModule), // Lazy load account module
        data: { preload: true }
    },
    {
        path: 'app',
        loadChildren: () => import('app/app.module').then(m => m.AppModule), // Lazy load account module
        data: { preload: true }
    },
    {
        path: '',
        loadChildren: () => import('portfolio/portfolio.module').then(m => m.PortfolioModule), // Lazy load account module
        data: { preload: true }
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})
export class RootRoutingModule { }
