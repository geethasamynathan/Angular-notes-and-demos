import { Component, OnInit } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
const products=this.getProducts()[];
title=" Product List";

productToUpdate: any;
changeStockValue(p:any) {
    this.productToUpdate = this.products.find(this.findProducts, [p.id]);
    this.productToUpdate.stock = this.productToUpdate.stock + p.updatedstockvalue;
}
findProducts(p,id) {
    return p.id=this[0];
}

  constructor() { }

  ngOnInit(): void {
this.products=this.getProducts(); 
  }

  getProducts() {
    return [
        { 'id': '1', 'title': 'Screw Driver', 'price': 400, 'stock': 11 },
        { 'id': '2', 'title': 'Nut Volt', 'price': 200, 'stock': 5 },
        { 'id': '3', 'title': 'Resistor', 'price': 78, 'stock': 45 },
        { 'id': '4', 'title': 'Tractor', 'price': 20000, 'stock': 1 },
        { 'id': '5', 'title': 'Roller', 'price': 62, 'stock': 15 },
    ];
}

}
