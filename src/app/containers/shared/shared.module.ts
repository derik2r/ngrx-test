import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { MessageAreaComponent } from '../../components/generic/message-area/message-area.component';

@NgModule({
    imports: [],
    exports: [],
    declarations: [ MessageAreaComponent ],
    providers: [],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class SharedModule { }
