import { Component, OnInit } from '@angular/core';
import { BeltService } from '../belt.service';
import { ActivatedRoute, Params, Router} from '@angular/router'
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products;
  constructor(private _beltService:BeltService, private _route:ActivatedRoute, private _router:Router) { 
    this.products = [];
    
  }

  ngOnInit() {
    this.getProductsFromService();
  }

  getProductsFromService(){
    let observable = this._beltService.getProducts();
       observable.subscribe(data => {
          console.log("Got our products", data)
          // In this example, the array of tasks is assigned to the key 'tasks' in the data object. 
          // This may be different for you, depending on how you set up your Task API.
          this.products = data;
       });
  }
}