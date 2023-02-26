import { ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductService } from 'src/services/product.service';
import { fadeAnimation } from './animations';
import { MatSidenavContent } from '@angular/material/sidenav';
import { NavigationEnd, Route, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [fadeAnimation]
})
export class AppComponent implements OnInit{

  constructor(private router: Router){
    if(localStorage.getItem("cartItems")==null){
      localStorage.setItem("cartItems",JSON.stringify([]))
    }
    
  }

  ngOnInit(): void {
   
  }

}
