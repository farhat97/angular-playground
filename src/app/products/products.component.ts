import { Component, OnInit } from '@angular/core';

import { IProduct } from '../shared/interfaces';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {

  title = "ProductsComponent";

  productList: IProduct[] = [
    { id: 1, productName: "Fender Telecaster", productPrice: "600" },
    { id: 2, productName: "G&L Asat Classic", productPrice: "1000" },
    { id: 3, productName: "Minimoog Modular", productPrice: "3000" },
    { id: 4, productName: "Korg Volca Beats", productPrice: "200" }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
