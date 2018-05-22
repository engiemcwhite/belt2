import { Component, OnInit } from '@angular/core';
import { BeltService } from '../belt.service';
import { ActivatedRoute, Params, Router} from '@angular/router'


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  product; 
  errors;
  constructor(private _authorService:BeltService, private _route:ActivatedRoute, private _router: Router) {
    this.product = {name: "",quantity: 0,price:0.00};
   }

  ngOnInit() {
    console.log("Attempting to go to the Create Component!")
  }

  makeProduct(){
    console.log("Attempting to make a product...");
    let observable = this._authorService.addProduct(this.product);
    observable.subscribe(data => {
      console.log("Made it back!");
      this.errors = [];
      console.log(data);
      if(data['status'] == "Not goodly"){
        for(var err in data['errors']){
          this.errors.push(data['errors'][err])
        }
        console.log(this.errors);
        for(var error in this.errors){
          console.log(this.errors[error]);
        }
        //this._router.navigate(['/products/new']);
      }
      else{
        console.log("Made a product!",data);
        this.product.name = "";
        this.product.quantity = 0;
        this.product.price = "";
        this._router.navigate(['/']);
      }
    })
    
  }
  
}
