import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { WheelSetComponent } from './wheel-set.component';
import { WheelSetResultComponent } from '../../components/wheel-set-result/wheel-set-result.component';
import { WheelSetSearchFormComponent } from '../../components/wheel-set-search-form/wheel-set-search-form.component';
import { WheelSetAddComponent } from '../../components/wheel-set-add/wheel-set-add.component'; 
import { SharedModule } from '../shared/shared.module';


@NgModule({
    imports: [
      CommonModule,
      RouterModule.forChild([
        { path: '', component: WheelSetComponent }  
      ]),
      ReactiveFormsModule,
      SharedModule  
    ],
    exports: [],
    declarations: [ 
      WheelSetComponent,
      WheelSetResultComponent,
      WheelSetSearchFormComponent,
      WheelSetAddComponent
    ],
    providers: [],
})
export class WheelSetModule { }
