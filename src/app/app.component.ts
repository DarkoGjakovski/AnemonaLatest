import { ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductService } from 'src/services/product.service';
import { fadeAnimation } from './animations';
import { MatSidenavContent } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [fadeAnimation]
})
export class AppComponent implements OnInit{

  constructor(){
    if(localStorage.getItem("cartItems")==null){
      localStorage.setItem("cartItems",JSON.stringify([]))
    }
  }

  ngOnInit(): void {
  }

}
