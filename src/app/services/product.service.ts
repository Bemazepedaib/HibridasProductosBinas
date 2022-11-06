import { Injectable } from '@angular/core';
import { IonItemSliding } from '@ionic/angular';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products:Product[];
  constructor() { 
    this.products = [{
      idProduct: '1',
      name:"manzana",
      price:15,
      photo:"https://picsum.photos/200",
      quantity:0
    },{
      idProduct: '2',
      name:"platano",
      price:20,
      photo:"https://picsum.photos/200",
      quantity:0
    },{
      idProduct: '3',
      name:"pera",
      price:25,
      photo:"https://picsum.photos/200",
      quantity:0
    }]
  }
  public getProducts():Product[]{
    return this.products
  }
  public getProductById(id: string):Product{
    let item: Product;
    item = this.products.find(
      (produ)=> produ.idProduct===id
    );
    return item;
  }

}
