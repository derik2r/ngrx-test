import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { FormularyComponent } from './formulary.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
          { path: '', component: FormularyComponent }  
        ]),
        ReactiveFormsModule  
    ],
    exports: [],
    declarations: [ FormularyComponent ],
    providers: [],
})
export class FormularyModule { }
