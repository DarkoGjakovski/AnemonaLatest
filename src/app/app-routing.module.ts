import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoritesComponent } from 'src/features/favorites/favorites.component';
import { HomePageComponent } from 'src/features/home.page/home.page.component';
import { OverlayPageComponent } from 'src/features/overlay-page/overlay-page.component';
import { ProductListComponent } from 'src/features/product.list/product.list.component';
import { ShoppingcartComponent } from 'src/features/shoppingcart/shoppingcart.component';

const routes: Routes = [
  {
    path: '',
    component: OverlayPageComponent,
    children: 
    [
      {
        path: 'home', component: HomePageComponent
      },
      {
        path: 'products', component: ProductListComponent
      },
      {
        path: 'shoppingcart', component: ShoppingcartComponent
      },
      {
        path: 'favorites', component: FavoritesComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    scrollPositionRestoration: 'enabled',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
