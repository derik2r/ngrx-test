import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { FrameComponent } from './frame.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
          { path: '', component: FrameComponent }  
        ]),
        ReactiveFormsModule  
    ],
    exports: [],
    declarations: [ FrameComponent ],
    providers: [],
})
export class FrameModule { }
