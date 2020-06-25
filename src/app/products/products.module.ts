import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HighlighterDirective } from '../highlighter.directive';
import { ProductsComponent } from './products.component';
import { ProductListComponent } from './productList.component';

@NgModule({
    imports: [ CommonModule ],
    declarations: [ ProductsComponent, ProductListComponent, HighlighterDirective ],
    exports: [ ProductsComponent, HighlighterDirective ]
})

export class ProductsModule { }