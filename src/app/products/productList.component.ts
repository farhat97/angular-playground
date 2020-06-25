import { Component, OnInit, Input } from '@angular/core';

import { IProduct } from '../shared/interfaces';

@Component({
    selector: 'app-productList',
    templateUrl: './productList.component.html'
})

export class ProductListComponent implements OnInit {
    
    @Input() productList: IProduct[];

    ngOnInit(): void { }

}