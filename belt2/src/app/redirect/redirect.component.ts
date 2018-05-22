import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router} from '@angular/router'
import { BeltService } from '../belt.service';

@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.component.html',
  styleUrls: ['./redirect.component.css']
})
export class RedirectComponent implements OnInit {

  constructor(private _beltService:BeltService, private _route:ActivatedRoute, private _router:Router) { }

  ngOnInit() {
    this._router.navigate(['/products']);
  }

}
