import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { DrugListComponent } from './drug-list.component';
import { DrugListResultComponent } from '../../components/drug-list-result/drug-list-result.component';
import { DrugListSearchFormComponent } from '../../components/drug-list-search-form/drug-list-search-form.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
    imports: [
      CommonModule,
      RouterModule.forChild([
        { path: '', component: DrugListComponent }  
      ]),
      ReactiveFormsModule,
      SharedModule  
    ],
    exports: [],
    declarations: [ 
      DrugListComponent,
      DrugListResultComponent,
      DrugListSearchFormComponent
    ],
    providers: [],
})
export class DrugListModule { }
