import { BreakpointObserver } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenavContent } from '@angular/material/sidenav';
import { BehaviorSubject, map, Observable, shareReplay } from 'rxjs';
import { ProductService } from 'src/services/product.service';

@Component({
  selector: 'app-overlay-page',
  templateUrl: './overlay-page.component.html',
  styleUrls: ['./overlay-page.component.css']
})
export class OverlayPageComponent implements OnInit {

  numberOfItemsInCart = new BehaviorSubject<number>(0);
  title = 'anemona';
  @ViewChild('nav', {static: false}) el !: MatSidenavContent;

  isHandset$: Observable<boolean> =
  this.breakpointObserver.observe('(max-width: 1270px)').pipe(
    map(result => result.matches),
    shareReplay(1),
  );

  constructor(private productService: ProductService, private changeDet: ChangeDetectorRef, private breakpointObserver: BreakpointObserver) { 
    this.productService.numberOfItemsInCart.subscribe(newValue => {
      this.numberOfItemsInCart.next(newValue)
    })
  }

  ngOnInit(): void {
    if(localStorage.getItem("cartItems")!==null){
      let cartProducts = JSON.parse(localStorage.getItem("cartItems") || "[]");
      this.numberOfItemsInCart.next(cartProducts.length)
      this.changeDet.detectChanges()
    }
  }

  onActivate(e: any) {
    if(this.el && this.el.getElementRef().nativeElement) {
      setTimeout(()=>{
        this.el.getElementRef().nativeElement.scrollTop = 0;
      },300)
    }
  }

}
