import { Component, OnInit } from '@angular/core';
import { BeltService } from '../belt.service';
import { ActivatedRoute, Params, Router} from '@angular/router'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  product:any;
  id;
  isValid;
  currProduct:any;
  constructor(private _beltService:BeltService, private _route:ActivatedRoute, private _router: Router) {
    this.product = {name:"",quantity:0,price:""};
    this.isValid = true;
  }

  ngOnInit() {
    console.log("Attempting to go into the Details component!")
    this._route.params.subscribe((params: Params)=> this.id = params["id"] );
    console.log(this.id);
    this.findProduct();
    console.log(this.product);
    this.currProduct=this.product;
  }
  
  findProduct(){
    console.log(this.id);
    let observable = this._beltService.getOneProduct(this.id);
    observable.subscribe(data=>{
      console.log("Found my product!");
      this.product = data;
      console.log(this.product);
      //this.author.name = data["name"];
    })
  }

 
  // likePet(){
  //     this.isValid = false;
  //     console.log("Attempting to change the like count!")
  //     this.pet.likes++;
  //     let observable = this._beltService.updatePet(this.pet,this.id);
  //     observable.subscribe(data => {
  //       console.log("Changed a pet!",data);
  //     })
  // }
  removeProduct(){
    let observable = this._beltService.deleteProduct(this.id);
    observable.subscribe(data=>{
      console.log("Deleted this product!");
      this._router.navigate(['/']);
    })
    
  }
  isValidForm() {
    return this.isValid;
  }
}