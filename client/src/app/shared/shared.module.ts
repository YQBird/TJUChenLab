import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * This shared module does not need to be injected into appModule, 
 *  inject elsewhere when reusable compnents are needed. 
 */
@NgModule({
    imports: [ CommonModule ],
    declarations: [],
    exports: [ CommonModule ],
})
export class sharedModule {}