import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MessageAreaComponent } from '../../components/generic/message-area/message-area.component';


@NgModule({
    imports: [ CommonModule ],
    exports: [ MessageAreaComponent, CommonModule, FormsModule ],
    declarations: [ MessageAreaComponent ],
    providers: [],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class SharedModule { }
