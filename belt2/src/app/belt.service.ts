import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BeltService {
  constructor(private _http:HttpClient) {
    console.log("hi service");
  }

  getProducts(){
    return this._http.get('/products');    
  }

  getOneProduct(id){ //calls server
    return this._http.get('/products/'+id);
  }

  addProduct(data){
    console.log(data);
    console.log("Made it to the service!");
    return this._http.post('/products',data);
  }

  updateProduct(data,id){
    console.log(id);  
    console.log("I made it to the service boys!");
    return this._http.put('/products/'+id,data);
  }

  deleteProduct(id){
    console.log(id);
    return this._http.delete('/products/'+id);
  }
}