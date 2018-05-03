import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router'; 

export const routes: Routes = [
  { path: 'frame', loadChildren: 'app/containers/frame/frame.module#FrameModule'},
  { path: '', redirectTo: 'frame', pathMatch: 'full' },
  { path: 'wheel-set', loadChildren: 'app/containers/wheel-set/wheel-set.module#WheelSetModule'},
];

@NgModule({
    imports: [ RouterModule.forRoot( routes ) ],
    exports: [ RouterModule ],
    declarations: [],
    providers: [],
})
export class AppRouterModule { }
