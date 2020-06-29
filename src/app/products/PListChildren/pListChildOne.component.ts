import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { IProduct } from '../../shared/interfaces';

@Component({
    selector: 'app-pListChildOne',
    templateUrl: './pListChildOne.component.html'
})

export class PListChildOne implements OnInit {
    ngOnInit(): void { }

    title = "pListChild 1 title";

    @Output() newListOutput = new EventEmitter<IProduct[]>();
    newList: IProduct[] = [
        { id: 1, productName: "Surface Book", productPrice: "600" },
        { id: 2, productName: "Surface Laptop", productPrice: "1000" },
        { id: 3, productName: "Macbook Pro", productPrice: "3000" },
        { id: 4, productName: "Lenovo ThinkPad", productPrice: "200" },
        { id: 5, productName: "Razer Blade", productPrice: "8000" }
    ];

    constructor() { }

    // used to change the product list in productList component
    changeProductList() {
        this.newListOutput.emit(this.newList);
    }

}