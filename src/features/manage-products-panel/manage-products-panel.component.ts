import { AfterViewInit, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { BehaviorSubject, Subscription } from 'rxjs';
import { Product } from 'src/models/product';
import { ProductService } from 'src/services/product.service';

@Component({
  selector: 'app-manage-products-panel',
  templateUrl: './manage-products-panel.component.html',
  styleUrls: ['./manage-products-panel.component.css']
})
export class ManageProductsPanelComponent implements OnInit, OnDestroy, AfterViewInit{

  route: any;
  products = new BehaviorSubject<Product[]>([]);
  sub$ = new Subscription();
  pageSizeOptions = [10,25,50];

  displayedColumns: string[] = ['title', 'description', 'available', 'price', 'edit', 'delete'];
  dataSource: MatTableDataSource<any> = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  isLoading = new BehaviorSubject(true);

  constructor(private productService: ProductService, private changeDetectionRef: ChangeDetectorRef) { 
    this.sub$.add(
      this.productService.refreshProducts.subscribe(newProducts => {
        this.products.next(newProducts);
        this.dataSource = new MatTableDataSource(newProducts);
        this.products = this.dataSource.connect();
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.productService.isSearching$.next(false);
        this.isLoading.next(false)
      })
    )
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  ngOnDestroy(): void {
    this.sub$.unsubscribe()
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data) => {
      this.products.next(data);
      this.dataSource = new MatTableDataSource(data);
      this.products = this.dataSource.connect();
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.log(this.dataSource)
      this.isLoading.next(false)
      console.log(this.isLoading.value)
    });
  }
  
  getProducts() {
    return this.productService.getProducts().subscribe((data) => {
      this.products.next(data);
      this.dataSource = new MatTableDataSource(data);
      this.products = this.dataSource.connect();
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.log(this.dataSource)
      this.isLoading.next(false)
      console.log(this.isLoading.value)
    });
  }

  deleteProduct(productId: number){

  }

  editProduct(product: Product){
    
  }
}
