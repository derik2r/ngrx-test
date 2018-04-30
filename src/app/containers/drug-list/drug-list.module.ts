import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { DrugListComponent } from './drug-list.component';
import { DrugListResultComponent } from '../../components/drug-list-result/drug-list-result.component';
import { DrugListSearchFormComponent } from '../../components/drug-list-search-form/drug-list-search-form.component';


@NgModule({
    imports: [
      CommonModule,
      RouterModule.forChild([
        { path: '', component: DrugListComponent }  
      ]),
      ReactiveFormsModule  
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
