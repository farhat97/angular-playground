import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HighlighterDirective } from '../highlighter.directive';
import { ProductsComponent } from './products.component';
import { ProductListComponent } from './productList.component';
import { PListChildOne } from './PListChildren/pListChildOne.component';
import { PListChildTwo } from './PListChildren/pListChildTwo.component';

@NgModule({
    imports: [ CommonModule ],
    declarations: [ ProductsComponent, 
                    ProductListComponent,
                    PListChildOne,
                    PListChildTwo,
                    HighlighterDirective ],
    exports: [ ProductsComponent, HighlighterDirective ]
})

export class ProductsModule { }