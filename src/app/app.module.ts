import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import { SearchBoxComponent } from 'src/features/search.box/search.box.component';
import { ProductListComponent } from 'src/features/product.list/product.list.component';
import { HomePageComponent } from 'src/features/home.page/home.page.component';
import { FilterCardComponent } from 'src/features/product.list/filter.card/filter.card.component';
import {MatSliderModule} from '@angular/material/slider';
import { productCardComponent } from 'src/features/product.list/product.card/product.card.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from 'src/features/footer/footer.component';
import { ShoppingcartComponent } from 'src/features/shoppingcart/shoppingcart.component';
import {MatSelectModule} from '@angular/material/select';
import { ProductService } from 'src/services/product.service';
import { ShoppingCartService } from 'src/services/shoppingCart.service';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { ShoppingCartProductComponent } from 'src/features/shoppingcart/shoppingCartProduct/shopping-cart-product/shopping-cart-product.component';
import { FavoritesComponent } from 'src/features/favorites/favorites.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {MatToolbarModule} from '@angular/material/toolbar'
import {FlexLayoutModule} from '@angular/flex-layout'
import {MatMenuModule} from '@angular/material/menu'
import {MatButtonModule} from '@angular/material/button'
import {MatTabsModule} from '@angular/material/tabs'
import {MatSidenavModule} from '@angular/material/sidenav'
import { OverlayPageComponent } from 'src/features/overlay-page/overlay-page.component';
import { LoaderService } from 'src/shared/services/loader.service';
import { LoaderComponent } from 'src/shared/loader/loader.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { ManageProductsPanelComponent } from 'src/features/manage-products-panel/manage-products-panel.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { HttpClientModule } from '@angular/common/http';
import { MatSortModule } from '@angular/material/sort';
import { AboutUsComponent } from 'src/features/about-us/about-us.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchBoxComponent,
    ProductListComponent,
    HomePageComponent,
    FilterCardComponent,
    ShoppingcartComponent,
    productCardComponent,
    FooterComponent,
    ShoppingCartProductComponent,
    FavoritesComponent,
    OverlayPageComponent,
    LoaderComponent,
    ManageProductsPanelComponent,
    AboutUsComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    NgxPaginationModule,
    AppRoutingModule,
    MatDividerModule,
    MatIconModule,
    MatSliderModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    BrowserAnimationsModule,
    MatSelectModule,
    FormsModule,
    MatSnackBarModule,
    FontAwesomeModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatMenuModule,
    MatButtonModule,
    MatSidenavModule,
    MatTabsModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [ProductService, ShoppingCartService, LoaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
