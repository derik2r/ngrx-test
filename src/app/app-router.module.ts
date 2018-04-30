import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router'; 

export const routes: Routes = [
  { path: 'formulary', loadChildren: 'app/containers/formulary/formulary.module#FormularyModule'},
  { path: '', redirectTo: 'formulary', pathMatch: 'full' },
  { path: 'drug-list', loadChildren: 'app/containers/drug-list/drug-list.module#DrugListModule'},
];

@NgModule({
    imports: [ RouterModule.forRoot( routes ) ],
    exports: [ RouterModule ],
    declarations: [],
    providers: [],
})
export class AppRouterModule { }
