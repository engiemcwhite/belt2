import { Component, OnInit } from '@angular/core';
import { BeltService } from '../belt.service';
import { ActivatedRoute, Params, Router} from '@angular/router'

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  product:any;
  id;
  isValid;
  currProduct;
  errors;
  
  constructor(private _beltService:BeltService, private _route:ActivatedRoute, private _router: Router) {
    this.product = {name:"",quantity:0,price:0};
    this.isValid = true;
    this.currProduct = {name:"",quantity:0,price:0};
  }

  ngOnInit() {
    this._route.params.subscribe((params: Params)=> this.id = params["id"] );
    console.log(this.id);
    this.findProduct();
    console.log(this.product);
    console.log("Now making a backup product.")
    console.log(this.currProduct);
  }
  
  findProduct(){
    console.log(this.id);
    let observable = this._beltService.getOneProduct(this.id);
    observable.subscribe(data=>{
      console.log("Found my product!");
      this.product = data;
      this.currProduct = this.product;
      console.log(this.product);
      //this.author.name = data["name"];
    })
  }

  changeProduct(){
    console.log("Attempting to change the product!")
    console.log(this.product);
    console.log(this.id);
    this.errors = [];
    let observable = this._beltService.updateProduct(this.product,this.id);
    observable.subscribe(data => {
      console.log(data['status']);
      if(data['status'] == "Not goodly"){
        for(var err in data['errors']){
          this.errors.push(data['errors'][err])
        }
        console.log(this.errors);
        for(var error in this.errors){
          console.log(this.errors[error]);
        }
      }
      else{
        console.log("Changed a product!",data);
        this._router.navigate(['/']);
      }
    })

  }

  isValidForm() {
    return this.isValid;
  }
  reset(){
    console.log("Attempting to reset.");
    this.product = this.currProduct;
    console.log(this.currProduct);
    console.log(this.product);
  }
  
}
